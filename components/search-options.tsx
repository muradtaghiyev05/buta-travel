"use client";

import * as React from "react";
import { Check, User2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const rooms = [
  {
    value: "1 room, 2 adults",
    label: "1 room, 2 adults",
  },
  {
    value: "2 room, 3 adults",
    label: "2 room, 3 adults",
  },
  {
    value: "2 room, 4 adults",
    label: "2 room, 4 adults",
  },
  {
    value: "3 room, 6 adults",
    label: "3 room, 6 adults",
  },
  {
    value: "4 room, 10 adults",
    label: "4 room, 10 adults",
  },
];

export function SearchOptions() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="xl:min-w-[190px] max-xl:w-full max-xl:rounded-3xl max-xl:bg-[#ffffff19] max-xl:backdrop-blur-lg items-center gap-2 text-white hover:text-white"
        >
          <User2 className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          {value
            ? rooms.find((room) => room.value === value)?.label
            : "Select room..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 text-white bg-black">
        <Command>
          <CommandInput placeholder="Search room..." />
          <CommandEmpty>No room found.</CommandEmpty>
          <CommandGroup>
            {rooms.map((room) => (
              <CommandItem
                key={room.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === room.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {room.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
