# Watch Brasil — Frontend Technical Overview

Plataforma de streaming de shows e festivais ao vivo, construída com **Next.js 16**, **React 19**, **TypeScript** e **Tailwind CSS v4**. Este documento descreve as decisões técnicas e implementações realizadas no projeto, com foco em **Web Performance**, **SEO**, **Acessibilidade (WCAG 2.1 AA)** e **Responsive Design**.

---

## Stack

| Tecnologia | Versão | Finalidade |
|---|---|---|
| Next.js | 16.1 | Framework React (App Router) |
| React | 19 | UI Library |
| TypeScript | 5 | Tipagem estática |
| Tailwind CSS | v4 | Utility-first CSS |
| CVA | 0.7 | Variantes de componentes type-safe |
| Lucide React | 0.563 | Ícones SVG |
| next/font | — | Otimização de fontes |
| next/image | — | Otimização de imagens |

---

## Arquitetura

O projeto segue uma estrutura modular com separação clara de responsabilidades:

```
app/
  (features)/
    (pages)/
      (home)/
        components/   # Componentes de página (Hero, ShowSection, etc.)
        hooks/        # Lógica de estado (useHero)
      layout.tsx
components/
  layout/             # Header, Footer
  ui/                 # Design System: Button, Card, Carousel, Badge, etc.
hooks/                # Hooks reutilizáveis (useCarousel, useInterleaveAds)
data/                 # Mock data (shows, ads, genres)
lib/                  # Utilitários (cn, typeGuards)
types/                # Tipos globais
```

Cada componente UI segue o padrão:
- `Component.tsx` — implementação
- `Component.types.ts` — contrato de props
- `Component.variants.ts` — variantes via CVA
- `index.ts` — barrel export

---

## Web Performance

### Otimização de Imagens com `next/image`

Todos os cards de conteúdo (`Card`, `CardAds`, `GenreCard`, `LiveCard`) utilizam o componente `next/image`, que entrega:

- **Formato moderno automático** (WebP/AVIF) conforme suporte do browser
- **Lazy loading nativo** por padrão
- **`sizes` attribute** configurado por componente para evitar download de imagem maior que o necessário
- **`fill` + `object-cover`** para imagens de fundo sem layout shift

O componente `Card` foi refatorado para substituir o `background-image` CSS por `next/image`, garantindo que a LCP (Largest Contentful Paint) seja corretamente otimizada pelo browser:

```tsx
// Antes — CSS background, não otimizado pelo Next.js
<div style={{ backgroundImage: `url(${image})` }} />

// Depois — next/image com fill, lazy load e formato moderno
<Image src={image} alt={alt} fill className="object-cover" sizes="208px" />
```

### Fontes com `display: swap`

As três fontes do projeto (`Roboto`, `Babylonica`, `Axiforma`) são carregadas com `display: "swap"`, evitando FOIT (Flash of Invisible Text) durante o carregamento:

```ts
const roboto = Roboto({ display: "swap", ... });
```

`next/font` elimina requisições externas para fontes — elas são hospedadas junto ao build, sem round-trips extras.

### Preconnect para recursos externos

O YouTube IFrame API é carregado sob demanda (lazy, via `useEffect`). Para reduzir a latência quando o browser iniciar a conexão, são declarados `preconnect` e `dns-prefetch` no `<head>`:

```html
<link rel="preconnect" href="https://www.youtube.com" />
<link rel="preconnect" href="https://www.youtube-nocookie.com" />
<link rel="dns-prefetch" href="https://i.ytimg.com" />
```

### YouTube API carregada sob demanda

O player YouTube é inicializado somente no `useEffect` do componente Hero, evitando bloqueio do thread principal durante o carregamento inicial da página.

### Security Headers via `next.config.ts`

Headers HTTP de segurança configurados para todas as rotas, reduzindo superfície de ataque e melhorando o score de auditoria:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## SEO

Embora o projeto seja uma plataforma privada (autenticada), todas as boas práticas de SEO técnico foram implementadas a nível de código para demonstrar domínio da disciplina.

### Metadata Estruturada

```ts
export const metadata: Metadata = {
  title: {
    default: "Watch Brasil — Streaming de Shows ao Vivo",
    template: "%s | Watch Brasil",  // Páginas internas herdam o template
  },
  description: "Assista shows ao vivo, conteúdo exclusivo e os maiores festivais...",
  keywords: ["streaming", "shows ao vivo", "festivais", "música", ...],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Watch Brasil",
    title: "...",
    description: "...",
  },
  twitter: {
    card: "summary_large_image",
    title: "...",
    description: "...",
  },
  robots: {
    index: false,   // Site privado — instrui crawlers a não indexar
    follow: false,
    noarchive: true,
  },
};
```

### Atributo `lang` correto

Corrigido de `lang="pt-Br"` (inválido) para `lang="pt-BR"` (BCP 47 padrão), informação essencial para leitores de tela e motores de busca:

```html
<html lang="pt-BR">
```

### Hierarquia semântica de headings

Cada seção usa a tag de heading correta:
- `<h1>` — nome do artista no Hero (único por página)
- `<h2>` — títulos de seção (`ShowSection`, `Genre`)
- `<h3>` — cards de gênero (`GenreCard`)

---

## Acessibilidade (WCAG 2.1 AA)

### 2.4.1 — Skip Navigation (Bypass Blocks)

Link "Pular para o conteúdo principal" adicionado como primeiro elemento do `<body>`, visível apenas no foco do teclado:

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] ..."
>
  Pular para o conteúdo principal
</a>
<main id="main-content">...</main>
```

### 1.3.1 — Informação e Relacionamentos (Landmarks)

Todos os landmarks semânticos estão presentes e rotulados:

| Elemento | `aria-label` |
|---|---|
| `<header>` | "Cabeçalho principal" |
| `<nav>` (desktop) | "Navegação principal" |
| `<nav>` (mobile) | "Navegação mobile" |
| `<main>` | id="main-content" |
| `<footer>` | "Rodapé do site" |
| Carousels | `aria-label` específico por seção |
| CtaBanner | "Banner promocional" |

### 4.1.2 — Nome, Função e Valor

**Menus interativos com estado correto:**

```tsx
// Hamburguer button
<button aria-expanded={isOpen} aria-controls="mobile-menu-drawer" aria-haspopup="dialog">

// Drawer
<div id="mobile-menu-drawer" role="dialog" aria-modal="true" aria-label="Menu de navegação">

// Dropdown buttons
<button aria-expanded={isOpen} aria-haspopup="true">
```

**Botão de play/pause do vídeo:**

```tsx
// Antes — div não acessível via teclado
<div onClick={togglePlay} aria-label="Play/Pause video" />

// Depois — interativo e navegável por teclado
<div
  role="button"
  tabIndex={0}
  onClick={togglePlay}
  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && togglePlay()}
  aria-label="Pausar ou reproduzir vídeo"
/>
```

**Carrossel com `role="region"` e `aria-label`** para cada grupo de conteúdo.

### 2.1.1 — Teclado

- Dropdown desktop fecha ao pressionar `Escape`
- Drawer mobile fecha ao pressionar `Escape`
- Botão de play/pause do Hero ativável via `Enter` e `Space`
- Botões do CtaBanner com `tabIndex={-1}` quando inativos (slides ocultos)

### 4.1.3 — Mensagens de Status (Live Regions)

O CtaBanner usa `aria-live="polite"` e `aria-atomic="true"` para anunciar mudanças de slide a leitores de tela. Slides inativos recebem `aria-hidden="true"`.

### 1.1.1 — Conteúdo Não Textual (Alternativas de Texto)

Todas as imagens têm `alt` text descritivo:

```tsx
// Antes (ausência de descrição)
<Image src="/logo.svg" alt="img" />
<Image src="/gplay.png" alt="img" />

// Depois (texto descritivo)
<Image src="/logo.svg" alt="Watch Brasil" />
<Image src="/gplay.png" alt="Disponível no Google Play" />
<Image src="/applestore.png" alt="Disponível na App Store" />
```

Cards de conteúdo (`Card`, `LiveCard`, `GenreCard`) recebem `alt` com o nome do show/artista.

O indicador visual "ao vivo" (ponto vermelho animado) tem `aria-hidden="true"`, com o container pai descrevendo o estado:

```tsx
<div aria-label="Transmissão ao vivo">
  <div aria-hidden="true">...</div>        {/* Dot animado */}
  <Text aria-hidden="true">LIVE</Text>     {/* Label visual */}
</div>
```

### 3.3.2 — Rótulos ou Instruções

`Button` já avisa em `console.warn` quando um botão icon-only não tem `aria-label`:

```ts
if (!children && !props["aria-label"]) {
  console.warn("Button: Icon-only buttons require aria-label for accessibility");
}
```

### Âncoras sem destino corrigidas

Links `<a>` sem `href` no Footer foram substituídos por `<button>`, preservando semântica correta para elementos interativos sem navegação:

```tsx
// Antes — âncoras inválidas (sem href)
<a className="cursor-pointer">About Labs Festival</a>

// Depois — semântica correta
<button className="cursor-pointer hover:text-primary transition-colors">
  About Labs Festival
</button>
```

### HTML válido — Sem `<main>` aninhado

Corrigido o layout aninhado que gerava dois elementos `<main>` na página (inválido segundo a spec HTML e confuso para tecnologias assistivas):

```tsx
// Antes — <main> duplicado
<main id="main-content">          // root layout
  <main>                          // features layout — INVÁLIDO
    {children}
  </main>
</main>

// Depois — estrutura correta
<main id="main-content">          // root layout
  <div>{children}</div>           // features layout
</main>
```

---

## Responsive Design

A interface é construída com abordagem **mobile-first** usando os breakpoints padrão do Tailwind:

| Breakpoint | Largura |
|---|---|
| `sm` | ≥ 640px |
| `md` | ≥ 768px |
| `lg` | ≥ 1024px |

### Estratégias aplicadas

**Header:** Logo + navegação desktop (`hidden md:flex`) × hamburguer + drawer mobile (`md:hidden`). O drawer usa `transform: translateX` para animação performática (GPU-accelerated, sem layout recalculation).

**Hero:** O vídeo usa a técnica `w-[177.78vh] h-[56.25vw]` (razão 16:9 forçada) com `translate(-50%, -50%)` para cobrir qualquer viewport sem crop indesejado. Textos com escala progressiva: `text-3xl md:text-6xl lg:text-7xl`.

**Cards e Carousels:** `flex gap-4 overflow-x-auto scroll-smooth` com `scrollbar-hide` — scroll horizontal nativo com drag support (`mousedown/mousemove/mouseup`). Margem negativa (`-mx-6 md:-mx-14`) permite que o carousel "sangre" para além do container pai.

**LiveCard:** Layout bicoluna mobile → detalhes extras visíveis no hover desktop: overlay com gradiente + botões de ação aparecem apenas em `md:group-hover`.

**GenreSection (Festival for you):** Layout completamente diferente em mobile vs desktop — mobile usa carousel horizontal, desktop usa layout lado-a-lado com texto fixo à esquerda e carousel à direita.

**Footer:** `grid-cols-1` mobile → `grid-cols-2` tablet → `grid-cols-[3fr_1fr]` desktop. `contents` trick para reordenar elementos no mobile via Flexbox `order`.

**CtaBanner:** Proporção do container via `aspect-ratio` — `aspect-[3/2]` mobile × `aspect-[1328/400]` desktop. Botão reposicionado: centralizado mobile → direita desktop.

---

## Design System

O Design System é construído sobre **CVA (Class Variance Authority)**, que fornece variantes type-safe sem overhead de runtime:

```ts
export const buttonVariants = cva(baseClasses, {
  variants: {
    variant: { filled: "...", outline: "...", ghost: "..." },
    size: { sm: "...", md: "...", lg: "..." },
    shape: { rounded: "...", square: "..." },
  },
  defaultVariants: { variant: "filled", size: "md", shape: "rounded" },
});
```

Componentes do Design System:
`Button`, `Badge`, `Avatar`, `Card`, `CardAds`, `LiveCard`, `GenreCard`, `Carousel`, `CtaBanner`, `Dropdown`, `MenuDropdown`, `Icon`, `LiveTag`, `Text`, `Pagination`, `UserMenu`, `MenuItem`

---

## Qualidade de Código

- **TypeScript strict** em todos os componentes
- **`forwardRef`** em componentes UI que precisam de acesso ao DOM externo (`Card`, `CardAds`, `LiveCard`, `GenreCard`, `Button`, `Avatar`, `Badge`)
- **Barrel exports** (`index.ts`) para imports limpos
- **Custom hooks** isolando lógica de estado: `useHero`, `useCarousel`, `useCtaBanner`, `useInterleaveAds`, `useInsertAdsAtPositions`
- **Type guards** (`isAd`) para discriminar union types de forma segura

---

*Projeto desenvolvido como demonstração técnica de skills em Next.js, React, TypeScript, WCAG e Web Performance.*
