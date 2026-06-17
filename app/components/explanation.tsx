import { FV } from "../lib/constants";

export default function Explanation() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-30 pb-48 md:pt-30 md:pb-56 flex flex-col lg:flex-row gap-8 md:gap-10">
      <p
        className="flex-1 text-cream text-3xl sm:text-[48px] leading-[1.2] font-semibold font-display"
        style={{ fontVariationSettings: FV }}
      >
        What is a typography playground?
      </p>
      <p
        className="flex-1 text-cream text-2xl leading-[1.5] font-display"
        style={{ fontVariationSettings: FV }}
      >
        This is a place to <i>feel</i> a font-family. Experience every angle by
        adjusting the settings to your preference. This version is built around
        Fraunces, but you can upload any font family.
      </p>
    </section>
  );
}
