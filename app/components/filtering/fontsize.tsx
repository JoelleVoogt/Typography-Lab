import { ChevronDown } from "lucide-react";

export default function FontSize() {
  return (
    <>
      <div className="flex flex-row p-4 gap-2 items-center">
        <p className="">32px</p>
        <p className="text-lg font-bold">Aa</p>
        <input type="range" min={12} max={80} />
      </div>
    </>
  );
}
