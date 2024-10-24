import React, { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu.tsx";
import { Card } from "./ui/card.tsx";
import { ChevronDown, Search, UserPlus } from "lucide-react";
import { Input } from "./ui/input.tsx";
import { Avatar } from "./ui/avatar.tsx";

const AssignTo = () => {
  const [menuWidth, setMenuWidth] = useState(0);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (triggerRef.current) {
      setMenuWidth(triggerRef.current.offsetWidth);
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" ref={triggerRef} asChild>
        <Card className="shadow-lg border-none p-5 flex items-center gap-4 text-left">
          <UserPlus className="stroke-2 stroke-neutral-300 fill-neutral-300" />
          <div className="grow text-sm text-neutral-600">Assign task to</div>
          <ChevronDown className="size-5 text-neutral-400" />
        </Card>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={16}
        className="border-0 rounded-xl p-0 py-4 flex flex-col gap-3"
        style={{
          width: menuWidth,
        }}
      >
        <div className="flex flex-row-reverse items-center px-7">
          <Input
            className="rounded-full bg-neutral-100 border-none shadow-none pl-10 -ml-8"
            placeholder="Search"
          />
          <Search className="relative z-[1] w-4 text-neutral-500" />
        </div>
        <div>
          <DropdownMenuItem className="cursor-pointer rounded-none flex items-center px-7 py-3 justify-between bg-blue-50 border-l-2 border-blue-500">
            <div className="grow flex items-center gap-3 text-sm text-neutral-600">
              <Avatar className="size-9">
                <img
                  src="/avatar-3.png"
                  className="w-full h-full object-cover object-top"
                  alt="Avatar"
                />
              </Avatar>
              Samantha William
            </div>
            <div className="text-xs text-neutral-500">35 task on progress</div>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer rounded-none flex items-center px-7 py-3 justify-between">
            <div className="grow flex items-center gap-3 text-sm text-neutral-600">
              <Avatar className="size-9">
                <img
                  src="/avatar-4.png"
                  className="w-full h-full object-cover object-top"
                  alt="Avatar"
                />
              </Avatar>
              Karen William
            </div>
            <div className="text-xs text-neutral-500">25 task on progress</div>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer rounded-none flex items-center px-7 py-3 justify-between">
            <div className="grow flex items-center gap-3 text-sm text-neutral-600">
              <Avatar className="size-9">
                <img
                  src="/avatar-5.png"
                  className="w-full h-full object-cover object-top"
                  alt="Avatar"
                />
              </Avatar>
              Angela Smith
            </div>
            <div className="text-xs text-neutral-500">16 task on progress</div>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer rounded-none flex items-center px-7 py-3 justify-between">
            <div className="grow flex items-center gap-3 text-sm text-neutral-600">
              <Avatar className="size-9">
                <img
                  src="/avatar-6.png"
                  className="w-full h-full object-cover object-top"
                  alt="Avatar"
                />
              </Avatar>
              Andy Hope
            </div>
            <div className="text-xs text-neutral-500">12 task on progress</div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AssignTo;
