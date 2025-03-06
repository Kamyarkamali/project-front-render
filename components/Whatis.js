import { dataEharIs } from "@/data/localData";
import Comments from "@/module/Comments";
import React from "react";
import DrowpDwon from "@/components/DropDwon";

function Whatis() {
  return (
    <div className="p-4">
      {/* بخش عنوان و تصویر */}
      {dataEharIs.map((item) => (
        <div key={item.id} className="flex flex-col">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <h1 className="text-xl sm:text-2xl md:text-4xl text-[#062221] font-bold">
              {item.title}
            </h1>
            {item.image && (
              <img
                className="w-full sm:w-[300px] md:w-[400px] mt-4 md:mt-0"
                src={item.image}
                alt={item.title}
              />
            )}
          </div>
        </div>
      ))}

      {/* بخش In a nutshell */}
      <div className="mt-8">
        <p className="text-[#062221] text-lg sm:text-xl md:text-2xl font-bold">
          In a nutshell
        </p>
        {dataEharIs.map((i) => (
          <div
            key={i.id}
            className="flex flex-col w-full md:w-[700px] mt-4 gap-3 leading-7 sm:leading-8 text-[#0F514E] text-sm sm:text-base md:text-lg"
          >
            <p>{i.desc1}</p>
            <p>{i.desc2}</p>
            <p>{i.desc3}</p>
          </div>
        ))}
      </div>

      {/* بخش Contents */}
      <div className="flex flex-col p-4">
        <p className="text-[#062221] text-lg sm:text-xl md:text-2xl font-bold">
          Contents
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="flex p-4 border-b-[0.5px] border-[#20B7C2] items-center gap-3"
            >
              <img
                className="w-8 sm:w-10"
                src={`/whatis/${num}.svg`}
                alt={`Icon ${num}`}
              />
              <p className="text-[#20B7C2] text-sm sm:text-base md:text-lg">
                {num}.{" "}
                {
                  [
                    "How it works",
                    "Building up profit",
                    "FAQ",
                    "Back & lay bets",
                    "What you need to get started",
                    "LEARN Matched betting",
                  ][num - 1]
                }
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* بخش PART 1 */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col">
            <p className="font-bold text-sm sm:text-base">PART 1</p>
            <p className="text-xl sm:text-2xl md:text-4xl font-bold">
              How it works
            </p>
          </div>
          <img
            className="w-16 sm:w-20 md:w-24 mt-4 md:mt-0"
            src="/whatis/workspart1.svg"
            alt="what is"
          />
        </div>
        <div className="border-b-[3px] mt-4 border-[#29E0CB] w-full h-2"></div>
        <div className="mt-8 text-sm sm:text-base md:text-lg max-w-full md:max-w-[800px] flex flex-col gap-4">
          <p className="text-[#0F514E] leading-7 sm:leading-8">
            Bookmakers always try to attract new customers with free bets and
            bonuses. Usually, it’s something like bet £10, get a £10 free bet.
            As with many marketing campaigns, the bookmaker takes a short-term
            hit to get people in the door. They aim to get people hooked and
            make a profit in the long term.
          </p>
          <p className="text-[#0F514E] leading-7 sm:leading-8">
            Matched betting is a simple technique that takes advantage of this.
            By covering all outcomes of an event, you can meet the requirements
            needed to claim the free bet or bonus without risking large sums of
            money. It’s not about taking risks or punts, nor do you need to know
            anything about the event you’re betting on.
          </p>
        </div>
      </div>

      {/* بخش PART 2 */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col">
            <p className="font-bold text-sm sm:text-base">PART 2</p>
            <p className="text-xl sm:text-2xl md:text-4xl font-bold">
              Building up profit
            </p>
          </div>
          <img
            className="w-16 sm:w-20 md:w-24 mt-4 md:mt-0"
            src="/whatis/part2.svg"
            alt="what is"
          />
        </div>
        <div className="border-b-[3px] mt-4 border-[#29E0CB] w-full h-2"></div>
        <div className="mt-8 text-sm sm:text-base md:text-lg max-w-full md:max-w-[800px] flex flex-col gap-4">
          <p className="text-[#0F514E] leading-7 sm:leading-8">
            Once you’ve completed your first offer, it’s a case of banking your
            profit and repeating the process with another one. There’s no skill;
            stick to the process and repeat. Some offers vary slightly in their
            qualifying requirements, but the fundamentals remain the same. Once
            you’re comfortable with the standard ‘Bet X, Get Y’ offer, you’ll
            have no problems picking up the variations.
          </p>
          <p className="text-[#0F514E] leading-7 sm:leading-8">
            Finding offers to take advantage of can be very time-consuming if
            you were to do it yourself. Luckily, that’s where I step in. My
            Matched Betting Academy lists every new customer offer from UK
            bookmakers, complete with step-by-step instructions. Any variations
            in technique are clearly shown and explained. It even teaches you
            how to profit from existing customer offers to set you up for
            long-term profits.
          </p>
        </div>
      </div>

      {/* بخش PART 3 */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col">
            <p className="font-bold text-sm sm:text-base">PART 3</p>
            <p className="text-xl sm:text-2xl md:text-4xl font-bold">
              Back & lay bets
            </p>
          </div>
          <img
            className="w-16 sm:w-20 md:w-24 mt-4 md:mt-0"
            src="/whatis/3.svg"
            alt="what is"
          />
        </div>
        <div className="border-b-[3px] mt-4 border-[#29E0CB] w-full h-2"></div>
        <div className="mt-8 text-sm sm:text-base md:text-lg max-w-full md:max-w-[800px] flex flex-col gap-4">
          <p className="text-[#0F514E] leading-7 sm:leading-8">
            In my earlier example, I used a coin toss to demonstrate the basic
            principle of matched betting. That makes it simple, as there are
            only two possible outcomes.
          </p>
          <p className="text-[#0F514E] leading-7 sm:leading-8">
            In the real world, only a few sports have two outcomes. You’ll need
            to place bets on things like football matches with three outcomes
            because the two teams could draw. However, you can still cover all
            outcomes using only two bets.
          </p>
        </div>
      </div>

      <DrowpDwon />

      {/* بخش PART 4 */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col">
            <p className="font-bold text-sm sm:text-base">PART 4</p>
            <p className="text-xl sm:text-2xl md:text-4xl font-bold">
              What you need to get started
            </p>
          </div>
          <img
            className="w-16 sm:w-20 md:w-24 mt-4 md:mt-0"
            src="/whatis/what-is-section-what-you-need.svg"
            alt="what is"
          />
        </div>
        <div className="border-b-[3px] mt-4 border-[#29E0CB] w-full h-2"></div>
        <div className="mt-8 text-sm sm:text-base md:text-lg max-w-full md:max-w-[800px] flex flex-col gap-4">
          <p className="text-[#0F514E] leading-7 sm:leading-8">
            You’ll need a small amount of money to place your first bets and
            qualify for your first free bet – around £100. You’ll get this back,
            plus your first free bet. If you want to start with a larger amount,
            you can have multiple offers running alongside each other – so you
            don’t need the first one to settle before claiming the next.
          </p>
          <p className="text-[#0F514E] leading-7 sm:leading-8">
            Matched betting is a simple technique that takes advantage of this.
            By covering all outcomes of an event, you can meet the requirements
            needed to claim the free bet or bonus without risking large sums of
            money. It’s not about taking risks or punts, nor do you need to know
            anything about the event you’re betting on.
          </p>
        </div>
      </div>

      {/* بخش کامنت‌ها */}
      <div className="mt-12">
        <Comments />
      </div>
    </div>
  );
}

export default Whatis;
