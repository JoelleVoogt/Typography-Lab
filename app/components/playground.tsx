"use client";

import { useState } from "react";
import { FV } from "../lib/constants";

export default function Playground() {
  const [focused, setFocused] = useState(false);

  return (
    <section
      id="playground"
      className="max-w-7xl mx-auto px-4 pt-16 md:pt-32 pb-32 lg:pt-40 lg:pb-56"
    >
      <div
        className={`border-2 border-cream bg-[#222221] rounded-2xl py-48 sm:py-30 px-6 sm:px-8 flex items-center justify-center overflow-hidden cursor-text transition-shadow duration-100 ${
          focused
            ? "border-solid shadow-[0_0_0_2px_#ebead4,0_0_0_6px_#dad33a]"
            : "border-dashed"
        }`}
        onClick={(e) =>
          (
            e.currentTarget.querySelector("[contenteditable]") as HTMLElement
          )?.focus()
        }
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <div
            contentEditable
            suppressContentEditableWarning
            role="textbox"
            aria-label="Type your words"
            className="playground-input outline-none text-cream font-semibold whitespace-nowrap font-display"
            style={{
              fontVariationSettings: FV,
              fontSize: "clamp(24px, 6vw, 120px)",
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <div className="bg-accent w-[3px] sm:w-2 h-14 sm:h-[244px] rounded-sm shrink-0 animate-blink" />
        </div>
      </div>
    </section>
  );
}
