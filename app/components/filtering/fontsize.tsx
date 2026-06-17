"use client";

import { useState } from "react";

export default function FontSize({
  onValueChange,
}: {
  onValueChange?: (value: number) => void;
}) {
  const [size, setSize] = useState(36);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newSize = Number(event.target.value);
    setSize(newSize);
    onValueChange?.(newSize);
  }

  return (
    <>
      <div className="flex flex-row p-4 gap-2 items-center w-full xl:w-fit">
        <p className="">{size}px</p>

        <div className="flex flex-col pl-4 lg:pl-4 lg:pr-2 gap-2 w-full xl:w-52">
          <div className="relative h-3">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-cream" />
            <div className="absolute inset-0 flex justify-between pointer-events-none">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="w-px h-full bg-cream" />
              ))}
            </div>
            <input
              type="range"
              min={16}
              max={96}
              value={size}
              onChange={handleChange}
              className="thumb-filter"
              aria-label={`Font size, currently ${size}px`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
