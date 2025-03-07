"use client";
import ShareBtnfooter from "@/button/ShareBtnfooter";
import Tabale1 from "@/components/Tabale1";
import Tabale2 from "@/components/Tabale2";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function MainMatchedsContemts({ newsData }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  if (!newsData) {
    router.back();
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // نمایش سایدبار وقتی اسکرول بیشتر از 200 پیکسل شد
      if (scrollY > 400 && scrollY < 800) {
        setShowSidebar(true);
      } else if (scrollY >= 1800) {
        setShowSidebar(false); // مخفی کردن سایدبار بعد از 800 پیکسل
      }

      // ثابت کردن سایدبار بعد از 1000 پیکسل اسکرول
      if (scrollY > 1000 && !isFixed) {
        setIsFixed(true);
      } else if (scrollY <= 1000 && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSidebar, isFixed]); // حذف `loading` از وابستگی‌ها

  return (
    <>
      <div className="mt-[3rem] flex flex-col lg:flex-row justify-between w-full px-4 lg:px-0">
        {/* محتوای اصلی */}
        <div className="flex flex-col items-start gap-3 w-full lg:w-auto">
          {/* عنوان */}
          <h1 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#0B3C3A] text-center w-full ">
            {newsData?.title || ""}
          </h1>
          {/* توضیحات کوتاه */}
          <p className="text-sm mt-[2rem] mb-[2rem] lg:text-base text-[#0F514E] text-center lg:text-left">
            {newsData?.short || ""}
          </p>
          {/* جدول ۱ */}
          {newsData.tabale1 && (
            <Tabale1
              text={newsData?.titletabale1 || ""}
              bg={"#EBEDEF"}
              span1={newsData?.titletabale2 || ""}
              span2={newsData?.titletabale3 || ""}
              span3={newsData?.titletabale4 || ""}
              span4={newsData?.titletabale5 || ""}
              span5={newsData?.titletabale6 || ""}
              span6={newsData?.titletabale7 || ""}
            />
          )}
          {/* جدول ۲ */}
          {newsData.tabale1 && (
            <Tabale2
              title={newsData.titletabale8}
              title2={newsData.titletabale9}
              title3={newsData.titletabale9}
              bgblue={"#85C3FF"}
            />
          )}

          {/* content fainl */}

          <section className="flex flex-col gap-4 mt-[3rem] px-4 lg:px-0 mx-auto max-w-[800px] w-full">
            {/* بخش اول */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#0B3C3A] text-center lg:text-left">
                {newsData.title2}
              </h3>
              <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                {newsData.desc2}
              </p>
              <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                {newsData.desc3}
              </p>
              <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                {newsData.desc4}
              </p>
              <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                {newsData.desc5}
              </p>
            </div>
            {/* Share Section */}
            <div className="flex flex-col mr-9 mt-[2rem]">
              <p className="text-sm lg:text-base text-[#484B4E] font-bold border-b-[0.2px] border-[#8f97a0] p-2">
                Share the converter
              </p>
              <ShareBtnfooter />
            </div>

            {/* بخش دوم */}
            <div className={`${newsData.title3 ? "block" : "hidden"}`}>
              <section className="flex flex-col gap-4 mt-[3rem]">
                <h3 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#0B3C3A] text-center lg:text-left">
                  {newsData.title3}
                </h3>
                <p className="text-sm w-full lg:w-[600px] leading-[38px] lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc62}
                </p>
                <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc72}
                </p>
                <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc4}
                </p>
                <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc5}
                </p>
              </section>
            </div>

            {/* بخش سوم */}
            <div className={`${newsData.title3 ? "block" : "hidden"}`}>
              <section className="flex flex-col gap-4 mt-[3rem]">
                <h3 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#0B3C3A] text-center lg:text-left">
                  {newsData.title3}
                </h3>
                <p className="text-sm w-full lg:w-[600px] leading-[38px] lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc62}
                </p>
                <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc72}
                </p>
                <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc4}
                </p>
                <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc5}
                </p>
              </section>
            </div>

            {/* بخش چهارم */}
            <div className={`${newsData.title3 ? "block" : "hidden"}`}>
              <section className="flex flex-col gap-4 mt-[3rem]">
                <h3 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#0B3C3A] text-center lg:text-left">
                  {newsData.title3}
                </h3>
                <p className="text-sm w-full lg:w-[600px] leading-[38px] lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc62}
                </p>
                <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc72}
                </p>
                <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc4}
                </p>
                <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc5}
                </p>
              </section>
            </div>

            {/* بخش پنجم */}
            <div className={`${newsData.title4 ? "block" : "hidden"}`}>
              <section className="flex flex-col gap-4 mt-[3rem]">
                <h3 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#0B3C3A] text-center lg:text-left">
                  {newsData.title4}
                </h3>
                <p className="text-sm w-full lg:w-[600px] leading-[38px] lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc84}
                </p>
                <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc5}
                </p>
              </section>
            </div>

            {/* بخش ششم */}
            <div className={`${newsData.title5 ? "block" : "hidden"}`}>
              <section className="flex flex-col gap-4 mt-[3rem]">
                <h3 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#0B3C3A] text-center lg:text-left">
                  {newsData.title5}
                </h3>
                <p className="text-sm w-full lg:w-[600px] leading-[38px] lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc85}
                </p>
                <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc5}
                </p>
              </section>
            </div>

            {/* بخش هفتم */}
            <div className={`${newsData.title6 ? "block" : "hidden"}`}>
              <section className="flex flex-col gap-4 mt-[3rem]">
                <h3 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#0B3C3A] text-center lg:text-left">
                  {newsData.title6}
                </h3>
                <p className="text-sm w-full lg:w-[600px] leading-[38px] lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc86}
                </p>
                <p className="text-sm lg:text-base text-[#0F514E] text-center lg:text-left">
                  {newsData.desc5}
                </p>
              </section>
            </div>
          </section>
        </div>

        {/* سایدبار (فقط در دسکتاپ نمایش داده می‌شود) */}
        <div className="hidden lg:block w-[300px] bg-[#EAFCFA]">
          <div
            className={`transition-opacity duration-300 ease-in-out ${
              showSidebar ? "opacity-100" : "hidden"
            } 
                ${isFixed ? "fixed top-10" : "sticky top-10"} 
                w-64 h-screen bg-white text-black p-4`}
          >
            <div className="flex items-start flex-col">
              <div>
                <img
                  className="w-[50px]"
                  src="/whatis/6.svg"
                  alt="maincontent"
                />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <p className="text-[#35514E] text-[20px]">
                  Learn matched betting
                </p>
                <p className="text-[#35514E] text-[20px] font-bold">
                  the free, easy way
                </p>
                <p>Make £600+ from bookmaker welcome offers</p>
              </div>

              <div className="flex items-center gap-2 mt-4 bg-[#0B3C3A] p-3 rounded-md">
                <Link
                  className="flex items-center gap-1 text-[14px]"
                  href={"/academy"}
                >
                  <button className="text-white">Go to The Academy</button>
                  <FaArrowRight color="white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMatchedsContemts;
