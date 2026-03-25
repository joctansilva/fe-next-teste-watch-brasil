# Watch Brasil — Project Presentation

---

## What is this project?

Watch Brasil is a live streaming platform for music shows and festivals. Think of it as a premium streaming experience — users log in, browse the festival lineup, watch live performances from multiple camera angles, and access exclusive content.

I built this entirely with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## Let me walk you through the architecture first.

I structured this project with a clear separation between what belongs to the application layer and what belongs to the design system.

Everything inside `app/` is the application — pages, page-level components, and page-specific hooks. Everything inside `components/ui/` is the design system — generic, reusable, zero business logic.

```
app/
  (features)/
    (pages)/
      (home)/           ← page components, page hooks
      profile/

components/
  layout/               ← Header, Footer
  ui/                   ← Design System
    Button, Card, Carousel, Badge, LiveCard, GenreCard...
```

Each UI component follows a consistent pattern: a `.tsx` file for the implementation, a `.types.ts` for the props contract, and a `.variants.ts` for the style variants. This makes the system predictable — if you open any component folder, you always know exactly what's there.

---

## The Design System — built with CVA

I used **Class Variance Authority** to build type-safe component variants without any runtime overhead.

This is what it looks like:

```ts
export const buttonVariants = cva(baseClasses, {
  variants: {
    variant: { filled: "...", outline: "...", text: "..." },
    size: { sm: "...", md: "...", lg: "..." },
    shape: { rounded: "", square: "rounded-none" },
  },
  compoundVariants: [
    { shape: "rounded", size: "sm", className: "rounded-xl" },
  ],
  defaultVariants: { variant: "filled", size: "md", shape: "rounded" },
});
```

TypeScript enforces the valid combinations at compile time. If you pass a variant that doesn't exist, it's a type error — not a runtime bug.

The same pattern applies to `Badge`, `Card`, `LiveCard`, `Avatar`, and `Text`. The `Text` component is particularly interesting — it maps each typography variant to a default semantic HTML element, so you get the right tag automatically, but you can still override it with the `as` prop when needed.

---

## Performance Optimization

Let me talk about the performance decisions I made, because these were intentional.

### Images

All content images — cards, live cards, genre cards, ads — go through **`next/image`**. That means automatic WebP and AVIF conversion, lazy loading by default, and no layout shift because we define the dimensions upfront.

One specific refactor I did: the `Card` component originally used a CSS `background-image`. That's invisible to Next.js — it can't optimize it. I replaced it with `next/image` using `fill` mode:

```tsx
// Before — CSS background, completely opaque to the optimizer
<div style={{ backgroundImage: `url(${image})` }} />

// After — Next.js handles format conversion, lazy load, and LCP tracking
<Image src={image} alt={alt} fill className="object-cover" sizes="208px" />
```

That single change means the LCP image is now tracked by the browser's performance APIs and properly optimized.

### Fonts

The project uses three fonts: Roboto, Babylonica, and a local custom font called Axiforma. All three are loaded through `next/font`, which means zero external font requests at runtime — they're bundled with the build. And all three have `display: "swap"` to prevent invisible text while the font loads.

### YouTube API — loaded on demand

The hero section plays a YouTube video. The YouTube IFrame API is loaded inside a `useEffect` — it only runs in the browser, only after the component mounts, and only once. No blocking of the main thread during page load.

To reduce the connection latency when the API does load, I added preconnect hints in the `<head>`:

```html
<link rel="preconnect" href="https://www.youtube.com" />
<link rel="dns-prefetch" href="https://i.ytimg.com" />
```

### Security Headers

I configured HTTP security headers for every route in `next.config.ts`:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

These show up in security audits and protect against a whole class of common attacks.

---

## SEO

Now — this is a private platform. Users need to be logged in. So you might think SEO doesn't apply here. And for indexing purposes, you'd be right — I explicitly set `robots: { index: false }`.

But good SEO practice is also good code hygiene, and it demonstrates understanding of the full picture. So I implemented everything:

**Structured metadata** with a title template, so every page can inherit the brand name automatically:

```ts
title: {
  default: "Watch Brasil — Live Show Streaming",
  template: "%s | Watch Brasil",  // any nested page: "Home | Watch Brasil"
}
```

**OpenGraph and Twitter Card** metadata for when links are shared — even in internal Slack messages, the preview will look polished.

**Correct `lang` attribute** — the original code had `lang="pt-Br"`. That's invalid BCP 47. I fixed it to `lang="pt-BR"`. This matters for screen readers, which use the language attribute to select the right pronunciation engine.

**Semantic heading hierarchy** — there's exactly one `<h1>` per page (the artist name in the hero), section titles are `<h2>`, and card titles are `<h3>`. Screen readers and search engines both use this structure to understand the page.

---

## Accessibility — WCAG 2.1 AA

This is where I spent the most focused effort. Let me go through the specific things I implemented.

### Skip Navigation — WCAG 2.4.1

The very first element in the body is a "Skip to main content" link. It's visually hidden — but the moment a keyboard user presses Tab, it appears. They can jump directly to the main content without tabbing through the header on every page.

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 ..."
>
  Skip to main content
</a>

<main id="main-content">...</main>
```

### Semantic Landmarks

Every major region of the page has a semantic role and an accessible label. The header says `aria-label="Main header"`. The footer says `aria-label="Site footer"`. The desktop nav says `aria-label="Main navigation"`. The mobile nav says `aria-label="Mobile navigation"`.

This means a screen reader user can pull up a list of landmarks on the page and navigate directly to the section they want — without reading the entire page linearly.

| Element | Label |
|---|---|
| `<header>` | Main header |
| `<nav>` desktop | Main navigation |
| `<nav>` mobile | Mobile navigation |
| `<main>` | id="main-content" |
| `<footer>` | Site footer |
| Every `<Carousel>` | Section-specific label |
| `<CtaBanner>` | Promotional banner |

### Interactive State — WCAG 4.1.2

Every interactive element that changes state correctly communicates that state to assistive technologies.

The hamburger button:
```tsx
<button
  aria-expanded={isOpen}
  aria-controls="mobile-menu-drawer"
  aria-haspopup="dialog"
>
```

The drawer itself:
```tsx
<div
  id="mobile-menu-drawer"
  role="dialog"
  aria-modal="true"
  aria-label="Navigation menu"
>
```

Every dropdown button has `aria-expanded` and `aria-haspopup`. When the dropdown is open, screen readers announce it. When it's closed, they announce that too.

### Keyboard Navigation — WCAG 2.1.1

Every interactive element is keyboard-accessible.

The video play/pause area was originally a `<div>` with an `onClick` handler. A `<div>` is not in the tab order and can't be activated by keyboard. I fixed it:

```tsx
<div
  role="button"
  tabIndex={0}
  onClick={togglePlay}
  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && togglePlay()}
  aria-label="Play or pause video"
/>
```

Dropdowns and the mobile drawer both close when the user presses `Escape`. That's standard keyboard interaction for these patterns.

### Live Regions — WCAG 4.1.3

The CTA Banner is an auto-advancing slideshow. Every time the slide changes, a screen reader user needs to know. I added `aria-live="polite"` to the slide container, so the browser announces changes without interrupting whatever the user is currently reading. Inactive slides get `aria-hidden="true"` so they're invisible to the accessibility tree.

```tsx
<div aria-live="polite" aria-atomic="true">
  {slides.map((slide, index) => (
    <div aria-hidden={currentSlide !== index}>
      ...
    </div>
  ))}
</div>
```

### Alternative Text — WCAG 1.1.1

Every image has meaningful alt text. This sounds obvious, but the original code had several `alt="img"` instances. I replaced all of them:

- Logo → `"Watch Brasil"`
- App store badges → `"Available on Google Play"`, `"Available on the App Store"`
- Content cards → artist or show name
- The animated live indicator dot → `aria-hidden="true"` on the decorative elements, with the container labeled `aria-label="Live broadcast"`

### Fixed: Invalid HTML

The original codebase had a `<main>` element nested inside another `<main>`. HTML allows only one `<main>` per page — having two is both a spec violation and confusing for assistive technologies. I removed the redundant one from the nested layout.

---

## Responsive Design

The entire interface is built mobile-first. I never write desktop styles and then override them for mobile — I write mobile styles and layer desktop styles on top.

A few patterns worth highlighting:

**The video hero** uses the `177.78vh × 56.25vw` trick to maintain a 16:9 aspect ratio across any viewport size, combined with `translate(-50%, -50%)` to center it regardless of container dimensions. It always fills the screen perfectly.

**The carousel** uses native horizontal scroll with `overflow-x: auto` and `scroll-smooth`, plus mouse drag support I built with `mousedown`, `mousemove`, and `mouseup` events. The negative margin trick (`-mx-6 md:-mx-14`) lets the carousel "bleed" outside its container — visually implying there's more content to scroll to.

**The "Festival for you" section** has completely different layouts on mobile and desktop. On mobile it's a stacked header with a horizontal carousel below. On desktop it's a side-by-side layout with the copy pinned on the left and the carousel scrolling to the right. Two different UI patterns, one data source.

**The footer** uses CSS Grid with `grid-cols-[3fr_1fr]` on desktop, collapsing to a single column on mobile. The `contents` CSS trick lets child elements participate in the parent grid while visually reordering via `order` utilities on mobile.

---

## Custom Hooks

I extracted all non-trivial stateful logic into custom hooks, keeping components clean and making the logic reusable and testable in isolation.

- **`useHero`** — manages the YouTube player instance, mute state, play state, and fullscreen
- **`useCarousel`** — handles drag-to-scroll behavior with proper cursor feedback
- **`useCtaBanner`** — manages the auto-advancing slideshow with a `setInterval` that properly cleans up on unmount
- **`useInterleaveAds`** — takes an array of content items and inserts an ad at a specified position using `useMemo` for referential stability
- **`useInsertAdsAtPositions`** — same concept but for multiple ads at multiple positions; sorts by descending position before inserting to avoid index shift bugs

---

## TypeScript Practices

A few things worth calling out:

**`forwardRef`** is used on every UI component that might need DOM access from a parent — `Button`, `Card`, `LiveCard`, `GenreCard`, `Badge`, `Avatar`. This makes the components composable with animation libraries and external focus management.

**Type guards** for union discrimination:

```ts
export function isAd(item: unknown): item is Ad {
  return typeof item === "object" && item !== null
    && "brand" in item && "badgeText" in item;
}
```

This pattern is used throughout the home page to distinguish between content items and ad items in the same arrays, without casting.

**Strict props contracts** — every component has a dedicated `.types.ts` file with fully documented JSDoc. This means the team gets hover documentation in their editor without ever leaving the file they're working in.

---

That's the project. It's built to the same standards I'd bring to a high-traffic production codebase — performance-conscious, accessible by default, and structured to scale.
