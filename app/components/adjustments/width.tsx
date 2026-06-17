"use client";

import { useState } from "react";

export default function Width({
  onValueChange,
}: {
  onValueChange?: (value: number) => void;
}) {
  const [spacing, setSpacing] = useState(100);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newSpacing = Number(event.target.value);
    setSpacing(newSpacing);
    onValueChange?.(newSpacing);
  }

  return (
    <>
      <div className="flex flex-col p-4 gap-2 border-b border-[#54544D] xl:border-b-0">
        <div className="flex flex-row gap-4">
          <p className="w-full">Letter spacing</p>
          <p className="w-full text-right">{spacing}</p>
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
            min={75}
            max={125}
            value={spacing}
            onChange={handleChange}
            className="thumb-filter"
            aria-label={`Letter spacing, currently ${spacing}`}
          />
        </div>
      </div>
    </>
  );
}
