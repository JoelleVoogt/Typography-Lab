"use client";

import { useState } from "react";
import { FV } from "../lib/constants";

function WeightCard({ defaultWeight }: { defaultWeight: number }) {
  const [weight, setWeight] = useState(defaultWeight);

  return (
    <div className="flex flex-col gap-1 md:gap-4 flex-1 min-w-0">
      <p
        className="text-cream leading-[1.2] w-full font-display text-[200px] sm:text-[168px] lg:text-[287px]"
        style={{
          fontWeight: weight,
          fontVariationSettings: FV,
        }}
      >
        Ra
      </p>
      <div className="flex flex-col gap-3">
        <div
          className="flex items-center justify-between text-cream whitespace-nowrap font-sans"
          style={{ fontSize: "16px", fontWeight: 500 }}
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
      className="max-w-7xl mx-auto px-4 pb-30 sm:pb-40 flex flex-col sm:flex-row gap-16 md:gap-8 xl:gap-20 sm:items-start"
    >
      <WeightCard defaultWeight={100} />
      <WeightCard defaultWeight={400} />
      <WeightCard defaultWeight={900} />
    </section>
  );
}
