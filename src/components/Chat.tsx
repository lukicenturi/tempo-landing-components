import React from "react";

const Chat = () => {
  return (
    <div className="px-6 py-4 bg-neutral-900 text-white flex flex-col">
      <div className="pb-4 border-b border-neutral-800">Activity</div>
      <div className="flex flex-col gap-4 pt-6">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="size-10 shrink-0 overflow-hidden bg-neutral-300 rounded-full">
              <img src="/avatar-1.png" className="w-full h-full" />
            </div>
            <div>
              <div className="font-medium text-sm">Isaac Johns</div>
              <div className="text-neutral-500 text-xs">2 days ago</div>
            </div>
          </div>
          <div className="ml-5 border-l-2 border-neutral-800 pl-5 pb-5">
            <div className="rounded-xl p-4 bg-neutral-800 text-neutral-400 text-xs">
              Reviewed and sent the invoice to{" "}
              <a href="#" className="underline">
                time@acme.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="size-10 shrink-0 overflow-hidden bg-neutral-300 rounded-full">
              <img src="/avatar-2.png" className="w-full h-full" />
            </div>
            <div>
              <div className="font-medium text-sm">Alex Parkinson</div>
              <div className="text-neutral-500 text-xs">1 day ago</div>
            </div>
          </div>
          <div className="ml-5 pl-5 pb-5">
            <div className="rounded-xl p-4 bg-violet-500 text-white text-xs">
              Sent the invoice DGR 8263 to{" "}
              <a href="#" className="underline">
                time@acme.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
