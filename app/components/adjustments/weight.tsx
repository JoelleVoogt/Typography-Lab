"use client";

export default function Weight() {
  return (
    <>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex flex-row gap-4">
          <p className="w-full">Weight</p>
          <p className="w-full text-right">400</p>
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
            className="weight-slider"
            // value={weight}
            // onChange={(e) => setWeight(Number(e.target.value))}
            // aria-label={`Font weight, currently ${weight}`}
          />
        </div>

        {/* <input type="range" min={12} max={80} className="w-full" /> */}
      </div>
    </>
  );
}
