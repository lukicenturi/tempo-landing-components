import React from "react";
import { Button } from "@/components/ui/button.tsx";
import { Check, Clock3 } from "lucide-react";

const Earnings = () => {
  return (
    <div className="p-6 bg-neutral-900 text-white overflow-hidden">
      <div className="flex items-center justify-between mb-10">
        <div className="font-medium">Earnings</div>
        <Button
          variant="default"
          className="border border-neutral-600 bg-transparent"
        >
          View all
        </Button>
      </div>
      <div className="flex flex-col gap-3 mb-7">
        <h1 className="text-4xl font-normal">$8,960.53</h1>
        <div className="flex gap-1 text-xs">
          <div className="text-green-500">10%</div>
          <div className="text-neutral-500">since last month</div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex rounded-xl bg-neutral-800 p-3.5 justify-between">
          <div className="flex flex-col">
            <div>$2,859.36</div>
            <div className="text-neutral-500 text-xs">
              Est. Arrival Apr 12, 2024
            </div>
          </div>
          <div className="size-4 rounded-full bg-neutral-500 flex items-center justify-center">
            <Clock3 className="stroke-white" />
          </div>
        </div>
        <div className="flex rounded-xl bg-neutral-800 p-3.5 justify-between">
          <div className="flex flex-col">
            <div>$1,224.59</div>
            <div className="text-neutral-500 text-xs">
              Completed Apr 01, 2024
            </div>
          </div>
          <div className="size-4 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="stroke-white size-3" strokeWidth={3} />
          </div>
        </div>
        <div className="flex rounded-xl bg-neutral-800 p-3.5 justify-between">
          <div className="flex flex-col">
            <div>$729.20</div>
            <div className="text-neutral-500 text-xs">
              Completed Mar 28, 2024
            </div>
          </div>
          <div className="size-4 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="stroke-white size-3" strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
