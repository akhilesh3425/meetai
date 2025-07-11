import { ReactNode, useState } from "react";

import { ChevronsUpDownIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  CommandItem,
  CommandResponsiveDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "./ui/command";

interface Props {
  options: Array<{
    id: string;
    value: string;
    children: ReactNode;
  }>;
  onSelect: (value: string) => void;

  onSearch: (value: string) => void;

  value: string;
  placeholder?: string;
  isSearchable: boolean;
  className?: string;
}
export const CommandSelect = ({
  options,
  onSelect,
  onSearch,
  value,
  placeholder = "select an options",
  className,
}: Props) => {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        type="button"
        variant="outline"
        className={cn(
          "h-9 justify-between font-normal px-2",
          !selectedOption && "text-muted-foreground",

          className
        )}
      >
        <div>{selectedOption?.children ?? placeholder}</div>
        <ChevronsUpDownIcon />

        <Button>
          <CommandResponsiveDialog
            shouldFilter={!onSearch}
            open={open}
            onOpenChange={setOpen}
          >
            <CommandInput placeholder="Search..." onValueChange={onSearch} />
            <CommandList>
              <CommandEmpty>
                <span className="text-muted-foreground text-sm">
                  No options Found
                </span>
              </CommandEmpty>

              {options.map((options) => (
                <CommandItem
                  key={options.id}
                  onSelect={() => {
                    onSelect(options.value);
                    setOpen(false);
                  }}
                >
                  {options.children}
                </CommandItem>
              ))}
            </CommandList>
          </CommandResponsiveDialog>
        </Button>
      </Button>
    </>
  );
};
