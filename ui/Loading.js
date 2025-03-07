import React from "react";
import { ColorRing } from "react-loader-spinner";

function Loading() {
  return (
    <div className="fixed top-0 right-0 left-0 bg-black opacity-70 w-full  h-full">
      <div className="flex items-center justify-center h-[70%]">
        <div className="flex flex-col items-center gap-4">
          <ColorRing />
          <p className="font-bold text-xl text-white">Loading...</p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
