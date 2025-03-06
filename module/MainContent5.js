import Link from "next/link";
import React from "react";

function MainContent5() {
  return (
    <div className="mt-[7rem]">
      <div className="flex justify-center">
        <p className="text-[29px] text-[#0B3C3A] font-bold text-center">
          A flexible, convenient second income
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row-reverse justify-between gap-4 mt-[3rem] items-center">
        <div className="order-2">
          <img
            className="w-[800px] md:w-[900px]"
            src="/images/imageMainContent/home-second-income.svg"
            alt="Second Income"
          />
        </div>

        <div className="sm:pr-19 pl-9 sm:pl-0 flex flex-col gap-9 md:text-left order-1">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#0B3C3A] text-[22px]">
              Fits around your schedule
            </h4>
            <p className="text-[#81888F] max-w-[430px] leading-[28px]">
              Place your bets at times that suit you. The quicker you get, the
              more convenient and profitable it becomes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#0B3C3A] text-[22px]">
              Make about £20 per hour
            </h4>
            <p className="text-[#81888F] max-w-[430px] leading-[28px]">
              By putting in around 30 minutes each day, you can make close to
              £300 per month. The more time you put in, the bigger the profits.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#0B3C3A] text-[22px]">
              Matched bet anywhere that suits you
            </h4>
            <p className="text-[#81888F] max-w-[430px] leading-[28px]">
              By putting in around 30 minutes each day, you can make close to
              £300 per month. The more time you put in, the bigger the profits.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[3rem]">
        <Link href={"/what-is-matched-betting"}>
          <button className="border-[1px] p-3 border-[#29E0CB] rounded-lg cursor-pointer">
            What is Matched Betting?
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MainContent5;
