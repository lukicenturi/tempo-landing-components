import React from "react";
import { Alert } from './ui/alert.tsx';
import { AlertCircle, Check } from 'lucide-react';
import { Avatar } from './ui/avatar.tsx';

const Alerts = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert className="p-5 border-red-500 bg-red-50 flex gap-5">
        <Avatar className="size-7 bg-red-500 flex items-center justify-center text-lg text-white">
          !
        </Avatar>
        <div className="flex flex-col gap-1">
          <div className="text-red-500 text-sm font-semibold">Something Wrong</div>
          <div className="text-red-900 text-xs">Lorem ipsum dolor sit amet</div>
        </div>
      </Alert>
      <Alert className="p-5 border-amber-500 bg-amber-50 flex gap-5">
        <Avatar className="size-7 bg-amber-500 flex items-center justify-center text-lg text-white">
          i
        </Avatar>
        <div className="flex flex-col gap-1">
          <div className="text-amber-500 text-sm font-semibold">Need Attention</div>
          <div className="text-amber-900 text-xs">Adipiscing elit, sed do eiusmod</div>
        </div>
      </Alert>

      <Alert className="p-5 border-emerald-500 bg-emerald-50 flex gap-5">
        <Avatar className="size-7 bg-emerald-500 flex items-center justify-center text-lg text-white">
          <Check className="size-4" />
        </Avatar>
        <div className="flex flex-col gap-1">
          <div className="text-emerald-500 text-sm font-semibold">Success</div>
          <div className="text-emerald-900 text-xs">consectetur adipiscing elit sed</div>
        </div>
      </Alert>

      <Alert className="p-5 border-sky-500 bg-sky-50 flex gap-5">
        <Avatar className="size-7 bg-sky-500 flex items-center justify-center text-lg text-white">
          <Check className="size-4" />
        </Avatar>
        <div className="flex flex-col gap-1">
          <div className="text-sky-500 text-sm font-semibold">Other Condition</div>
          <div className="text-sky-900 text-xs">consectetur adipiscing elit sed</div>
        </div>
      </Alert>
    </div>
  );
};

export default Alerts;
