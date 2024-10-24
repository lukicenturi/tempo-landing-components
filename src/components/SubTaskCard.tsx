import React from "react";
import { Card } from "./ui/card.tsx";
import { Avatar, AvatarImage } from './ui/avatar.tsx';
import { RadioGroup, RadioGroupItem } from './ui/radio-group.tsx';

const SubTaskCard = () => {
  return (
    <Card className="shadow-lg border-none px-7 pt-7 pb-2 flex flex-col gap-1">
      <div className="font-medium">Tasks</div>
      <RadioGroup className="divide-y divide-neutral-200 gap-0">
        <label className="flex py-5 gap-4 cursor-pointer">
          <RadioGroupItem
            className="size-6 shadow-none border-sky-500 bg-sky-100 data-[state=checked]:bg-sky-500 text-white"
            value="design-homepage"
          />
          <div className="grow flex flex-col gap-1 text-sm">
            <div>Design Homepage</div>
            <div className="text-xs text-neutral-400">Thu, Nov 23</div>
          </div>
          <Avatar className="size-6">
            <AvatarImage
              src="/avatar-3.png"
              alt="Avatar"
            />
          </Avatar>
        </label>
        <label className="flex py-5 gap-4 cursor-pointer">
          <RadioGroupItem
            className="size-6 shadow-none border-sky-500 bg-sky-100 data-[state=checked]:bg-sky-500 text-white"
            value="sketsa-ilustrasi"
          />
          <div className="grow flex flex-col gap-1 text-sm">
            <div>Sketsa Ilustrasi</div>
            <div className="text-xs text-neutral-400">Mon, Nov 15</div>
          </div>
          <Avatar className="size-6">
            <AvatarImage
              src="/avatar-4.png"
              alt="Avatar"
            />
          </Avatar>
        </label>
        <label className="flex py-5 gap-4 cursor-pointer">
          <RadioGroupItem
            className="size-6 shadow-none border-sky-500 bg-sky-100 data-[state=checked]:bg-sky-500 text-white"
            value="onboarding-design"
          />
          <div className="grow flex flex-col gap-1 text-sm">
            <div>Onboarding Design</div>
            <div className="text-xs text-neutral-400">Wed, Nov 15</div>
          </div>
          <Avatar className="size-6">
            <AvatarImage
              src="/avatar-5.png"
              alt="Avatar"
            />
          </Avatar>
        </label>
      </RadioGroup>
    </Card>
  );
};

export default SubTaskCard;
