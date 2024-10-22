import React from "react";

const Map = () => {
  return (
    <div className="border-white border-4 rounded-xl relative overflow-hidden h-full">
      <img
        src="/public/map.png"
        className="w-[300px] h-[300px] object-cover object-center"
      />
      <div className="absolute top-4 left-4 bg-white rounded-xl p-4 text-neutral-500 text-sm font-medium">
        <div className="mb-3.5">Delivering to:</div>
        <div className="mb-2.5 text-black font-semibold text-base">
          Edward Kim
        </div>
        <div>
          <div>22 47th Ave</div>
          <div>Long Island City, NY 11101</div>
        </div>
      </div>
    </div>
  );
};

export default Map;
