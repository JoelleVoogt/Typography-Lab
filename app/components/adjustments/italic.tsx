"use client";

import { Switch } from "radix-ui";

export default function Italic({
  onCheckedChange,
}: {
  onCheckedChange?: (checked: boolean) => void;
}) {
  return (
    <>
      <div className="flex flex-row p-4 gap-2 items-center">
        <div className="flex items-center place-content-between w-full">
          <label
            id="airplane-mode-label"
            htmlFor="airplane-mode"
            className="pr-[15px] leading-none"
          >
            Italic
          </label>
          <Switch.Root
            className="relative h-[32px] w-[64px] cursor-default rounded-full bg-[#EBEAD4] outline-none data-[state=checked]:bg-[#DAD33A] cursor-pointer"
            id="airplane-mode"
            onCheckedChange={onCheckedChange}
          >
            <Switch.Thumb
              id="airplane-mode"
              aria-labelledby="airplane-mode-label"
              className="block size-[24px] translate-x-[5px] rounded-full bg-[#C1C0AF] data-[state=checked]:bg-[#fff] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[34px]"
            />
          </Switch.Root>
        </div>
      </div>
    </>
  );
}
