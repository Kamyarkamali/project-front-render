// app/extras/[blog]/page.js
import { dataMenu } from "@/data/localData";
import ShareBtn from "@/module/ShareBtn";
import ArticlesPage from "@/pages/ArticlesPage";

export default function BlogPage({ params }) {
  const sections = [
    "What is OddsMonkey?",
    "Pricing",
    "0% Smarkets commission",
    "What tools do they have?",
    "Casino and bingo offers",
    "Conclusion",
  ];

  const { blog } = params;

  const blogData = dataMenu
    .find((menu) => menu.submenu1)
    ?.submenu1.flatMap((sub) => sub.blogs)
    .find((item) => item.href === blog);

  if (!blogData) {
    return <h1>Blog not found</h1>;
  }

  return (
    <div className="flex justify-center">
      <div className="sticky lg:block hidden top-[4rem] left-0 w-[100px] h-screen p-4">
        <div className="p-6  rounded-xl w-64">
          <h2 className="text-sm text-[#0F514E] mb-4">CONTENTS</h2>
          <ul className="relative border-l-2 border-cyan-200 pl-4">
            {sections.map((section, index) => (
              <li key={index} className="mb-3 flex items-start gap-2">
                <span className="w-3 h-3 bg-cyan-200 rounded-full inline-block mt-1.5"></span>
                <span className="text-gray-700 text-[12px]">{section}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col max-w-[1100px] mx-auto px-8 mt-[4rem]">
        <div className="h-fit">
          <ArticlesPage blogData={blogData} />
        </div>
      </div>

      <div className="sticky lg:block hidden top-[4rem] right-0 w-[200px] h-screen  p-4">
        <ShareBtn />
      </div>
    </div>
  );
}
