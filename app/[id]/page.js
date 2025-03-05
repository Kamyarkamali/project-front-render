// app/extras/[blog]/page.js
import { dataMenu } from "@/data/localData";
import ShareBtn from "@/module/ShareBtn";
import ArticlesPage from "@/pages/ArticlesPage";

export default function BlogPage({ params }) {
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
        Socials
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
