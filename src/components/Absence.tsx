import React from "react";
import { Button } from "@/components/ui/button.tsx";
import { CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge.tsx";

const Absence = () => {
  return (
    <div className="font-inter px-6 bg-neutral-900 text-white flex flex-col divide-y divide-neutral-800">
      <div className="flex items-center justify-between py-5">
        <div className="font-medium flex items-center gap-4">
          <CreditCard className="stroke-neutral-700" />
          <div>Days off</div>
        </div>
        <Button
          variant="default"
          className="border border-neutral-600 bg-transparent"
        >
          See all
        </Button>
      </div>
      <div className="pt-7 pb-10 flex flex-col items-center">
        <svg viewBox="0 0 200 100" className="w-[220px] aspect-2">
          <path
            d="M10 100 A90 90 0 0 1 190 100"
            className="stroke-neutral-700"
            fill="none"
            strokeWidth="20"
          ></path>
          <path
            d="M10 100 A90 90 0 0 1 190 100"
            stroke="orange"
            className="stroke-amber-600"
            strokeWidth="20"
            fill="none"
            strokeDasharray="282.7433388230814 565.4866776461628"
            strokeDashoffset="56.548667764616255"
          ></path>
        </svg>
        <div className="flex flex-col gap-3 items-center -mt-14">
          <div className="text-5xl font-bold">16</div>
          <div className="text-neutral-500 font-medium">OUT OF 20</div>
        </div>
      </div>
      <div className="flex flex-col pb-7">
        <div className="py-3 flex flex-wrap gap-1 items-center justify-between border-b border-neutral-800">
          <div className="text-neutral-500 text-sm">March 3, 2024</div>
          <Badge className="bg-amber-600 font-normal w-20 text-center justify-center">
            Pending
          </Badge>
        </div>
        <div className="py-3 flex flex-wrap gap-1 items-center justify-between border-b border-neutral-800">
          <div className="text-neutral-500 text-sm">March 3, 2024</div>
          <Badge className="bg-green-600 font-normal w-20 text-center justify-center">
            Confirmed
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Absence;
