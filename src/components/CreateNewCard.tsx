import React from "react";
import { Plus, Tag, UserPlus, XIcon } from "lucide-react";
import { Button } from "./ui/button.tsx";
import { Textarea } from "./ui/textarea.tsx";
import { Badge } from "./ui/badge.tsx";
import { Avatar, AvatarImage } from "./ui/avatar.tsx";
import { Card } from "./ui/card.tsx";

const CreateNewCard = () => {
  return (
    <Card className="shadow-lg border-none p-7 relative">
      <Button
        variant="ghost"
        className="absolute top-2 right-2 size-6 p-1 text-neutral-400"
      >
        <XIcon />
      </Button>
      <div className="font-medium pb-4">Create New Card</div>
      <div className="flex flex-col gap-2">
        <Textarea
          placeholder="What is the task"
          className="p-5 focus-visible:ring-0 focus-visible:border-indigo-500"
        />
        <div className="divide-y divide-neutral-200">
          <div className="flex items-center gap-5 py-4">
            <Tag className="stroke-2 stroke-white fill-neutral-300" />
            <div className="grow text-sm">
              <Badge className="shadow-none rounded-full text-sky-700 bg-sky-100 hover:bg-sky-200 py-1 px-3">
                UI Design
              </Badge>
            </div>
            <Button
              variant="ghost"
              className="border border-dashed border-neutral-400 rounded-full size-6 p-0"
            >
              <Plus className="text-neutral-400 size-3" />
            </Button>
          </div>
          <div className="flex items-center gap-5 py-4">
            <UserPlus className="stroke-2 stroke-neutral-300 fill-neutral-300" />
            <div className="grow flex items-center gap-3 text-sm text-neutral-600">
              <Avatar className="size-9">
                <AvatarImage
                  src="/avatar-3.png"
                  alt="Avatar"
                />
              </Avatar>
              Samantha
            </div>
            <Button
              variant="ghost"
              className="border border-dashed border-neutral-400 rounded-full size-6 p-0"
            >
              <Plus className="text-neutral-400 size-3" />
            </Button>
          </div>
        </div>
        <Button variant="text" className="text-white bg-indigo-400 h-12">
          Done
        </Button>
      </div>
    </Card>
  );
};

export default CreateNewCard;
