import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { steps } from "@/data/localData";
import { IoLockOpen } from "react-icons/io5";

export default function AcademyPage() {
  return (
    <div className="max-w-[1200px]  overflow-x-hidden mx-auto flex flex-col items-center mt-[111px] px-4">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="font-bold text-5xl text-[#0B3C3A]">
          Matched Betting Academy
        </h2>
        <p className="text-[#0F5165] text-[16px] leading-8 text-left mt-[3rem]">
          This is the place to start if you’re new to matched betting. My course
          gives your matched betting structure, with each guide breaking
          strategies into straightforward steps. You’ll tackle offers in the
          optimal order, building your bankroll and profits as you go.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col items-start w-full max-w-[900px]">
        {/* Timeline Line */}
        <div className="absolute left-5 top-0 h-full w-1 bg-[#C3F6F0] hidden sm:block"></div>

        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col sm:flex-row items-start w-full mb-6"
          >
            {/* Step Circle */}
            <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#C3F6F0] text-[15px] text-[#20635D] rounded-full border-2 border-[#C3F6F0] text-lg sm:left-[-10px]">
              {step.id}
            </div>

            {/* Step Content */}
            <div className="sm:ml-8 p-0 m-0 w-full  transition-all duration-300 cursor-pointer flex items-stretch bg-white text-black rounded-4xl hover:shadow-md hover:scale-100 shadow-sm flex-grow flex-col sm:flex-row">
              {step.image && (
                <div className="relative w-fit  h-fit flex-shrink-0 overflow-hidden">
                  {step.image && step.guaranteed && step.amount && (
                    <div className="flex items-center gap-4 bg-[#29E0CB] w-[200px] p-4 rounded-4xl rounded-b-none rounded-r-none">
                      <p className="text-[18px]">{step.guaranteed}</p>
                      <p className="font-bold">{step.amount}</p>
                      <IoLockOpen size={30} color="black" />
                    </div>
                  )}
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={900}
                    height={800}
                    className="w-[400px] object-cover rounded-4xl"
                  />
                </div>
              )}
              {step.image ? (
                <div className="text-center sm:text-left w-full p-4">
                  <h3 className="font-semibold  text-lg text-[#0F514E]">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="mt-2 text-[16px] leading-[30px] text-[#0F514E]">
                      {step.description}
                    </p>
                  )}
                </div>
              ) : (
                <div className="text-center sm:text-left w-full rounded-4xl h-[70px] flex justify-between">
                  <div className="flex items-center gap-4 bg-[#29E0CB] rounded-4xl rounded-r-none w-[200px] pl-4">
                    <p>{step.guaranteed}</p>
                    <p className="font-bold">{step.amount}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-xl text-[#0F514E]">
                      {step.title}
                    </p>
                    <p>{step.description}</p>
                  </div>
                  <div className=" p-5 flex items-center gap-4">
                    <p>1</p>
                    <p>2</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="flex flex-col gap-4 text-center sm:text-left">
        <h3 className="text-[#0B3C3A] text-[29px] font-bold">
          What’s up next?
        </h3>
        <p>
          Learn how to lay risk-free bets and multiples so that you can profit
          from a broader range of sign-up offers.
        </p>
        <p className="text-[#0B3C3A] text-[16px]">
          Heads up! If you haven’t already, you’ll need to{" "}
          <Link className="text-[#29E0CB]" href={"/register"}>
            register
          </Link>{" "}
          for a free Matched Betting Blog account to access the rest of the
          Academy.
        </p>
        <button className="flex items-center gap-2 bg-[#29E0CB] w-[250px] p-3 justify-center hover:gap-4 cursor-pointer duration-300 rounded-lg mx-auto sm:mx-0">
          Risk-Free & Multiples
          <FaArrowRight />
        </button>
      </section>
    </div>
  );
}
