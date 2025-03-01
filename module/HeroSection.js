"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import MainContent2 from "./MainContent2";
import MainSection3 from "./MainSection3";
import MainContent4 from "./MainContent4";
import MainContent5 from "./MainContent5";
import MainContent6 from "./MainContent6";
import MainContent7 from "./MainContent7";
import MainContent8 from "./MainContent8";

function HeroSection() {
  return (
    <>
      <div className="max-w-[1200px] sm:w-[80%] mx-auto flex lg:flex-row flex-col-reverse items-center justify-between px-4">
        {/* متن و دکمه‌ها */}
        <div className="flex flex-col items-center sm:items-start text-start lg:text-left w-full">
          <div className="flex flex-col items-center items-start w-full">
            <h1 className="md:text-[48px] sm:ml-10 text-[#0D3E3C] text-[28px] font-extrabold">
              Make Money Online
            </h1>
            <h3 className="md:text-[48px] sm:ml-10 text-[28px] text-[#0B3C3A]">
              with Matched Betting
            </h3>
            <p className="text-[#81888F] sm:w-[510px] sm:ml-9 text-left leading-[28px] md:text-[17px]">
              The simple way to make some extra cash from bookmaker promotions,
              no matter the outcome of your bets.
            </p>
          </div>

          {/* دکمه‌ها */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-[2rem] w-full gap-4">
            <button className="lg:w-[259px] w-[80%] border-[1px] border-[#0B3C3A] font-bold rounded-lg p-3 text-[#0B3C3A]">
              What is Matched Betting?
            </button>
            <button className="lg:w-[168px] w-[80%] flex items-center gap-2 justify-center font-bold rounded-lg bg-[#FFD938] hover:bg-[#F7C800] transition-color duration-300 hover:gap-4 cursor-pointer p-3">
              Get Started
              <FaArrowRight />
            </button>
          </div>
        </div>
        {/* تصویر */}
        <div className="lg:flex justify-center w-full md:hidden">
          <Image
            className="lg:w-[650px] w-[80%] max-w-full"
            src={"images/imageMainContent/heroimage.svg"}
            width={700}
            height={700}
            alt="heroimage"
          />
        </div>
      </div>

      {/* عکس برند ها */}
      <div className="max-w-[1200px] mx-auto mt-[2rem]">
        <div className="flex xl:flex-row flex-col items-center justify-center gap-4">
          <div className="text-[12px] flex xl:flex-col flex-row xl:gap-0 gap-4  text-[#BAB5BD]">
            <p>Matched betting has been</p>
            <p>featured in:</p>
          </div>
          <Image
            className="w-[900px] hidden md:block"
            src={"images/imageMainContent/labale.svg"}
            width={1000}
            height={1000}
            alt="brande"
          />
          <Image
            className="max-w-[400px] w-[300px] sm:block md:hidden"
            src={"images/imageMainContent/labalemobile.svg"}
            width={1000}
            height={1000}
            alt="brande"
          />
        </div>
      </div>
      <section className="max-w-[1200px] mx-auto">
        <MainContent2 />
      </section>
      <section className="max-w-[1200px] mx-auto">
        <MainSection3 />
      </section>
      <section className="max-w-[1200px] mx-auto">
        <MainContent4 />
      </section>
      <section>
        <MainContent5 />
      </section>
      <section className="max-w-[1200px] mx-auto">
        <MainContent6 />
      </section>
      <section className="max-w-[1200px] mx-auto">
        <MainContent7 />
      </section>
      <section className="max-w-[1200px] mx-auto">
        <MainContent8 />
      </section>
    </>
  );
}

export default HeroSection;
