import React from "react";
import { Card } from "./ui/card.tsx";
import { Search } from "lucide-react";
import { Avatar } from "./ui/avatar.tsx";
import { Input } from "./ui/input.tsx";

const Navigation = () => {
  return (
    <Card className="shadow-lg border-none py-3 px-6 gap-10 flex items-center">
      <div className="flex items-center gap-2.5 text-xs font-bold">
        <Avatar className="size-7 flex items-center justify-center bg-sky-500 text-white">
          T
        </Avatar>
        <div className="text-sky-500">TASK</div>
      </div>
      <div className="grow">
        <div className="flex flex-row-reverse items-center">
          <Input
            className="rounded-full bg-neutral-100 border-none shadow-none pl-10 -ml-8"
            placeholder="Search everything"
          />
          <Search className="relative z-[1] w-4 text-neutral-500" />
        </div>
      </div>
      <ul className="pl-10 flex items-center gap-9 text-sm text-neutral-400">
        <li className="text-sky-500 font-semibold">
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
    </Card>
  );
};

export default Navigation;
