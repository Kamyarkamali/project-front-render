import Image from "next/image";
import Link from "next/link";
import React from "react";

function TestimonialSection() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 md:gap-20 mt-10 px-4 md:px-10">
      {/* بخش تصویر و دایره‌های شبکه‌های اجتماعی */}
      <div className="relative flex-shrink-0">
        {/* تصویر پروفایل */}
        <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] relative">
          <Image
            className="rounded-full"
            width={250}
            height={250}
            src="/images/imageMainContent/home-bradley.jpg"
            alt="profile"
          />
        </div>

        {/* دایره توییتر */}
        <div className="absolute w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] flex flex-col items-center justify-center rounded-full bg-[#00ACEE] z-10 left-[-2rem] sm:left-[-4rem] md:left-[-11rem] top-[10px] md:top-[40px] shadow-lg">
          <img
            className="w-[16px] sm:w-[20px] md:w-[30px]"
            src="/images/imageMainContent/twiteer.svg"
          />
          <p className="font-bold text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white">
            27,278
          </p>
          <p className="text-white text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px]">
            Followers
          </p>
        </div>

        {/* دایره فیس‌بوک */}
        <div className="absolute w-[75px] h-[75px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] flex flex-col items-center justify-center rounded-full bg-[#4267B2] left-[-1.5rem] sm:left-[-3rem] md:left-[-8rem] top-[80px] md:top-[140px] shadow-lg">
          <img
            className="w-[14px] sm:w-[18px] md:w-[28px]"
            src="/images/imageMainContent/facebook.svg"
          />
          <p className="font-bold text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white">
            4,178
          </p>
          <p className="text-white text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px]">
            Likes
          </p>
        </div>
      </div>

      {/* بخش متن */}
      <div className="text-center md:text-left max-w-full md:max-w-[450px]">
        <p className="text-[50px] sm:text-[60px] md:text-[80px] text-[#0F514E] leading-none">
          “
        </p>
        <p className="text-[14px] sm:text-[16px] leading-[40px] text-[#0F514E] md:text-[20px] lg:w-[700px] lg:text-[24px] text-[#0B3C3A]">
          Matched betting was my first endeavour into making money online. It’s
          the perfect way to make an extra few hundred quid a month and allowed
          me to save enough to backpack around South America.
        </p>
        <p className="mt-3 text-[10px] sm:text-[12px] md:text-[14px] font-bold text-[#0F514E]">
          BRADLEY <span className="text-gray-500">– KENT</span>
        </p>
        <Link
          href="#"
          className="mt-2 text-[#0F514E] text-[12px] sm:text-[14px]"
        >
          Read Bradley’s Story →
        </Link>
      </div>
    </div>
  );
}

export default TestimonialSection;
