import ShareBtnfooter from "@/button/ShareBtnfooter";
import Input from "@/ui/Input";
import ToggelBtn from "@/ui/ToggelBtn";
import React from "react";

function Tabale2({ title, title2, title3, bgblue }) {
  return (
    <div className="w-full lg:w-[700px]">
      {/* جدول سبز */}
      <div className="w-full h-auto p-4 flex flex-col gap-3 rounded-lg rounded-b-none shadow-sm bg-[#7FEAAD]">
        <div className="flex items-center justify-between">
          <p className="text-sm lg:text-base font-bold text-[#275840]">
            {title}
          </p>
          <ToggelBtn />
        </div>
        <Input type={"text"} label={"Back Stake"} bg={"#BFF5D6"} />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
          <Input bg={"#BFF5D6"} type={"text"} label={"Back odds (decimal)"} />
          <Input bg={"#BFF5D6"} type={"text"} label={"0 %"} />
        </div>
      </div>

      {/* جدول آبی */}
      <div
        className={`w-full h-auto p-4 flex flex-col gap-3 rounded-lg rounded-t-none shadow-sm bg-[${bgblue}]`}
      >
        <p className="text-sm lg:text-base text-[#275840] font-bold">
          {title2}
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
          <Input bg={"#B0D8FF"} type={"text"} label={"Back odds (decimal)"} />
          <Input bg={"#B0D8FF"} type={"text"} label={"0 %"} />
        </div>
        <div className="bg-[#3E6896] w-full h-fit p-3 rounded-lg">
          <p className="text-sm lg:text-base text-white text-center">
            Lay stake required: <span className="font-bold">£ 0.00</span>
          </p>
        </div>
      </div>

      {/* جدول ۳ */}
      <div className="w-full mt-4">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="p-3 text-sm lg:text-base"></th>
              <th className="p-3 text-sm lg:text-base">Bookie</th>
              <th className="p-3 text-sm lg:text-base">Exchange</th>
              <th className="p-3 text-sm lg:text-base">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-green-300 text-gray-800">
              <td className="p-3 flex items-center gap-2 font-bold">
                <span className="text-sm lg:text-base text-green-900 py-1 px-2 rounded-l-lg">
                  If <span className="font-bold">back</span> (bookie) bet wins
                </span>
              </td>
              <td className="p-3 bg-gray-100 text-sm lg:text-base">£ 0.00</td>
              <td className="p-3 bg-gray-100 text-sm lg:text-base">£ 0.00</td>
              <td className="p-3 font-bold text-sm lg:text-base">= £ 0.00</td>
            </tr>
            <tr className="bg-blue-300 text-gray-800">
              <td className="p-3 flex items-center gap-2 font-bold">
                <span className="text-sm lg:text-base text-blue-900 py-1 px-2 rounded-l-lg">
                  If <span className="font-bold">lay</span> (exchange) bet wins
                </span>
              </td>
              <td className="p-3 bg-gray-100 text-sm lg:text-base">£ 0.00</td>
              <td className="p-3 bg-gray-100 text-sm lg:text-base">£ 0.00</td>
              <td className="p-3 font-bold text-sm lg:text-base">= £ 0.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* جدول ۴ */}
      <div className="w-full p-4 flex justify-center items-center bg-[#EBEDEF] h-[80px] mt-9 shadow-md rounded-lg">
        <p className="text-center text-[#484B4E] text-lg lg:text-[20px] font-bold">
          {title3}
        </p>
      </div>
    </div>
  );
}

export default Tabale2;
