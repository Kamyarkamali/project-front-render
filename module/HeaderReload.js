import { dataOffers } from "@/data/localData";
import { IoLockClosedOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { IoStar } from "react-icons/io5";

function HeaderReload() {
  return (
    <div className="flex flex-col items-center max-w-[1400px] justify-center mt-12 px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0B3C3A] font-bold">
          Reload Offers Archive
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-[#0B3C3A] font-bold">
          Sat, 08 Mar
        </p>
      </div>

      <div className="flex flex-col gap-6 items-center w-full max-w-[1100px]">
        {dataOffers.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-full gap-2 p-4 shadow-sm hover:shadow-md cursor-pointer duration-300 rounded-3xl"
          >
            <div className="flex items-center gap-3 bg-[#29E0CB] rounded-r-lg rounded-b-none w-fit p-2 rounded-l-3xl">
              <IoLockClosedOutline color="#0B3C3A" />
              <div className="text-[#0B3C3A]">{item.title}</div>
              <p className="font-bold text-[#0B3C3A]">{item.price}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <p className="text-lg md:text-xl font-bold ml-3 text-[#0B3C3A]">
                {item.desc1}
              </p>
              <div className="flex items-center mt-2 md:mt-0">
                {[...Array(5)].map((_, index) => (
                  <IoStar key={index} size={19} />
                ))}
              </div>
            </div>
            <p className="text-[#0B3C3A] w-full max-w-[700px] ml-3">
              {item.desc2}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 ml-3">
                <CiClock2 className="text-[#AEA9A6]" />
                <p className="text-[#AEA9A6]">{item.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[#AEA9A6]">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderReload;
