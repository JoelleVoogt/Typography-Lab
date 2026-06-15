# Typography Playground

An interactive showcase for the [Fraunces](https://fraunces.undercase.xyz/) variable font, built with Next.js and Tailwind CSS.

## What it does

- **Family** — full-width display of the Fraunces typeface
- **Weights** — three side-by-side `WeightCard` components, each with a range slider that updates font weight (100–900) in real time using CSS variable font axes
- **Playground** — a `contentEditable` area where you can type any text and see it rendered in Fraunces at large display sizes

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript

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
