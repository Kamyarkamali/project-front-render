"use client";
import { dataMenu } from "@/data/localData";
import HamburgerMenu from "@/module/HamburgerMenu";
import TopMenuRight from "@/module/TopMenuRight";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [close, setClose] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setClose(false);
    }, 4000);
    function handleClickOutside(e) {
      if (
        hamburgerOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setHamburgerOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hamburgerOpen]);

  return (
    <div className={`${hamburgerOpen && "fixed w-full h-full bg-black/40"}`}>
      {close && (
        <div className="bg-[#F7C800] p-3 flex justify-center">
          <div className="flex items-center gap-2 justify-between w-full">
            <p className="text-[#0B3C3A] text-xs sm:text-sm text-center w-full">
              🚨🚨🚨 IT'S BACK!
              <span className="font-bold">0% Smarkets Commission</span> for all
              MBB users!{" "}
              <span className="underline cursor-pointer">Find out more</span>
            </p>
            <IoMdClose
              onClick={() => setClose(false)}
              size={23}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}

      <div className="flex justify-between items-center pl-4 pr-4 p-4">
        {/* top header-logo */}
        <div className="flex items-center gap-3">
          <Link href={"/"}>
            <Image
              className="lg:w-[250px] w-[150px]"
              src={"/images/imageHome/mbb-logo.svg"}
              width={280}
              height={280}
              alt="logo"
            />
          </Link>

          <div className="w-1 xl:h-10 h-6 border-l-[2px] border-[#91E3DB]"></div>

          <div className="flex flex-col items-center">
            <p className="xl:text-[12px] text-[11px] text-[#3C7270]">
              in association with
            </p>
            <h3 className="xl:text-xl text-[13px] font-bold">Smarkets</h3>
          </div>
        </div>

        <div className="xl:flex gap-3 items-center flex-row-reverse hidden">
          {dataMenu.map((item, index) => (
            <TopMenuRight key={index} item={item} />
          ))}
        </div>

        {/* hamburgermenu button */}
        <div
          ref={buttonRef}
          onClick={() => setHamburgerOpen(true)}
          className="cursor-pointer xl:hidden"
        >
          <GiHamburgerMenu size={23} />
        </div>
      </div>
      {/* hamburgermenu */}
      {hamburgerOpen && (
        <div ref={menuRef} className="absolute top-0 left-0">
          <HamburgerMenu />
        </div>
      )}
    </div>
  );
}

export default Header;
