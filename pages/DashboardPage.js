import Link from "next/link";
import React from "react";

function DashboardPage() {
  return (
    <div className="flex flex-col items-center mt-[2rem] px-4">
      <div>
        <h1 className="font-bold text-[#0F514E] text-2xl sm:text-3xl">
          Reza, let's make some profit!
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[2rem] w-full max-w-6xl">
        <div className="w-full p-4 h-[280px] shadow-md bg-[#F7C800] rounded-lg border-3 border-[#19807b]">
          <div className="flex flex-col">
            <p className="text-[16px] font-bold">
              🚨🚨 IT'S BLACK!! 0% commission With Smarkets for all MBB users!
            </p>
            <p className="leading-[30px] mt-4">
              Connect your Smarkets account and place an integrated bet to have
              the offer applied instantly. This includes users whose
              introductory 0% commission has expired.
            </p>
            <div className="flex items-center mt-6 gap-4 *:text-[14px] font-bold">
              <button className="bg-[#0F514E] p-3 text-white rounded-lg cursor-pointer">
                <Link href={"/academy"}>GET STARTED</Link>
              </button>
              <button className="border-[#0F514E] border-1 cursor-pointer p-3 rounded-lg">
                <Link href={"/what-is-matched-betting"}>Learn More</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full p-4 h-[280px] shadow-md rounded-lg bg-green-200">
          <div className="flex flex-col">
            <p className="text-[16px] font-bold">
              Matched betting is better with friends
            </p>
            <p className="leading-[30px] mt-4">
              Bring a friend along for the ride. Help others and have some
              friendly competition! Invite by email, WhatsApp, or other social
              media.
            </p>
            <div className="flex items-center mt-6 gap-4 *:text-[14px] font-bold">
              <button className="bg-[#0F514E] p-3 text-white rounded-lg cursor-pointer">
                <Link href={"/what-is-matched-betting"}>Invite a Friend</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full p-4 h-fit rounded-lg shadow-md">
          <div className="border-b-1 border-green-200 p-2">
            <h3 className="text-[23px] font-bold">The Academy</h3>
          </div>
          <div className="border-b-1 border-green-200 mt-9 p-2">
            <h3 className="text-lg font-bold">1. The Fundamentals</h3>
          </div>
          <div className="flex flex-col gap-4 mt-3 *:text-gray-400">
            <p>2. Risk-Free & Multiples</p>
            <p>3. Price Boosts & Money Back</p>
            <p>4. Casino Offers</p>
            <p>5. Profit Boosts & Bet Builders</p>
            <p>6. Final Welcome Offers</p>
            <p>7. Reload Offers</p>
          </div>
        </div>

        <div className="w-full p-4 h-fit rounded-lg shadow-md">
          <div className="border-b-1 border-green-200 p-2">
            <h3 className="text-[23px] font-bold">The Academy</h3>
          </div>
          <div className="border-b-1 border-green-200 mt-9 p-2">
            <h3 className="text-lg font-bold">1. The Fundamentals</h3>
          </div>
          <div className="flex flex-col gap-4 mt-3 *:text-gray-400">
            <p>2. Risk-Free & Multiples</p>
            <p>3. Price Boosts & Money Back</p>
            <p>4. Casino Offers</p>
            <p>5. Profit Boosts & Bet Builders</p>
            <p>6. Final Welcome Offers</p>
            <p>7. Reload Offers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
