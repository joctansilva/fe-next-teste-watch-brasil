# Watch Brasil

<div align="center">
  <img src="public/logo.svg" alt="Watch Brasil Logo" width="200"/>

### Plataforma de streaming para festivais de música ao vivo

[![Deploy](https://img.shields.io/badge/deploy-vercel-black)](https://fe-next-teste-watch-brasil-ismaqk6pk.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

[Ver Demo](https://fe-next-teste-watch-brasil-ismaqk6pk.vercel.app)

</div>

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como teste técnico para a **Watch Brasil**.

---

## 🚀 Tecnologias Utilizadas

### Core

- **[Next.js 16.1.6](https://nextjs.org/)**
- **[React 19](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**

### Styling & UI

- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Class Variance Authority (CVA)](https://cva.style/)** - Gestão de variantes de componentes
  - _Por quê?_ Tipagem forte para variantes, composição de estilos, melhor DX e padrão de design system escalável
- **[Lucide React](https://lucide.dev/)**

### Ferramentas de Desenvolvimento

- **[Turbopack](https://turbo.build/pack)**
- **[ESLint](https://eslint.org/)**

---

## Arquitetura

Este projeto utiliza uma **arquitetura baseada em features**, que organiza o código por funcionalidade ao invés de tipo de arquivo. Esta abordagem melhora a escalabilidade, manutenibilidade e facilita o trabalho em equipe.

### Estrutura de Pastas

```
fe-next-teste-watch-brasil/
├── app/                              # App Router do Next.js
│   ├── (features)/                   # Features da aplicação
│   │   └── (pages)/                  # Páginas agrupadas
│   │       └── (home)/               # Feature: Home Page
│   │           ├── components/       # Componentes específicos da Home
│   │           └── hooks/            # Hooks específicos da Home
│   ├── globals.css                   # Estilos globais e Tailwind
│   └── layout.tsx                    # Layout raiz da aplicação
│
├── components/                       # Componentes compartilhados
│   ├── ui/                           # Design System (Atomic Design)
│   │   ├── Button/
│   │   │   ├── Button.tsx           # Componente
│   │   │   ├── Button.types.ts      # TypeScript interfaces
│   │   │   ├── Button.variants.ts   # CVA variants
│   │   │   └── index.ts             # Barrel export
│   │   ├── Card/
│   │   ├── Etc...
│   │   └── index.ts                 # Exports centralizados
│   │
│   └── layout/                      # Componentes de layout
│       ├── Header/
│       └── Footer/
├── data/                            # Dados mockados
├── hooks/                           # Custom hooks globais
│   ├── useInterleaveAds.ts          # Intercala ads no conteúdo
│   └── useInsertAdsAtPositions.ts   # Insere ads em posições

├── lib/                             # Utilitários
│
├── types/                           # Tipos TypeScript globais
│
└── public/                          # Assets estáticos
```

### Princípios Arquiteturais

#### 1. **Feature-Based Organization**

Cada feature (Home, Live, Profile, etc.) possui seus próprios componentes, hooks e lógica, evitando acoplamento e facilitando a escalabilidade.

**Benefícios:**

- 📁 Código relacionado agrupado (fácil de encontrar)
- 👥 Menos conflitos em trabalho em equipe
- ♻️ Features podem ser extraídas como micro-frontends
- 🔧 Manutenção e refatoração simplificadas

#### 2. **Atomic Design no UI**

Componentes em `components/ui/` seguem princípios de Atomic Design:

- **Átomos**: Button, Text, Badge, Icon
- **Moléculas**: Card, LiveCard, GenreCard, Avatar
- **Organismos**: Carousel, UserMenu, MenuDropdown, CtaBanner

#### 3. **Separation of Concerns**

- **Componentes**: Apenas renderização e estrutura
- **Hooks**: Lógica de negócio e side effects
- **Types**: Contratos de dados
- **Variants**: Estilos e variações visuais (CVA)
- **Data**: Source of truth para conteúdo

#### 4. **Type Safety First**

Todo componente possui:

- Interface própria (`*.types.ts`)
- Variantes tipadas com CVA (`*.variants.ts`)
- Props validadas em tempo de desenvolvimento
- Type guards para type narrowing

#### 5. **Composição sobre Herança**

Componentes pequenos e focados que se compõem para formar funcionalidades complexas:

- `UserMenu` = `Avatar` + `Dropdown` + `Settings`
- `MenuDropdown` = `MenuItem` + `Dropdown` + `ChevronDown`
- `ShowSection` = `Carousel` + `Card[]` + `Ad` (opcional)

---

## 🔧 Como Executar

### Pré-requisitos

- **Node.js** 18+ instalado
- **npm**, **yarn** ou **pnpm**

### Instalação

```bash
# Clone o repositório
git clone [repository-url]
cd fe-next-teste-watch-brasil

# Instale as dependências
npm install
```

### Scripts Disponíveis

```bash
# Desenvolvimento (com Turbopack)
npm run dev
# Abre em http://localhost:3000

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint
```

## 📊 Performance

### Otimizações Implementadas

- ✅ **Server Components** por padrão (Next.js App Router)
- ✅ **Lazy loading** de imagens (`next/image`)
- ✅ **Tree-shaking** de CSS (Tailwind JIT mode)
- ✅ **Code splitting** automático (Next.js)
- ✅ **Font optimization** (next/font)
- ✅ **Turbopack** para builds rápidos

### Métricas

| Métrica                      | Valor  |
| ---------------------------- | ------ |
| **First Contentful Paint**   | < 1.5s |
| **Largest Contentful Paint** | < 2.5s |
| **Time to Interactive**      | < 3.5s |
| **Bundle Size (gzipped)**    | ~120KB |

---

## 👨‍💻 Autor

Desenvolvido como teste técnico para **Watch Brasil**

**Deploy:** [fe-next-teste-watch-brasil-ismaqk6pk.vercel.app](https://fe-next-teste-watch-brasil-ismaqk6pk.vercel.app)

---

## 📄 Licença

Este projeto foi desenvolvido para fins de avaliação técnica.

---

<div align="center">

**Feito com ❤️ usando Next.js, TypeScript e Tailwind CSS**

![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>
