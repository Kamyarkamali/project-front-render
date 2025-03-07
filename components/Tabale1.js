import React from "react";

function Tabale1({ text, bg, span1, span2, span3, span4, span5, span6 }) {
  return (
    <div className="w-full lg:w-[700px]">
      <div
        className={`w-full h-auto p-4 flex flex-col gap-3 rounded-lg shadow-sm bg-[${bg}]`}
      >
        <label className="text-sm lg:text-base font-bold text-[#0F514E]">
          {text}
        </label>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 rounded-full" />
          <p className="text-sm lg:text-base text-[#0F514E]">
            <span className="font-bold">{span1}</span>
            {span2}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 rounded-full" />
          <p className="text-sm lg:text-base text-[#0F514E]">
            <span className="font-bold">{span3}</span>
            {span4}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 rounded-full" />
          <p className="text-sm lg:text-base text-[#0F514E]">
            <span className="font-bold">{span5}</span>
            {span6}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabale1;
