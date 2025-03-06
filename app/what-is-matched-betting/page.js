import Whatis from "@/components/Whatis";
import ShareBtn from "@/module/ShareBtn";
import ArticlesPage from "@/pages/ArticlesPage";

export default function BlogPage() {
  return (
    <div className="flex justify-center">
      <div className="sticky lg:block hidden top-[4rem] left-0 w-[100px] h-screen p-4">
        ss
      </div>

      <div className="w-full flex flex-col items-center max-w-[1100px] mx-auto px-8 mt-[4rem]">
        <div className="h-fit">
          <Whatis />
        </div>
      </div>

      <div className="sticky lg:block hidden top-[4rem] right-0 w-[200px] h-screen  p-4">
        <ShareBtn />
      </div>
    </div>
  );
}
