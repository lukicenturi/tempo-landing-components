import React from "react";

const CardWithProgress = () => {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col gap-6">
      <div className="pt-6 flex items-baseline gap-2.5">
        <div className="text-6xl font-semibold">25%</div>
        <div className="text-neutral-500">5 of 12 done</div>
      </div>
      <div className="w-full rounded-full h-4 bg-neutral-100">
        <div className="w-1/4 bg-violet-600 h-full rounded-full" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Team Training</div>
          <div className="font-medium text-sm text-neutral-500">
            Designed to foster inclusivity and leverage diverse perspectives.
          </div>
        </div>
        <a
          className="text-violet-600 text-sm font-semibold underline cursor-pointer"
          href="#"
        >
          Resume Course
        </a>
      </div>
    </div>
  );
};

export default CardWithProgress;
