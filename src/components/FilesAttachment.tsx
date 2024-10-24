import React from "react";
import { Card } from "./ui/card.tsx";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { Button } from './ui/button.tsx';

const FileIcon = ({ className, type }) => {
  return (
    <svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg"
         className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.950002C0 0.425331 0.42533 0 0.95 0L20.5 0L35.875 15.375V40.05C35.875 40.5747 35.4497 41 34.925 41H0.950001C0.42533 41 0 40.5747 0 40.05V0.950002Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 0L35.875 15.375H21.45C20.9253 15.375 20.5 14.9497 20.5 14.425V0Z"
        fill="#00000033"
      />
      <text
        x="50%"
        y="80%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="600"
      >
        { type.toUpperCase() }
      </text>
    </svg>
  )
}

const FilesAttachment = () => {
  return (
    <Card className="shadow-lg border-none p-7 flex flex-col gap-7">
      <div className="font-medium">Files Attachment</div>
      <div className="flex flex-col gap-7">
        <div className="flex gap-5">
          <FileIcon className="text-red-500 shrink-0" type="PDF"/>
          <div className="flex flex-col gap-2.5 grow">
            <div className="flex justify-between items-center text-sm">
              <div>User-Journey.pdf</div>
              <div className="text-xs">4.5MB</div>
              <div>
                <Button variant="text" size="sm" className="text-neutral-500 h-6">Cancel</Button>
              </div>
            </div>
            <ProgressPrimitive.Root
              className="relative h-1.5 w-full overflow-hidden rounded-full bg-sky-50"
              value={50}
            >
              <ProgressPrimitive.Indicator
                className="rounded-full h-full bg-sky-500"
                style={{transform: `translateX(-${100 - 50}%)`}}
              />
            </ProgressPrimitive.Root>
          </div>
        </div>
        <div className="flex gap-5">
          <FileIcon className="text-green-500 shrink-0" type="XLS"/>
          <div className="flex flex-col gap-0 grow">
            <div className="flex justify-between items-center text-sm">
              <div>Data-Structure.xls</div>
              <div className="text-xs">12.4MB</div>
              <div>
                <Button variant="text" size="sm" className="text-indigo-400 h-6">Download</Button>
              </div>
            </div>
            <div className="text-neutral-400 text-sm">Angela Hope</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FilesAttachment;
