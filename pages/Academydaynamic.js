"use client";
import { steps } from "@/data/localData";
import ShareBtn from "@/module/ShareBtn";
import { useParams } from "next/navigation";
import React from "react";

function Academydaynamic() {
  const { id } = useParams();

  // const data = steps.find((item) => item.id.toString() == id);

  // console.log(data);

  return (
    <div className="flex justify-center">
      {/* مقدار سمت چپ (شبکه‌های اجتماعی) */}
      <div className="fixed top-[4rem] left-0 w-[100px] h-screen bg-gray-100 p-4">
        Socials
      </div>

      {/* بخش محتوا (بلاگ) */}
      <div className="w-full flex flex-col max-w-[800px] px-8 mt-[4rem]">
        <div className="h-[1500px]"></div> {/* برای تست ارتفاع */}
      </div>

      {/* مقدار سمت راست (Table of Content - TOC) */}
      <div className="fixed top-[4rem] right-0 w-[200px] h-screen  p-4">
        <ShareBtn />
      </div>
    </div>
  );
}

export default Academydaynamic;
