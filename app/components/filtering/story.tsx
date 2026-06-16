import { ChevronDown } from "lucide-react";

export default function StoryOrAlphabet() {
  return (
    <>
      <div className="border-r border-r-[#54544D] flex flex-row p-4 gap-2 items-center">
        <p>Story</p>
        <ChevronDown className="h-6 w-6" />
      </div>
    </>
  );
}
