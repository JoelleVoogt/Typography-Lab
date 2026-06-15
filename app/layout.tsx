import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['SOFT', 'WONK', 'opsz'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Typography Playground',
  description: 'A playground for the Fraunces typeface',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/light.svg" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/dark.svg" media="(prefers-color-scheme: dark)" />
      </head>
      <body>{children}</body>
    </html>
  )
}
