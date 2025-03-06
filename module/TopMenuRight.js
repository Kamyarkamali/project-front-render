"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import ModalSearchBar from "./ModalSearchBar";
import Modal2 from "./Modal2";
import { dataMenu } from "@/data/localData";

function TopMenuRight({ item }) {
  const [hover, setHover] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const closeTimeout = useRef(null);

  const handleMouseEnter = () => {
    if (item.image === "/icon/icon2.png") {
      setHover(true);
    }
  };

  const handleMouseEnterModal = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setIsHovered(null);
    setTimeout(() => {
      setIsHovered(item.id);
    }, 0);
  };

  const handleMouseLeaveModal = () => {
    closeTimeout.current = setTimeout(() => {
      setIsHovered(null);
    }, 500);
  };

  return (
    <div className="flex items-center">
      <span className="text-[0.875rem] font-bold cursor-pointer hover:text-gray-400 transition-color duration-300">
        <Link
          onMouseEnter={handleMouseEnterModal}
          onMouseLeave={handleMouseLeaveModal}
          href={item.href ? item.href : "#"}
        >
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
          className={`w-4 h-4 cursor-pointer ${
            item.image ? "block" : "hidden"
          }`}
          src={item.image ? item.image : ""}
          alt="icon"
        />
      </div>
      {hover && (
        <div
          onMouseLeave={() => setHover(false)}
          className="absolute top-13 left-0 right-0 shadow-lg w-full p-3 h-[200px] z-20 bg-white right-9"
        >
          <ModalSearchBar />
        </div>
      )}
      {isHovered === item.id && (
        <div
          onMouseEnter={handleMouseEnterModal}
          onMouseLeave={handleMouseLeaveModal}
          className={`bg-white ${
            item.title === "LEARN" || item.title === "GET STARTED"
              ? "left-[50rem] w-[300px] "
              : "left-0 w-full h-fit"
          } absolute top-13  right-0 shadow-lg p-3 z-20 rounded-lg`}
        >
          <div
            className={`${
              item.title === "EXTRAS" || item.title === "OFFERS"
                ? "block"
                : "hidden"
            } flex flex-col items-center gap-1`}
          >
            {dataMenu.map((item) => (
              <div className="flex flex-col items-center">
                <p className="text-[#0B3C3A] text-[12px] font-bold">
                  {item.descshortex ? item.descshortex : ""}
                </p>
                <p className="text-[13px] text-[#81919A] mt-1">
                  {item.desc ? item.desc : ""}
                </p>
              </div>
            ))}
          </div>

          <Modal2 item={item} />
        </div>
      )}
    </div>
  );
}

export default TopMenuRight;
