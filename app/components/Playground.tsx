'use client';

import { FV } from '../lib/constants';

export function Playground() {
  return (
    <section id="playground" className="max-w-[1200px] mx-auto px-4 py-20">
      <div
        className="border-2 border-dashed border-cream rounded-2xl py-20 sm:py-30 px-6 sm:px-8 flex items-center justify-center overflow-hidden cursor-text"
        onClick={(e) =>
          (e.currentTarget.querySelector('[contenteditable]') as HTMLElement)?.focus()
        }
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <div
            contentEditable
            suppressContentEditableWarning
            role="textbox"
            aria-label="Type your favorite words"
            className="playground-input outline-none text-cream font-semibold whitespace-nowrap font-display"
            style={{
              fontVariationSettings: FV,
              fontSize: 'clamp(24px, 6vw, 120px)',
            }}
          />
          <div className="bg-accent w-[3px] sm:w-2 h-14 sm:h-[244px] rounded-sm shrink-0 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
