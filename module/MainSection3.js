import { FaArrowRight } from "react-icons/fa6";

function MainSection3() {
  return (
    <div className="flex flex-col gap-6 items-center mt-[9rem] px-4">
      {/* عنوان اصلی */}
      <div>
        <p className="text-[28px] text-[#0B3C3A] text-center lg:text-left">
          <span className="font-bold">The simplest way to learn.</span> Bar
          none.
        </p>
      </div>

      {/* تصویر در موبایل زیر عنوان نمایش داده می‌شود */}
      <div className="w-full flex justify-center lg:hidden">
        <img
          className="w-[90%] md:w-[70%] max-w-[800px]"
          src="/images/imageMainContent/imageMainContent.svg"
          alt="maincontent"
        />
      </div>

      {/* بخش متن و تصویر در دسکتاپ */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
        {/* متن */}
        <div className="flex gap-4 flex-col text-center lg:text-left">
          <p className="font-bold text-[23px] text-[#0B3C3A]">
            The Matched Betting Academy
          </p>
          <p className="lg:w-[440px] leading-[32px] text-[#AD918F] text-[16px]">
            Constructed by experienced matched bettors, every type of offer is
            broken down and easy to follow. Offers and strategies are logically
            ordered, so you follow a clearly defined path from total novice to
            advanced matched bettor.
          </p>
          <button className="flex w-[190px] mx-auto lg:mx-0 hover:gap-4 duration-300 font-medium cursor-pointer items-center gap-2 border-[1px] border-[#0B3C3A] rounded-lg p-3 text-[#0B3C3A]">
            View the Academy
            <FaArrowRight />
          </button>
        </div>

        {/* تصویر در دسکتاپ */}
        <div className="hidden lg:block">
          <img
            className="w-[800px]"
            src="/images/imageMainContent/imageMainContent.svg"
            alt="maincontent"
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection3;
