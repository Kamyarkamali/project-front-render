import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import Email from "./Email";

function BlogsContent2({ filteredBlogs }) {
  return (
    <>
      <div className="flex items-center gap-2 justify-start mb-[3rem] p-4">
        <div className="flex items-center gap-2">
          <Link href={"/"} className="flex items-center gap-2">
            <GoArrowLeft className="hover:text-[#00CFB7] duration-300 cursor-pointer" />
            <p className="text-[#0F514E] text-[15px] hover:text-[#00CFB7] duration-300 cursor-pointer">
              HOME
            </p>
          </Link>
          <p className="text-[#0F514E] text-[15px] hover:text-[#00CFB7] duration-300 cursor-pointer">
            /
          </p>
        </div>
        <p className="text-[#0F514E] text-[15px] hover:text-[#00CFB7] duration-300 cursor-pointer">
          All Guides
        </p>
      </div>
      <div className="flex justify-center">
        {filteredBlogs.map((item) => (
          <div
            className="flex flex-col items-center w-full max-w-[800px] mx-auto p-4"
            key={item.id}
          >
            <img
              className="w-full max-w-[1200px] h-auto"
              src={item.images}
              alt="blogs"
            />
            <h1 className="text-[2rem] md:text-[38px] font-bold text-[#0B3C3A] mt-4">
              {item.title}
            </h1>
            <p className="text-[#81889E] mt-[2rem]">{item.date}</p>

            <div className="flex flex-col mt-9 w-full">
              <p className="w-full max-w-[1000px] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                {item.desc1}
              </p>
              <p className="w-full max-w-[1000px] mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                {item.desc2}
              </p>
              <p className="w-full max-w-[1000px] mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                {item.desc3}
              </p>
              <div className="flex justify-center">
                <img
                  className="w-full max-w-[800px] h-auto rounded-md mt-[1rem]"
                  src={item.images2}
                  alt="blogs"
                />
              </div>
              <div className="w-full max-w-[800px] mx-auto">
                <p className="text-[2rem] md:text-[38px] font-bold mt-[2rem] text-[#0B3C3A]">
                  {item.titlescroll1}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll1start}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll2}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll3end}
                </p>
              </div>

              <div className="w-full max-w-[800px] mx-auto">
                <p className="text-[2rem] md:text-[38px] font-bold mt-[2rem] text-[#0B3C3A]">
                  {item.titlescroll2}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll4start}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll5}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll6}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll7end}
                </p>
              </div>

              <div className="w-full max-w-[800px] mx-auto">
                <p className="text-[2rem] md:text-[38px] font-bold mt-[2rem] text-[#0B3C3A]">
                  {item.titlescroll3}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll8start}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll9end}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll6}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll7end}
                </p>
              </div>

              <div className="w-full max-w-[800px] mx-auto">
                <p className="text-[2rem] md:text-[38px] font-bold mt-[2rem] text-[#0B3C3A]">
                  {item.titlescroll4}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll10}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll11end}
                </p>
              </div>

              <div className="w-full max-w-[800px] mx-auto">
                <div className="flex justify-center">
                  <img
                    className="w-full max-w-[800px] h-auto rounded-md mt-[1rem]"
                    src={item.imagesscroll1}
                    alt="blogs"
                  />
                </div>
                <p className="text-[2rem] md:text-[38px] font-bold mt-[2rem] text-[#0B3C3A]">
                  {item.titlescroll5}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll12start}
                </p>
                <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
                  {item.descscoroll13}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="flex justify-center mt-[4rem] p-4">
        <Email />
      </section>
    </>
  );
}

export default BlogsContent2;
