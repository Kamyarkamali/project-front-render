import Link from "next/link";
import React from "react";

function Modal2({ item }) {
  const submenuKey = Object.keys(item).find((key) => key.startsWith("submenu"));
  const submenu = submenuKey ? item[submenuKey] : [];

  return (
    <div className="grid grid-cols-2 items-center gap-5 mx-auto max-w-[1000px]">
      {submenu.map((item) => (
        <>
          <Link
            href={item.href ? item.href : "#"}
            key={item.id}
            className={` flex items-center gap-3 ${
              item.item1dsc === "What is Matched Betting?" ||
              item.item1dsc === "Matched Betting Academy"
                ? "border-none"
                : "border-[0.2px]"
            }  border-green-300 rounded-lg p-3 cursor-pointer hover:scale-95 duration-300 ${
              item.title === "LEARN" || item.title === "GET STARTED"
                ? "w-[500px] h-[130px]"
                : ""
            } `}
          >
            <img className="w-[50px]" src={item.image} />
            <div className="flex flex-col">
              <p className="text-[#0F514E] w-[300px] font-bold text-[14px]">
                <Link href={item.href ? item.href : "#"}>{item.item1dsc}</Link>
              </p>
              <Link href={item.href ? item.href : "#"}>
                <p className="text-[#91888F] text-[12px] leading-[30px] font-bold">
                  {item.item2desc}
                </p>
              </Link>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
}

export default Modal2;
