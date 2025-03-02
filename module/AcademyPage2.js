import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { steps } from "@/data/localData";

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
            <div className="sm:ml-8 p-4 w-full transition-all duration-300 cursor-pointer flex items-center gap-4 bg-white text-black rounded-lg hover:shadow-md hover:scale-100 shadow-sm flex-grow flex-col sm:flex-row">
              {step.image && (
                <div className="relative w-full sm:w-[300px] h-[200px] rounded-lg sm:h-[200px] flex-shrink-0 overflow-hidden">
                  <div className="flex flex-col items-center">
                    {step.image ? (
                      <div>
                        <p>{step.guaranteed}</p>
                        <p>{step.amount}</p>
                      </div>
                    ) : null}
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={900}
                      height={800}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              <div className="text-center sm:text-left w-full">
                <h3 className="font-semibold text-lg text-[#0F514E]">
                  {step.title}
                </h3>
                {/* {step.amount && (
                  <p className="mt-2 bg-[#29E0CB] p-3 rounded-lg font-bold text-[#0F514E] inline-block">
                    {step.guaranteed && (
                      <span className="text-cyan-500">Guaranteed </span>
                    )}
                    {step.amount}
                  </p>
                )} */}
                {step.description && (
                  <p className="mt-2 text-[16px] leading-[30px] text-[#0F514E]">
                    {step.description}
                  </p>
                )}
              </div>
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
