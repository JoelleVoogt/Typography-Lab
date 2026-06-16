import { FV } from "../lib/constants";

export default function Explanation() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-30 sm:py-40 flex flex-col sm:flex-row gap-8 sm:gap-24">
      <p
        className="flex-1 text-cream text-[32px] sm:text-[48px] leading-[1.2] font-semibold font-display"
        style={{ fontVariationSettings: FV }}
      >
        What is a typography playground?
      </p>
      <p
        className="flex-1 text-cream text-2xl leading-[1.5] font-display"
        style={{ fontVariationSettings: FV }}
      >
        A place to feel a typeface. Drag the slider to adjust the weight of the
        letters in real time, or preview your favorite words in the chosen font
        family. This version is built around Fraunces.
      </p>
    </section>
  );
}
