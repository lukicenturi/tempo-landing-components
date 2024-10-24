import React from "react";
import { Button } from './ui/button.tsx';
import { cn } from '../lib/utils.ts';

const Buttons = () => {
  return (
    <div className="flex flex-col gap-5">
      <Button variant="text" className="text-white bg-indigo-400 h-12">
        Normal Button
      </Button>
      <Button variant="text" className="text-indigo-500 bg-indigo-200 h-12 gap-4">
        <div className="flex items-center gap-0.5">
          <style>
            {`
              @keyframes pulse {
                0%, 100% { transform: scale(1) }
                50% { transform: scale(0.5) }
              }
            `}
          </style>
          { Array.from({ length: 3 }, (_, index) => index).map((index) => (
            <div
              key={index}
              className="size-2 bg-indigo-400 rounded-full animate-pulse"
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            />
          ))}
        </div>
        Loading Button
      </Button>
      <Button
        variant="outline"
        className="text-indigo-400 hover:text-indigo-400 bg-transparent hover:bg-indigo-50 border border-indigo-400 h-12"
      >
        Secondary Button
      </Button>
    </div>
  );
};

export default Buttons;
