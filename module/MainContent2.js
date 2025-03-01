import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function MainContent2() {
  return (
    <div className="px-4 md:px-0">
      <div className="flex flex-col md:items-center mt-[7rem] text-left md:text-center">
        <p className="text-[#0B3C3A] md:text-[28px] text-[20px] font-bold">
          The UK’s No. 1 <span className="text-[#29E0CB]">FREE</span> matched
          betting site.
        </p>
        <p className="text-[#154442] md:text-[28px] text-[20px]">
          No subscriptions. No trials.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 mt-[3rem]">
        {/* کارت اول */}
        <div className="w-full md:w-[552px] h-fit flex flex-col rounded-lg border-[0.5px] border-[#29E0CB]">
          <div className="border-b-[0.5px] border-[#29E0CB] p-5 flex flex-col">
            <p className="hover:text-[#086A61] flex items-center gap-2 text-[#29E0CB] duration-300 cursor-pointer lg:text-[15px] text-[12px] font-bold">
              New customer offer
              <FaArrowRight size={15} />
            </p>
            <p className="lg:text-[48px] text-[26px] font-bold">£600+</p>
            <p className="text-[#81888F] lg:text-[15px] text-[12px]">
              currently to be made, with complete tutorials for each one.
            </p>
          </div>

          <div className="border-b-[0.5px] border-[#29E0CB] p-5 flex flex-col">
            <p className="hover:text-[#086A61] flex items-center gap-2 text-[#29E0CB] duration-300 cursor-pointer lg:text-[15px] text-[12px] font-bold">
              Reload Offers
              <FaArrowRight size={15} />
            </p>
            <p className="lg:text-[48px] text-[26px]  font-bold">£98,603.54</p>
            <p className="text-[#81888F] lg:text-[15px] text-[12px]">
              of reload offer profit posted since 2014.*
            </p>
          </div>

          <div className="p-5 flex flex-col">
            <p className="hover:text-[#086A61]  flex items-center gap-2 text-[#29E0CB] duration-300 cursor-pointer lg:text-[15px] text-[12px] font-bold">
              Profit Log
              <FaArrowRight size={15} />
            </p>
            <p className="text-[#81888F] lg:text-[15px] text-[12px]">
              Seeing is believing. I’ve logged the outcome to every offer I’ve
              ever posted.
            </p>
          </div>
        </div>

        {/* کارت دوم */}
        <div className="w-full md:w-[552px] flex flex-col h-auto p-5">
          <div>
            <p className="text-[60px] text-[#0F514E]">“</p>
            <p className="text-[#0F514E] text-[20px] leading-[40px] md:leading-[50px]">
              I believe everyone should be able to benefit from matched betting,
              just like I and many thousands of others have. That’s why all my
              guides and tutorials are completely free to use.
            </p>
            <p className="text-[#0F514E] text-[14px]">
              <span className="font-bold">Matt Kirman</span> – Matched betting
              blogger since 2014
            </p>
            <img
              className="w-[80px] md:w-[100px] rounded-full mt-4"
              src={"images/imageMainContent/matt.jpg"}
              alt="matt"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent2;
