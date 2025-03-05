import { MdMailOutline } from "react-icons/md";

function SearchBtm() {
  return (
    <div className="flex flex-col mt-[3rem] shadow-sm hover:shadow-md duration-300 p-6 rounded-md">
      <div className="flex items-center gap-3">
        <MdMailOutline size={25} color="#0B3C3A" />
        <p className="text-[#0B3C3A] text-[20px] font-bold">
          Never miss a big offer
        </p>
      </div>
      <p className="text-[#16544E] mt-3 text-[16px]">
        Subscribe for offer updates, tips and tricks, big offer alerts and more.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-4 mt-[2rem]">
        <input
          type="email"
          placeholder="Email *"
          className="border-[1px] outline-none w-full focus:border-blue-400 md:w-[500px] p-3 rounded-md border-[#BDC3CA] text-[16px]"
        />
        <button className="text-[#16544E] bg-[#FFD938] p-3 font-bold rounded-md text-[14px] w-full md:w-[160px]">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default SearchBtm;
