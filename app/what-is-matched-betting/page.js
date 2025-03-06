import Whatis from "@/components/Whatis";
import ShareBtn from "@/module/ShareBtn";

const sections = [
  "How it works",
  "Building uo profit",
  "FAQ",
  "Back & lay bets",
  "What you nedd to get started",
  "Learn matched betting",
];

export default function BlogPage() {
  return (
    <div className="flex justify-center">
      <div className="sticky lg:block hidden top-[4rem] left-[-3rem] w-[100px] h-screen p-4">
        <div className="p-6  rounded-xl w-64">
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

      <div className="w-full ml-[5rem] flex flex-col items-center max-w-[1100px] mx-auto px-8 mt-[4rem] sidebar">
        <div className="h-fit">
          <Whatis />
        </div>
      </div>

      <div className="sticky lg:block hidden top-[4rem] right-0 w-[200px] h-screen p-4 sidebar">
        <ShareBtn />
      </div>
    </div>
  );
}
