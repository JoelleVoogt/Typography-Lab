import { FV } from "../lib/constants";

export default function Hero() {
  return (
    <section id="family" className="pb-24 sm:pb-[280px]">
      <div className="relative">
        <div className="bg-cream overflow-clip py-40 flex items-center justify-center">
          <p
            className="text-dark whitespace-nowrap leading-[1.5] font-semibold font-display"
            style={{
              fontVariationSettings: FV,
              fontSize: "clamp(60px, 18vw, 327px)",
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
