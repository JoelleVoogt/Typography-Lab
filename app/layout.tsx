import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Typography Lab",
  description: "A playground for any font family.",
  openGraph: {
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <link
          rel="icon"
          href="/light.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/dark.svg"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
