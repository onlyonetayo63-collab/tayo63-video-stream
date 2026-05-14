import React from "react";

interface AdSlotProps {
  position: "top" | "middle" | "bottom";
}

const AdSlot: React.FC<AdSlotProps> = ({ position }) => {
  return (
    <div className="my-10 w-full">
      <div className="mx-auto max-w-4xl bg-zinc-900/50 border border-white/5 rounded-lg h-32 flex flex-col items-center justify-center text-center p-4">
        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-2">Advertisement</span>
        <p className="text-gray-500 text-sm">Space Reserved for Google AdSense</p>
        <p className="text-[10px] text-gray-700 mt-1 max-w-xs">
          This placement is designed according to AdSense policies for optimal user experience and ad visibility.
        </p>
      </div>
    </div>
  );
};

export default AdSlot;