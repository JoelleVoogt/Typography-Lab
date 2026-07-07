# Typography Playground

![Typography Playground thumbnail](public/thumbnail.png)

An interactive showcase for the [Fraunces](https://fraunces.undercase.xyz/) variable font, built with Next.js and Tailwind CSS. It's a place to *feel* a font family instead of just reading about it — every section lets you adjust an axis of the type and see the result update live.

## What it does

The page is a single scrolling flow of sections (`app/page.tsx`):

- **Nav** — sticky header with anchor links to the Family, Weights and Playground sections.
- **Hero (Family)** — a full-bleed, oversized display of "Fraunces" to introduce the typeface.
- **Explanation** — short intro copy explaining the goal of the playground.
- **Weights** — three `WeightCard`s (starting at 100, 400 and 900) that each have their own range slider, letting you compare font weight side by side on the same "Ra" sample in real time.
- **Playground** — a large `contentEditable` text field where you can type anything and see it rendered in Fraunces at display size, with an animated cursor.
- **Custom** — the main experimentation panel:
  - Choose between a **Story** (pangram) or **Alphabet** sample, or type your own text
  - Switch text casing: Sentence case, UPPERCASE, lower case, Title case
  - Control **font size**, **letter spacing**, **weight** (100–900 via variable font axes) and an **italic** toggle
  - See all adjustments applied live to the sample text in the `Result` preview
- **Footer** — credits.

Font style is driven through CSS variable-font axes (`SOFT`, `WONK`) defined in `app/lib/constants.ts` and applied via inline `fontVariationSettings`, combined with standard `font-weight`/`font-style`/`letter-spacing` for the adjustable properties.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com/) — `Select` and `Switch` primitives for the filter/adjustment controls
- [Lucide](https://lucide.dev/) — icons
- [Lenis](https://lenis.darkroom.engineering/) — smooth scrolling
- TypeScript
- Fraunces & Inter loaded via `next/font/google`

## Project structure

```
app/
├── layout.tsx              # Root layout, fonts, metadata
├── page.tsx                # Assembles all sections in order
├── globals.css             # Tailwind + global styles
├── lib/
│   └── constants.ts         # Shared font-variation-settings (FV)
└── components/
    ├── nav.tsx               # Sticky header / anchor nav
    ├── hero.tsx              # "Family" section
    ├── explanation.tsx       # Intro copy
    ├── weight.tsx             # "Weights" section (WeightCard x3)
    ├── playground.tsx        # ContentEditable "Playground" section
    ├── custom.tsx             # "Custom" panel: state + layout wiring
    ├── result.tsx             # Live preview of the customized text
    ├── footer.tsx             # Footer
    ├── filtering/            # Controls that pick *which* text is shown
    │   ├── story.tsx           # Story / Alphabet select
    │   ├── typesomething.tsx   # Free-text input
    │   ├── casetype.tsx        # Text-case select
    │   └── fontsize.tsx        # Font-size slider
    └── adjustments/          # Controls that change *how* the text looks
        ├── width.tsx           # Letter-spacing slider
        ├── weight.tsx          # Weight slider
        └── italic.tsx          # Italic switch
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
