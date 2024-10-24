import React from "react";
import { Card } from "./ui/card.tsx";
import { Button } from "./ui/button.tsx";
import { Ellipsis, Flag, Plus } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar.tsx";
import * as ProgressPrimitive from '@radix-ui/react-progress';

const ProjectCard = () => {
  return (
    <Card className="shadow-lg border-none p-7 flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="font-medium text-lg">Konsep design homepage</div>
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <Flag className="stroke-2 stroke-neutral-300 fill-neutral-300 size-4" />
            Nov 24
          </div>
        </div>
        <Button variant="ghost" className="size-6 p-1 text-neutral-400">
          <Ellipsis />
        </Button>
      </div>

      <div className="text-neutral-500 text-sm leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </div>

      <div className="flex flex-col gap-3">
        <div className="text-sm flex items-center justify-between font-semibold ">
          <div>Project Progress</div>
          <div>32%</div>
        </div>
        <ProgressPrimitive.Root
          className="relative h-1.5 w-full overflow-hidden rounded-full bg-emerald-50"
          value={32}
        >
          <ProgressPrimitive.Indicator
            className="h-full rounded-full bg-emerald-500"
            style={{ transform: `translateX(-${100 - 32}%)` }}
          />
        </ProgressPrimitive.Root>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-row-reverse justify-end items-center [&>:not(first-child)]:-ml-3">
            <Avatar className="size-9 border-2 border-white">
              <AvatarImage
                src="/avatar-3.png"
                alt="Avatar"
              />
            </Avatar>
            <Avatar className="size-9 border-2 border-white">
              <AvatarImage
                src="/avatar-4.png"
                alt="Avatar"
              />
            </Avatar>
            <Avatar className="size-9 border-2 border-white">
              <AvatarImage
                src="/avatar-5.png"
                alt="Avatar"
              />
            </Avatar>
          </div>
          <div className="text-sm text-neutral-500">+15 people</div>
        </div>
        <Button
          variant="ghost"
          className="border border-dashed border-neutral-400 rounded-full size-6 p-0"
        >
          <Plus className="text-neutral-400 size-3" />
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
