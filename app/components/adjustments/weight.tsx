"use client";

import { useState } from "react";

export default function Weight({
  onValueChange,
}: {
  onValueChange?: (value: number) => void;
}) {
  const [weight, setWeight] = useState(400);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newWeight = Number(event.target.value);
    setWeight(newWeight);
    onValueChange?.(newWeight);
  }

  const labels: Record<number, string> = {
    100: "Hairline",
    200: "Thin",
    300: "Light",
    400: "Regular",
    500: "Medium",
    600: "Semibold",
    700: "Bold",
    800: "XBold",
    900: "Black",
  };

  return (
    <>
      <div className="flex flex-col p-4 gap-2 border-b border-[#54544D] xl:border-b-0">
        <div className="flex flex-row gap-4">
          <p className="w-full">Weight</p>
          <p className="w-full text-right">{labels[weight]}</p>
        </div>

        <div className="relative h-3">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-cream" />
          <div className="absolute inset-0 flex justify-between pointer-events-none">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="w-px h-full bg-cream" />
            ))}
          </div>
          <input
            type="range"
            min={100}
            max={900}
            step={100}
            value={weight}
            onChange={handleChange}
            className="thumb-filter"
            aria-label={`Font weight, currently ${labels[weight]}`}
          />
        </div>
      </div>
    </>
  );
}
