'use client';

import { useLenis } from 'lenis/react';
import { FV } from "../lib/constants";

export function Nav() {
  const lenis = useLenis();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, target: string) {
    e.preventDefault();
    lenis?.scrollTo(target);
  }

  return (
    <header className="top-0 z-50 bg-cream w-full">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-4">
        <div className="bg-dark w-[53px] h-12 flex items-center justify-center rounded-md shrink-0">
          <span
            className="text-cream text-2xl leading-none font-display"
            style={{ fontVariationSettings: FV }}
          >
            Aa
          </span>
        </div>
        <div className="flex items-center gap-[10px] sm:gap-8">
          {["Family", "Weights", "Playground"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleClick(e, `#${item.toLowerCase()}`)}
              className="text-dark text-[18px] sm:text-[20px] leading-none font-display"
              style={{ fontVariationSettings: FV }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
