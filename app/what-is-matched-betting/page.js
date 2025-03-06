import Whatis from "@/components/Whatis";
import ShareBtn from "@/module/ShareBtn";

const sections = [
  "How it works",
  "Building up profit",
  "FAQ",
  "Back & lay bets",
  "What you need to get started",
  "Learn matched betting",
];

export default function BlogPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-center">
      {/* سایدبار سمت چپ (فقط در دسکتاپ نمایش داده می‌شود) */}
      <div className="sticky lg:block hidden top-[4rem] left-0 w-[200px] h-screen p-4">
        <div className="p-6 rounded-xl w-64">
          <h2 className="text-sm text-[#0F514E] mb-4">CONTENTS</h2>
          <ul className="relative border-l-2 border-cyan-200 pl-1">
            {sections.map((section, index) => (
              <li key={index} className="mb-3 flex items-start gap-2">
                <span className="w-3 h-3 bg-cyan-200 rounded-full inline-block mt-1.5"></span>
                <span className="text-gray-700 text-[12px]">{section}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* بخش اصلی محتوا */}
      <div className="w-full lg:ml-[200px] lg:mr-[100px] flex flex-col items-center max-w-[1100px] mx-auto px-4 lg:px-8 mt-[4rem]">
        <div className="w-full">
          <Whatis />
        </div>
      </div>

      {/* سایدبار سمت راست (فقط در دسکتاپ نمایش داده می‌شود) */}
      <div className="sticky lg:block hidden top-[4rem] right-0 w-[200px] h-screen p-4">
        <ShareBtn />
      </div>
    </div>
  );
}
