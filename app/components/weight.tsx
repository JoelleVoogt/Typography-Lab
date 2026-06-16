"use client";

import { useState } from "react";
import { FV } from "../lib/constants";

function WeightCard({ defaultWeight }: { defaultWeight: number }) {
  const [weight, setWeight] = useState(defaultWeight);

  return (
    <div className="flex flex-col gap-4 flex-1 min-w-0 py-30">
      <p
        className="text-cream leading-[1.2] w-full font-display"
        style={{
          fontWeight: weight,
          fontVariationSettings: FV,
          fontSize: "clamp(120px, 72vw, 287px)",
        }}
      >
        Ra
      </p>
      <div className="flex flex-col gap-3">
        <div
          className="flex items-center justify-between text-cream whitespace-nowrap font-sans"
          style={{ fontSize: "17.5px", fontWeight: 500 }}
        >
          <span>Weight</span>
          <span>{weight}</span>
        </div>
        <div className="relative h-3">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-cream" />
          <div className="absolute inset-0 flex justify-between pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-px h-full bg-cream" />
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

export default function WeightSection() {
  return (
    <section
      id="weights"
      className="max-w-[1200px] mx-auto px-4 pb-30 sm:pb-40 flex flex-col sm:flex-row gap-20 sm:gap-24 sm:items-start"
    >
      <WeightCard defaultWeight={400} />
      <WeightCard defaultWeight={700} />
      <WeightCard defaultWeight={900} />
    </section>
  );
}
