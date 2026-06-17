"use client";

export default function TypeSomething({
  onValueChange,
}: {
  onValueChange?: (value: string) => void;
}) {
  return (
    <div className="border-b border-b-[#54544D] xl:border-b-0 xl:border-r xl:border-r-[#54544D] flex flex-row px-4 w-full focus-within:bg-[#51514b] transition-colors">
      <input
        type="text"
        placeholder="Type something..."
        className="bg-transparent outline-none w-full h-14 text-cream text-base font-medium placeholder:text-[#78776d] caret-accent"
        onChange={(event) => onValueChange?.(event.target.value)}
      />
    </div>
  );
}
