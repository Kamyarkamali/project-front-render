import { dataEharIs } from "@/data/localData";
import React from "react";

function Whatis() {
  return (
    <div>
      {dataEharIs.map((item) => (
        <div key={item.id} className="flex flex-col">
          <div className="flex items-center gap-6">
            <h1 className="text-[38px] text-[#062221] font-bold">
              {item.title}
            </h1>
            <img className="w-[400px]" src={item.image ? item.image : null} />
          </div>
        </div>
      ))}
      <div>
        <p className="text-[#062221] text-[20px] font-bold">In a nutshell</p>
        {dataEharIs.map((i) => (
          <div className="flex flex-col w-[700px] mt-[1rem] gap-3 leading-[35px] *:text-[#0F514E] text-[18px]">
            <p>{i.desc1}</p>
            <p>{i.desc2}</p>
            <p>{i.desc3}</p>
          </div>
        ))}
        <div className="flex flex-col p-4">
          <p className="text-[#062221] text-[20px] font-bold">Contents</p>
          <div className="mt-[1rem] grid grid-cols-2 p-4">
            <div className="flex p-4 border-b-[0.5px] border-[#20B7C2] items-center gap-3">
              <img className="w-[40px]" src="/whatis/1.svg" />
              <p className="text-[#20B7C2] text-[17px]">1. How it works</p>
            </div>
            <div className="flex p-4 border-b-[0.5px] border-[#20B7C2] items-center gap-3">
              <img className="w-[40px]" src="/whatis/2.svg" />
              <p className="text-[#20B7C2] text-[17px]">
                2. Building uo profit
              </p>
            </div>
            <div className="flex p-4 border-b-[0.5px] border-[#20B7C2] items-center gap-3">
              <img className="w-[40px]" src="/whatis/3.svg" />
              <p className="text-[#20B7C2] text-[17px]">3. FAQ</p>
            </div>
            <div className="flex p-4 border-b-[0.5px] border-[#20B7C2] items-center gap-3">
              <img className="w-[40px]" src="/whatis/4.svg" />
              <p className="text-[#20B7C2] text-[17px]">4. Back & lay bets</p>
            </div>
            <div className="flex p-4 border-b-[0.5px] border-[#20B7C2] items-center gap-3">
              <img className="w-[40px]" src="/whatis/5.svg" />
              <p className="text-[#20B7C2] text-[17px]">
                5. What you need to get started
              </p>
            </div>
            <div className="flex p-4 border-b-[0.5px] border-[#20B7C2] items-center gap-3">
              <img className="w-[40px]" src="/whatis/6.svg" />
              <p className="text-[#20B7C2] text-[17px]">
                6. LEARN Matched betting
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[5rem]">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-bold">PART 1</p>
              <p className="text-[38px] font-bold">How it works</p>
            </div>
            <img
              className="w-[100px]"
              src="/whatis/workspart1.svg"
              alt="what is"
            />
          </div>
          <div className="border-b-[3px] mt-4 border-[#29E0CB] w-full h-2"></div>
          <div className="mt-[3rem] *:text-[19px] max-w-[800px] flex flex-col">
            <p className="max-w-[1000px] text-[#0F514E] leading-[33px]">
              Bookmakers always try to attract new customers with free bets and
              bonuses. Usually, it’s something like bet £10, get a £10 free bet.
              As with many marketing campaigns, the bookmaker takes a short-term
              hit to get people in the door. They aim to get people hooked and
              make a profit in the long term
            </p>
            <p className="w-[1000px] text-[#0F514E] leading-[33px]">
              Matched betting is a simple technique that takes advantage of
              this. By covering all outcomes of an event, you can meet the
              requirements needed to claim the free bet or bonus without risking
              large sums of money. It’s not about taking risks or punts, nor do
              you need to know anything about the event you’re betting on.
            </p>
          </div>
          <div className="mt-[3rem] max-w-[800px] *:text-[19px] flex flex-col">
            <h3 className="font-bold text-[22px]  mb-4 text-[#0B3C3A]">
              A simple example
            </h3>
            <p className="max-w-[1000px] text-[#0F514E] leading-[33px]">
              Let’s consider that a bookmaker is running a promotion where you
              get a free £20 bet if you place a bet of £10 on any event.
            </p>
            <p className="w-[1000px] text-[#0F514E] leading-[33px]">
              For simplicity, the event I’ll use in this example is a coin toss.
              There are two possible outcomes, heads or tails, with an equal
              chance of each happening. If you stake £10 on the correct outcome,
              you’ll get your £10 back, plus an extra £10 – so you’ll be £10 in
              profit.
            </p>
            <p className="w-[1000px] text-[#0F514E] leading-[33px]">
              If you place a £10 bet on heads and a £10 bet on tails, you’ll
              lose £10 on one outcome but gain £10 on the other. The two bets
              will cancel each other out. You will, however, have met the
              requirements to claim your £20 free bet, which was just that you
              needed to place a £10 bet. So you’ll get your free bet without
              having taken any risks. You can see this illustrated in the table
              below.
            </p>
          </div>

          <div className="w-full max-w-[800px] mx-auto p-4">
            <table className="w-full border-collapse text-center">
              <thead>
                <tr className="bg-teal-100">
                  <th className="p-2">£10 on Heads</th>
                  <th className="p-2">£10 on Tails</th>
                  <th className="p-2">Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 text-green-600">+ £10</td>
                  <td className="p-2 text-red-600">- £10</td>
                  <td className="p-2">
                    £0 profit +{" "}
                    <span className="font-semibold">
                      Qualified for £20 free bet
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-2 text-red-600">- £10</td>
                  <td className="p-2 text-green-600">+ £10</td>
                  <td className="p-2">
                    £0 profit +{" "}
                    <span className="font-semibold">
                      Qualified for £20 free bet
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-[#0F514E] leading-[33px] mt-7 text-[18px]">
              And that’s it! No sports knowledge is required!
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 *:text-[19px] mt-[2rem]">
          <p className="font-bold text-[22px] mb-4 text-[#0B3C3A]">
            Using your free bet
          </p>
          <p className="w-[1000px] text-[#0F514E] leading-[33px]">
            You could place your free bet on something and hope it wins. But, by
            repeating the process of covering all outcomes again, you can be
            sure to make a profit no matter the outcome.
          </p>
          <p className="w-[1000px] text-[#0F514E] leading-[33px]">
            I go into much more detail in my full matched betting guide, the
            first step in my free Matched Betting Academy. I will also walk you
            through your first real-world offer step by step, from which you
            will make around £15.
          </p>
          <p className="w-[1000px] text-[#0F514E] leading-[33px]">
            The Academy contains every bookmaker’s welcome offer – over 40, with
            a total profit exceeding £600. Each has a step-by-step guide so you
            always know what to do. Beyond that, it teaches you how to take
            advantage of existing customer offers so you can continue making
            profits far into the future
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whatis;
