import { FV } from "../lib/constants";

export default function Hero() {
  return (
    <section id="family" className="pb-24 sm:pb-[280px]">
      <div className="relative">
        <div className="bg-cream -mt-px overflow-clip py-52 flex items-center justify-center text-wrap">
          <p
            className="text-dark leading-[0.7] font-semibold font-display max-w-7xl text-center tracking-tight"
            style={{
              fontVariationSettings: FV,
              fontSize: "clamp(200px, 18vw, 320px)",
            }}
          >
            Fraunces
          </p>
        </div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-cream rounded-[50%] pointer-events-none h-[120px] sm:h-[240px]"
          style={{ width: "110%" }}
        />
      </div>
    </section>
  );
}
