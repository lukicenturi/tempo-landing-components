import React from "react";
import { Card } from "./ui/card.tsx";
import { Button } from "./ui/button.tsx";
import { Ellipsis, Tag } from "lucide-react";
import { Checkbox } from "./ui/checkbox.tsx";

const AddLabelsCard = () => {
  return (
    <Card className="shadow-lg border-none px-7 pt-4 pb-2 relative flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="font-medium">Labels</div>
        <Button variant="ghost" className="size-6 p-1 text-neutral-400">
          <Ellipsis />
        </Button>
      </div>
      <div className="divide-y divide-neutral-200">
        <label className="flex items-center py-4 cursor-pointer">
          <div className="grow flex items-center gap-3 text-sm">
            <Tag className="stroke-2 stroke-white fill-neutral-300" />
            Copywriting
          </div>
          <Checkbox
            checked
            className="size-6 shadow-none border-blue-500 bg-blue-100 data-[state=checked]:bg-blue-500"
          />
        </label>
        <label className="flex items-center py-4 cursor-pointer">
          <div className="grow flex items-center gap-3 text-sm">
            <Tag className="stroke-2 stroke-white fill-neutral-300" />
            UI Design
          </div>
          <Checkbox className="size-6 shadow-none border-blue-500 bg-blue-100 data-[state=checked]:bg-blue-500" />
        </label>
        <label className="flex items-center py-4 cursor-pointer">
          <div className="grow flex items-center gap-3 text-sm">
            <Tag className="stroke-2 stroke-white fill-neutral-300" />
            Illustrations
          </div>
          <Checkbox className="size-6 shadow-none border-blue-500 bg-blue-100 data-[state=checked]:bg-blue-500" />
        </label>
      </div>
    </Card>
  );
};

export default AddLabelsCard;
