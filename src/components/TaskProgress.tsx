import React from "react";
import { Card } from "./ui/card.tsx";
import * as ProgressPrimitive from "@radix-ui/react-progress";

const SubTaskCard = () => {
  return (
    <Card className="shadow-lg border-none p-7 flex flex-col gap-6">
      <div className="font-medium">Task Progress</div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5 text-sm">
          <div className="flex items-center justify-between">
            <div>Copywriting</div>
            <div className="text-neutral-400">3/8</div>
          </div>
          <ProgressPrimitive.Root
            className="relative h-1.5 w-full overflow-hidden rounded-full bg-fuchsia-50"
            value={37}
          >
            <ProgressPrimitive.Indicator
              className="rounded-full h-full bg-fuchsia-500"
              style={{transform: `translateX(-${100 - (3 / 8 * 100)}%)`}}
            />
          </ProgressPrimitive.Root>
        </div>
        <div className="flex flex-col gap-1.5 text-sm">
          <div className="flex items-center justify-between">
            <div>Illustrations</div>
            <div className="text-neutral-400">6/10</div>
          </div>
          <ProgressPrimitive.Root
            className="relative h-1.5 w-full overflow-hidden rounded-full bg-emerald-50"
            value={60}
          >
            <ProgressPrimitive.Indicator
              className="rounded-full h-full bg-emerald-500"
              style={{transform: `translateX(-${100 - (6 / 10 * 100)}%)`}}
            />
          </ProgressPrimitive.Root>
        </div>
        <div className="flex flex-col gap-1.5 text-sm">
          <div className="flex items-center justify-between">
            <div>UI Design</div>
            <div className="text-neutral-400">2/7</div>
          </div>
          <ProgressPrimitive.Root
            className="relative h-1.5 w-full overflow-hidden rounded-full bg-sky-50"
            value={28}
          >
            <ProgressPrimitive.Indicator
              className="rounded-full h-full bg-sky-500"
              style={{transform: `translateX(-${100 - (2 / 7 * 100)}%)`}}
            />
          </ProgressPrimitive.Root>
        </div>
      </div>
    </Card>
  );
};

export default SubTaskCard;
