import ShareBtnfooter from "@/button/ShareBtnfooter";
import Comments from "@/module/Comments";
import SearchBtm from "@/module/SearchBtm";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

function ArticlesPage({ blogData }) {
  if (!blogData) {
    return <h1>Blog not found</h1>;
  }

  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-3 text-[#24C7B7] text-sm md:text-base">
        <Link className="flex items-center gap-2" href={"/"}>
          <FaArrowLeft />
          <p className="hover:text-[#0F514E] duration-300 cursor-pointer">
            HOME
          </p>
        </Link>
        <p className="hover:text-[#0F514E] duration-300 cursor-pointer">/</p>
        <p className="hover:text-[#0F514E] duration-300 cursor-pointer">
          All Guides
        </p>
      </div>

      {/* Image */}
      {blogData.images2 ? (
        <img
          src={blogData.images2}
          alt={blogData.title}
          className="w-full max-w-[900px] mx-auto rounded-lg mt-4"
        />
      ) : (
        <div className="w-full max-w-[900px] mx-auto rounded-lg mt-4">
          {/* Display a default image or message */}
          <p>No image available</p>
        </div>
      )}

      {/* Title & Date */}
      <div className="flex flex-col items-center mt-8 gap-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B3C3A]">
          {blogData.title || "No Title Available"}
        </h1>

        <div className="flex items-center gap-3 text-[#B6978F] text-sm md:text-base">
          <p>Updated:</p>
          <p>{blogData.date}</p>
        </div>
      </div>

      {/* Description Sections */}
      <div className="flex flex-col gap-6 text-[#0B3C3A] leading-relaxed text-base md:text-lg mt-6">
        <p>{blogData.desc1}</p>
        <p>{blogData.desc2}</p>
        <p>{blogData.desc3}</p>
      </div>

      {/* Content Sections */}
      {[
        {
          title: blogData.titlescroll1,
          descs: [
            blogData.descscoroll1start,
            blogData.descscoroll2,
            blogData.descscoroll3end,
          ],
        },
        {
          title: blogData.titlescroll2,
          descs: [
            blogData.descscoroll4start,
            blogData.descscoroll5,
            blogData.descscoroll6,
            blogData.descscoroll7end,
          ],
        },
        {
          title: blogData.titlescroll3,
          descs: [blogData.descscoroll8start, blogData.descscoroll9end],
        },
        {
          title: blogData.titlescroll4,
          descs: [
            blogData.descscoroll10,
            blogData.descscoroll11end,
            blogData.descscoroll6,
            blogData.descscoroll7end,
          ],
          img: blogData.imagesscroll1,
        },
        {
          title: blogData.titlescroll5,
          descs: [blogData.descscoroll12start, blogData.descscoroll14end],
          img: blogData.imagesscroll2,
        },
        {
          title: blogData.titlescroll6,
          descs: [blogData.descscoroll15, blogData.titlescroll6end],
        },
      ].map((section, index) => (
        <div key={index} className="mt-12 flex flex-col gap-4">
          <p className="text-2xl md:text-3xl font-bold text-[#0B3C3A]">
            {section.title}
          </p>
          {section.descs.map((desc, i) => (
            <p
              key={i}
              className="text-[#0B3C3A] leading-relaxed text-base md:text-lg"
            >
              {desc}
            </p>
          ))}
          {section.img && (
            <div className="flex justify-center mt-6">
              <img
                src={section.img}
                alt="blogs"
                className="rounded-lg w-full max-w-[700px]"
              />
            </div>
          )}
        </div>
      ))}
      <SearchBtm />
      <ShareBtnfooter />
      <Comments />
    </div>
  );
}

export default ArticlesPage;
