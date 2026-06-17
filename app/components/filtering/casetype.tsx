import { Select } from "radix-ui";
import { ChevronDown } from "lucide-react";

export default function CaseType({
  onValueChange,
}: {
  onValueChange?: (value: string) => void;
}) {
  return (
    <Select.Root defaultValue="Sentence case" onValueChange={onValueChange}>
      <Select.Trigger className="group border-r border-r-[#54544d] flex gap-2 h-14 items-center px-4 hidden lg:flex w-sm outline-none cursor-default data-[state=open]:bg-[rgba(235,234,212,0.2)]">
        <Select.Value />
        <Select.Icon asChild>
          <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200 group-data-[state=open]:-scale-y-100" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={0}
          align="start"
          className="z-50 w-[var(--radix-select-trigger-width)] bg-[#2b2b29] border border-[rgba(235,234,212,0.2)] rounded-2xl overflow-hidden shadow-[0px_4px_10px_8px_rgba(0,0,0,0.25)]"
        >
          <Select.Viewport>
            <Select.Item
              value="Sentence case"
              className="h-14 px-4 flex items-center cursor-default outline-none select-none border-b border-[#54544d] text-cream text-base font-medium data-[highlighted]:bg-[#51514b] transition-colors"
            >
              <Select.ItemText>Sentence case</Select.ItemText>
            </Select.Item>

            <Select.Item
              value="UPPERCASE"
              className="h-14 px-4 flex items-center cursor-default outline-none select-none border-b border-[#54544d] text-cream text-base font-medium data-[highlighted]:bg-[#51514b] transition-colors"
            >
              <Select.ItemText>UPPERCASE</Select.ItemText>
            </Select.Item>

            <Select.Item
              value="lower case"
              className="h-14 px-4 flex items-center cursor-default outline-none select-none border-b border-[#54544d] text-cream text-base font-medium data-[highlighted]:bg-[#51514b] transition-colors"
            >
              <Select.ItemText>lower case</Select.ItemText>
            </Select.Item>

            <Select.Item
              value="Title case"
              className="h-14 px-4 flex items-center cursor-default outline-none select-none text-cream text-base font-medium data-[highlighted]:bg-[#51514b] transition-colors"
            >
              <Select.ItemText>Title Case</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
