import { localDataMainContent } from "@/data/localData";
import React from "react";

function MainContent4() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:pl-19 pl-8 mt-[4rem]">
      {localDataMainContent.map((item) => (
        <div
          key={item.id}
          className="text-right md:text-left flex flex-col items-start md:items-start"
        >
          <img className="w-[70px]" src={item.image} alt={item.title} />
          <p className="text-[20px] text-[#0B3C3A] font-bold mt-2">
            {item.title}
          </p>
          <p className="text-[#899196] mt-5 leading-[28px] text-left lg:max-w-[340px] max-w-[500px]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MainContent4;
