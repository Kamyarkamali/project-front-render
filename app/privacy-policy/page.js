// app/extras/[blog]/page.js
import { dataMenu } from "@/data/localData";
import PrivacyPage from "@/module/PrivacyPage";
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
    <div className="flex w-full">
      <PrivacyPage className="w-full" />

      <div className="sticky lg:block hidden top-[4rem] right-0 w-[200px] h-screen p-4">
        <ShareBtn />
      </div>
    </div>
  );
}
