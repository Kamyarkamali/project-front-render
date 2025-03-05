import { MdOutlineMailOutline } from "react-icons/md";

function Email() {
  return (
    <div className="flex flex-col items-start shadow-sm hover:shadow-md duration-300 p-7 rounded-md w-full max-w-[600px] mx-auto">
      {/* عنوان */}
      <div className="flex items-center gap-3">
        <MdOutlineMailOutline size={27} color="#0B3C3A" />
        <p className="text-[#0B3C3A] text-lg sm:text-xl font-bold">
          Never miss a big offer
        </p>
      </div>

      {/* متن توضیحی */}
      <p className="text-[#0F514E] text-base sm:text-lg mt-4 text-left">
        Subscribe for offer updates, tips and tricks, big offer alerts and more.
      </p>

      <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 sm:gap-4 mt-6 w-full">
        <input
          placeholder="Email *"
          type="email"
          className="border-2 w-full sm:max-w-[400px] outline-none rounded-md p-3 border-[#BDC3CA] text-sm sm:text-base"
        />
        <button className="bg-[#FFD938] px-5 py-3 text-[#32564E] text-sm sm:text-base font-bold hover:text-black cursor-pointer rounded-md w-full sm:w-auto">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Email;
