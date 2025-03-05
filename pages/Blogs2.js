import BlogsContent2 from "@/module/BlogsContent2";
import ShareBtn from "@/module/ShareBtn";
import React from "react";

function Blogs2() {
  return (
    <div className="flex justify-center">
      <div className="fixed top-[4rem] left-0 w-[100px] h-screen bg-gray-100 p-4">
        Socials
      </div>

      <div className="w-full flex flex-col max-w-[800px] px-8 mt-[4rem]">
        <div className="h-[1500px]">
          <BlogsContent2 />
        </div>
      </div>

      <div className="fixed top-[4rem] right-0 w-[200px] h-screen  p-4">
        <ShareBtn />
      </div>
    </div>
  );
}

export default Blogs2;
