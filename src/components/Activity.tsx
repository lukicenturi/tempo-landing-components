import React from "react";
import { Flag, MessageSquare, Pencil, Plus, Tag, UserPlus, XIcon } from "lucide-react";
import { Button } from "./ui/button.tsx";
import { Textarea } from "./ui/textarea.tsx";
import { Badge } from "./ui/badge.tsx";
import { Avatar } from "./ui/avatar.tsx";
import { Card } from "./ui/card.tsx";

const Activity = () => {
  return (
    <Card className="shadow-lg border-none p-7 flex flex-col gap-7">
      <div className="font-medium">Recent Activity</div>

      <div className="flex flex-col gap-7">
        <div className="flex gap-3">
          <Avatar className="bg-emerald-400 size-7 flex items-center justify-center">
            <MessageSquare className="stroke-2 stroke-white fill-white size-3"/>
          </Avatar>
          <div className="text-sm flex flex-col gap-2">
            <div>
              <b>Karen</b> leave some comments on Konsep Ilustrasi
            </div>
            <div className="text-neutral-400">
              Aug 10
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Avatar className="bg-indigo-400 size-7 flex items-center justify-center">
            <Pencil className="stroke-2 stroke-indigo-400 fill-white size-3"/>
          </Avatar>
          <div className="text-sm flex flex-col gap-2">
            <div>
              <b>Karen</b> leave some comments on Project Homepage
            </div>
            <div className="text-neutral-400">
              Aug 10
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Avatar className="bg-amber-400 size-7 flex items-center justify-center">
            <Flag className="stroke-2 stroke-white fill-white size-3" />
          </Avatar>
          <div className="text-sm flex flex-col gap-2">
            <div>
              <b>Andrea</b> change the due date of Project Homepage
            </div>
            <div className="text-neutral-400">
              Aug 10
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Activity;
