import { FV } from "../lib/constants";

export default function Explanation() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-30 sm:py-40 flex flex-col sm:flex-row gap-8 sm:gap-24">
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
        This is a place to <i>feel</i> a font family. View every angle of a
        typeface by dragging the sliders to your preference. This version is
        built around Fraunces, but you can upload any font family.
      </p>
    </section>
  );
}
