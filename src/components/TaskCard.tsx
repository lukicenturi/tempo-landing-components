import React from "react";
import { Badge } from "./ui/badge.tsx";
import { Card } from "./ui/card.tsx";
import { Button } from "./ui/button.tsx";
import { Ellipsis, Flag, MessageSquare } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar.tsx";

const TaskCard = () => {
  return (
    <Card className="shadow-lg border-none p-4 relative flex flex-col gap-4">
      <div className="flex justify-between">
        <Badge className="shadow-none rounded-full text-sky-700 bg-sky-100 hover:bg-sky-200 py-1 px-3">
          Illustration
        </Badge>
        <Button variant="ghost" className="size-6 p-1 text-neutral-400">
          <Ellipsis />
        </Button>
      </div>
      <div className="text-sm">
        Membuat konsep ilustrasi untuk halaman homepage dan about us
      </div>
      <div className="flex gap-4 justify-between items-center">
        <div className="flex gap-6 text-neutral-400">
          <div className="flex items-center gap-1.5 text-xs">
            <Flag className="stroke-2 stroke-neutral-300 fill-neutral-300 size-4" />
            Nov 24
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <MessageSquare className="stroke-2 stroke-neutral-300 fill-neutral-300 size-4" />
            2
          </div>
        </div>
        <Avatar className="size-6">
          <AvatarImage
            src="/avatar-4.png"
            alt="Avatar"
          />
        </Avatar>
      </div>
    </Card>
  );
};

export default TaskCard;
