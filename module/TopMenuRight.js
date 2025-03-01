"use client";
import Link from "next/link";
import { useState } from "react";
import ModalSearchBar from "./ModalSearchBar";

function TopMenuRight({ item }) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    if (item.image === "/icon/icon2.png") {
      setHover(true);
    }
  };

  return (
    <div className="flex items-center">
      <span className="text-[0.875rem] font-bold cursor-pointer hover:text-gray-400 transian-color duration-300 ">
        <Link href={item.href ? item.href : "#"}>
          {item.title ? item.title : ""}
        </Link>
      </span>
      <div
        className={`w-1 h-5 p-2 ${item.image && "border-none"} ${
          item.title === "LOGIN"
            ? "border-none"
            : "border-r-[2px] border-[#CCCCCC]"
        }`}
      ></div>
      <div className="relative">
        <img
          onMouseEnter={handleMouseEnter}
          className={`w-4 h-4 cursor-pointer  ${
            item.image ? "block" : "hidden"
          }`}
          src={item.image ? item.image : ""}
          alt="icon"
        />
      </div>
      {hover && (
        <div
          onMouseLeave={() => setHover(false)}
          className="absolute top-19 left-0 right-0 shadow-lg w-full p-3 h-[200px] z-20 bg-white right-9"
        >
          <ModalSearchBar />
        </div>
      )}
    </div>
  );
}

export default TopMenuRight;
