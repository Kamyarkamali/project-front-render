import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import Email from "./Email";

// Reusable Section Component
const BlogSection = ({ title, desc, image, alt }) => (
  <div className="w-full max-w-[800px] mx-auto mt-[2rem]">
    <p className="text-[2rem] md:text-[38px] font-bold text-[#0B3C3A]">
      {title}
    </p>
    <p className="mt-[2rem] text-[16px] md:text-[18px] text-left leading-[30px] md:leading-[40px] text-[#0F514E]">
      {desc}
    </p>
    {image && (
      <div className="flex justify-center mt-[1rem]">
        <img
          className="w-full max-w-[800px] h-auto rounded-md"
          src={image}
          alt={alt}
        />
      </div>
    )}
  </div>
);

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
            {" "}
            /{" "}
          </p>
        </div>
        <p className="text-[#0F514E] text-[15px] hover:text-[#00CFB7] duration-300 cursor-pointer">
          All Guides
        </p>
      </div>

      <div className="flex justify-center">
        {filteredBlogs ? (
          filteredBlogs.map((item) => (
            <div
              className="flex flex-col items-center w-full max-w-[800px] mx-auto p-4"
              key={item.id}
            >
              <img
                className="w-full max-w-[1200px] h-auto"
                src={item.images}
                alt={item.title}
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

                <BlogSection
                  title={item.titlescroll1}
                  desc={item.descscoroll1start}
                  image={item.imagesscroll1}
                  alt={item.titlescroll1}
                />
                <BlogSection
                  title={item.titlescroll2}
                  desc={item.descscoroll4start}
                />
                <BlogSection
                  title={item.titlescroll3}
                  desc={item.descscoroll8start}
                />
                <BlogSection
                  title={item.titlescroll4}
                  desc={item.descscoroll10}
                />
                <BlogSection
                  title={item.titlescroll5}
                  desc={item.descscoroll12start}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No blogs available</p>
        )}
      </div>

      <section className="flex justify-center mt-[4rem] p-4">
        <Email />
      </section>
    </>
  );
}

export default BlogsContent2;
