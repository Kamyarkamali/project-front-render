import React from "react";

function SearchBtn() {
  return (
    <form className="flex items-center gap-1">
      <input
        placeholder="Search..."
        className="border-[1px] border-[#29E0CB] placeholder:text-[13px] rounded-lg p-1"
      />
      <button className="bg-[#29E0CB] text-[11px] rounded-lg p-2  font-bold">
        Search
      </button>
    </form>
  );
}

export default SearchBtn;
