"use client";

import { useState } from "react";

const FV = '"SOFT" 0, "WONK" 1';

function WeightCard({ defaultWeight }: { defaultWeight: number }) {
  const [weight, setWeight] = useState(defaultWeight);

  return (
    <div className="flex flex-col gap-4 flex-1 min-w-0">
      <p
        className="text-[#ebead4] leading-[1.2] w-full"
        style={{
          fontFamily: "var(--font-fraunces)",
          fontWeight: weight,
          fontVariationSettings: FV,
          fontSize: "287px",
        }}
      >
        Ra
      </p>
      <div className="flex flex-col gap-3">
        <div
          className="flex items-center justify-between text-[#ebead4] whitespace-nowrap"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "17.5px",
            fontWeight: 500,
          }}
        >
          <span>Weight</span>
          <span>{weight}</span>
        </div>
        <div className="relative h-3">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#ebead4]" />
          <div className="absolute inset-0 flex justify-between pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-px h-full bg-[#ebead4]" />
            ))}
          </div>
          <input
            type="range"
            min={100}
            max={900}
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="weight-slider"
            aria-label={`Font weight, currently ${weight}`}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[#ebead4] w-full">
        <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-4">
          <div className="bg-[#1a1a1a] w-[53px] h-[48px] flex items-center justify-center rounded-[6px] shrink-0">
            <span
              className="text-[#ebead4] text-[24px] leading-none"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: FV,
              }}
            >
              Aa
            </span>
          </div>
          <div className="flex items-center gap-[10px] sm:gap-8">
            {["Family", "Weights", "Playground"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#1a1a1a] text-[18px] sm:text-[20px] leading-none"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: FV,
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="family" className="pb-[80px] sm:pb-[190px]">
        <div className="bg-[#ebead4] overflow-clip py-[80px] flex items-center justify-center">
          <p
            className="text-[#1a1a1a] whitespace-nowrap leading-[1.5]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 600,
              fontVariationSettings: FV,
              fontSize: "clamp(60px, 18vw, 327px)",
            }}
          >
            Fraunces
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-[1200px] mx-auto px-4 pb-[120px] sm:pb-[160px] flex flex-col sm:flex-row gap-8 sm:gap-24">
        <p
          className="flex-1 text-[#ebead4] text-[32px] sm:text-[48px] leading-[1.2]"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 600,
            fontVariationSettings: FV,
          }}
        >
          What is a typography playground?
        </p>
        <p
          className="flex-1 text-[#ebead4] text-[24px] leading-[1.5]"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontVariationSettings: FV,
          }}
        >
          {
            "A place to feel a typeface. Drag the slider to ajust the weight of the letters in real time, or preview your favorite words in the chosen font family. This version is built around Fraunces."
          }
        </p>
      </section>

      {/* Weight overview */}
      <section
        id="weights"
        className="max-w-[1200px] mx-auto px-4 pb-[120px] sm:pb-[160px] flex flex-col sm:flex-row gap-[80px] sm:gap-[96px] items-start"
      >
        <WeightCard defaultWeight={400} />
        <WeightCard defaultWeight={700} />
        <WeightCard defaultWeight={900} />
      </section>

      {/* Playground */}
      <section
        id="playground"
        className="max-w-[1200px] mx-auto px-4 py-[80px] sm:py-[80px]"
      >
        <div
          className="border-2 border-dashed border-[#ebead4] rounded-2xl py-[80px] sm:py-[120px] px-6 sm:px-8 flex items-center justify-center overflow-hidden cursor-text"
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
              aria-label="Type your favorite words"
              className="playground-input outline-none text-[#ebead4] font-semibold whitespace-nowrap"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: FV,
                fontSize: "clamp(24px, 6vw, 120px)",
              }}
            />
            <div className="bg-[#dad33a] w-[3px] sm:w-[8px] h-[56px] sm:h-[244px] rounded-sm shrink-0 animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}
