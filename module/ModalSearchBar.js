import React from "react";

function ModalSearchBar() {
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-[1000px] p-3 rounded-xl border-r-0 outline-none rounded-r-none border-[1px] border-[#533A38]"
        />
        <button className="bg-[#29E0CB] cursor-pointer w-[100px] p-4 rounded-xl text-sm font-bold rounded-l-none">
          Search
        </button>
      </div>
    </div>
  );
}

export default ModalSearchBar;
