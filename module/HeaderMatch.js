"use client";
import { useState } from "react";
import { matched } from "@/data/localData";
import MainMatched from "@/templates/MainMatched2";
import Link from "next/link";

function HeaderMatch() {
  const [selectedMatch, setSelectedMatch] = useState(matched[0]);

  return (
    <div className="flex flex-col items-center">
      <div className="lg:grid lg:grid-cols-4 flex overflow-x-auto gap-4 justify-items-center lg:gap-3 bg-gray-100 p-5 w-full gap-y-4 scroll-smooth snap-x snap-mandatory">
        {matched.map((item) => (
          <div
            className="flex gap-3 items-center cursor-pointer snap-center shrink-0"
            key={item.id}
            onClick={() => setSelectedMatch(item)}
          >
            <Link
              href={item.id.toString() ? item.id.toString() : "#"}
              className="flex items-center gap-3 bg-white p-2 rounded-lg w-[250px] shadow-sm hover:shadow-md duration-300 hover:scale-95"
            >
              <img className="w-[30px]" src={item.image} alt={item.title} />
              <p className="text-[#0F514E] text-[13px]">{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderMatch;
