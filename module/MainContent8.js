import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function MainContent8() {
  return (
    <div className="mt-[6rem] flex flex-col items-center gap-10 px-4 md:px-8">
      <div className="flex flex-col items-center text-center">
        <p className="text-[#0B3C3A] text-[24px] md:text-[28px] font-bold">
          Start profiting today
        </p>
        <p className="w-full max-w-[680px] leading-[28px] text-[#6E5B61] mt-5">
          Save for a holiday, a big event or just have some spare money for the
          weekends. Matched betting can get you there.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <button className="w-full max-w-[259px] border-[1px] border-[#0B3C3A] font-bold rounded-lg p-3 text-[#0B3C3A]">
          What is Matched Betting?
        </button>
        <button className="w-full max-w-[168px] flex items-center gap-2 justify-center font-bold rounded-lg bg-[#FFD938] hover:bg-[#F7C800] transition-all duration-300 hover:gap-4 cursor-pointer p-3">
          Get Started
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default MainContent8;
