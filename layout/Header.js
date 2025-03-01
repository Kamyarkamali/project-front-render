"use client";
import { dataMenu } from "@/data/localData";
import TopMenuRight from "@/module/TopMenuRight";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div className="flex justify-between items-center pl-4 pr-4">
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

      {/* <div>2</div> */}

      <div className="xl:flex gap-3 items-center flex-row-reverse hidden">
        {dataMenu.map((item) => (
          <TopMenuRight item={item} />
        ))}
      </div>

      {/* hamburgermenu */}
      <div className="cursor-pointer xl:hidden">
        <GiHamburgerMenu size={23} />
      </div>
    </div>
  );
}

export default Header;
