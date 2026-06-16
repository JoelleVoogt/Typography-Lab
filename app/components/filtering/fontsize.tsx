import { ChevronDown } from "lucide-react";

export default function FontSize() {
  return (
    <>
      <div className="flex flex-row p-4 gap-2 items-center">
        <p className="">32px</p>
        {/* <p className="text-lg font-bold">Aa</p> */}

        <div className="flex flex-col p-4 gap-2 w-52">
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
              className="thumb-filter"
              // value={weight}
              // onChange={(e) => setWeight(Number(e.target.value))}
              // aria-label={`Font weight, currently ${weight}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
