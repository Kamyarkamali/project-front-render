import React from "react";

function Academydaynamic() {
  return (
    <div className="flex justify-center">
      {/* مقدار سمت چپ (شبکه‌های اجتماعی) */}
      <div className="fixed top-[4rem] left-0 w-[100px] h-screen bg-gray-100 p-4">
        Socials
      </div>

      {/* بخش محتوا (بلاگ) */}
      <div className="w-full max-w-[800px] px-8 mt-[4rem]">
        <h1 className="text-2xl font-bold">عنوان مقاله</h1>
        <p className="mt-4">
          اینجا محتوای مقاله قرار می‌گیرد. می‌توان متن زیادی اضافه کرد تا اسکرول
          تست شود.
        </p>
        <div className="h-[1500px]"></div> {/* برای تست ارتفاع */}
      </div>

      {/* مقدار سمت راست (Table of Content - TOC) */}
      <div className="fixed top-[4rem] right-0 w-[200px] h-screen bg-gray-100 p-4">
        فهرست مقاله
      </div>
    </div>
  );
}

export default Academydaynamic;
