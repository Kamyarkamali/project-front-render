import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const steps = [
  {
    id: 1,
    title: "The Fundamentals",
    title2: "Learn the fundamentals",
    description:
      "Matched betting is a simple betting technique that takes advantage of bookmaker promotions to make a profit no matter the outcome of the event you're betting on.Walk through your first offer and make £37 in the process.",
    amount: "£37.00",
    guaranteed: true,
    image: "/images/imageMainContent/card1.png",
  },
  {
    id: 2,
    title: "Coral – £20 in Free Bets",
    title2: "Put it into practice…",
    amount: "£15.75",
    guaranteed: true,
  },
  {
    id: 3,
    title: "Sky Bet – £30 in Free Bets",
    amount: "£23.75",
    guaranteed: true,
  },
  {
    id: 4,
    title: "Matt’s Top Tips for Matched Betting Newbies",
    description:
      "A few tips to maximize profits, keep you on track, and make profits over the long term.",
    image: "/images/imageMainContent/dddd.png",
    guaranteed: true,
  },
  {
    id: 5,
    title: "Virgin Bet – £20 in Free Bets",
    amount: "£15.50",
    guaranteed: true,
  },
  {
    id: 6,
    title: "William Hill – £30 in Free Bets",
    amount: "£23.50",
    guaranteed: true,
  },

  {
    id: 7,
    title: "Save Time with on Odds Matcher",
    description:
      "An pdds matcher can save you time when event and  market to place your back and  lay bets on.Save time equals more offers  you can complerte, wich means a greater hourly profit.",
    image: "/images/imageMainContent/card3.png",
    guaranteed: true,
  },
  {
    id: 8,
    title: "Ladbrokes – £20 in Free Bets",
    amount: "£37.00",
    guaranteed: true,
  },
  {
    id: 9,
    title: "Bet UK – £30 in Free Bets",
    amount: "£21.50",
    guaranteed: true,
  },
  {
    id: 10,
    title: "BoyleSports – £20 in Free Bets",
    amount: "£15.00",
    guaranteed: true,
  },
  {
    id: 11,
    title: "Paddy Power – £30 in Free Bets",
    amount: "£23.75",
    guaranteed: true,
  },

  {
    id: 12,
    title: "Renew your Smarkets 0% Commission",
    description:
      "Eventualyy, your 0% commission at Smarkets that was part of your welcome offer will expire. But fear not, you can extend your 0% commission beyound  this point.Let's find out how.",
    image: "/images/imageMainContent/card4.png",
    guaranteed: true,
  },
];

export default function AcademyPage() {
  return (
    <div className="max-w-[1200px] overflow-x-hidden mx-auto flex flex-col items-center mt-10 px-4">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl text-[#0B3C3A]">
          Matched Betting Academy
        </h2>
        <p className="text-[#0B3C3A] leading-8 max-w-[900px] mt-4">
          This is the place to start if you’re new to matched betting. My course
          gives you a structured approach, tackling offers in the optimal order.
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
            <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#C3F6F0] text-black font-bold rounded-full border-2 border-[#C3F6F0] text-lg sm:left-[-10px]">
              {step.id}
            </div>

            {/* Step Content */}
            <div className="sm:ml-8 p-4 w-full transition-all duration-300 cursor-pointer flex items-center gap-4 bg-white text-black rounded-lg hover:shadow-md hover:scale-100 shadow-sm flex-grow flex-col sm:flex-row">
              {step.image && (
                <div className="mb-4 sm:mb-0">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={800}
                    height={800}
                    className="rounded-lg w-full sm:w-[400px]"
                  />
                </div>
              )}
              <div className="text-center sm:text-left w-full">
                <h3 className="font-semibold text-lg text-[#0F514E]">
                  {step.title}
                </h3>
                {step.amount && (
                  <p className="mt-2 bg-[#29E0CB] p-3 rounded-lg font-bold text-[#0F514E] inline-block">
                    {step.guaranteed && (
                      <span className="text-cyan-500">Guaranteed </span>
                    )}
                    {step.amount}
                  </p>
                )}
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
