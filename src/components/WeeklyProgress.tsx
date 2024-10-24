import React from "react";
import { Card } from "./ui/card.tsx";
import { Button } from "./ui/button.tsx";
import { Ellipsis, Flag, Plus, Tag } from "lucide-react";
import { Avatar } from "./ui/avatar.tsx";

const WeeklyProgress = () => {
  return (
    <Card className="shadow-lg border-none p-7 flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="font-medium">Weekly Progress</div>
          <div className="text-neutral-400 text-sm">
            Start from Nov 7-14, 2020
          </div>
        </div>
        <Button variant="ghost" className="size-6 p-1 text-neutral-400">
          <Ellipsis />
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center relative">
        {(({
          progress = 75,
          size = 170,
          strokeWidth = 6,
          progressStrokeWidth = 10,
        }) => {
          // Circular Progress Component
          const center = size / 2;
          const radius =
            center - Math.max(strokeWidth, progressStrokeWidth) / 2;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference * (1 - progress / 100);

          return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              {/* Background circle */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                className="stroke-neutral-100"
                strokeWidth={strokeWidth}
              />

              {/* Progress arc */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                className="stroke-emerald-400"
                strokeWidth={progressStrokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                transform={`rotate(90 ${center} ${center})`}
              />
            </svg>
          );
        })({})}
        <div className="flex flex-col items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-emerald-400 text-4xl font-bold">75%</div>
          <div className="text-neutral-400 text-xs">Tasks Completed</div>
        </div>
      </div>
    </Card>
  );
};

export default WeeklyProgress;
