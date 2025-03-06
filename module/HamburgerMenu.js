import { useState } from "react";
import { dataMenu } from "@/data/localData";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import SearchBtn from "./SearchBtn";

function HamburgerMenu() {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [showSearhc, setShowSearch] = useState(false);

  const toggleSubMenu = (id) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  return (
    <div>
      <div className="w-[300px] bg-white h-screen p-6 overflow-y-auto">
        <div>
          <Link
            className="text-[#29E0CB] hover:text-[#8daeaa] duration-300 text-[14px] font-bold"
            href="/login"
          >
            LOG IN
          </Link>
        </div>
        <div className="mt-[1rem]">
          <p className="uppercase text-[#0B3C3A] font-bold text-[12px] text-center mb-3">
            Back/lay colour theme
          </p>
          <div className="flex gap-3 items-center justify-center">
            <div className="flex items-center gap-1 border-[2px] p-1 rounded-lg border-[#29E0CB]">
              <img
                className="w-[30px]"
                src="/images/imageMainContent/hamburger1.svg"
              />
              <p className="text-[12px] font-bold">Betfair</p>
            </div>

            <div className="flex items-center gap-1 border-[2px] p-1 rounded-lg border-[#29E0CB]">
              <img
                className="w-[30px]"
                src="/images/imageMainContent/hamburger2.svg"
              />
              <p className="text-[12px] font-bold">Smarkets</p>
            </div>
          </div>
        </div>
        <ul className="mt-6 flex flex-col-reverse">
          {dataMenu.map((item) => (
            <li key={item.id} className="mb-4">
              {item.title ? (
                <div
                  className="flex items-center justify-between cursor-pointer p-1 duration-300 hover:bg-gray-100 rounded-md"
                  onClick={() => toggleSubMenu(item.id)}
                >
                  <span
                    className={`${
                      item.title === "LOGIN" && "hidden"
                    } text-[#0B3C3A] font-bold text-[14px]`}
                  >
                    <Link
                      className="text-[12px]"
                      href={(item.title === "GET STARTED" && "/academy") || "#"}
                      onClick={(e) => {
                        if (item.title === "GET STARTED") {
                          e.preventDefault();
                          setOpenSubMenu(null);
                          setTimeout(() => {
                            window.location.href = "/academy";
                          }, 100);
                        }
                      }}
                    >
                      {item.title}
                    </Link>
                  </span>
                  {item.submenu1 ||
                  item.submenu2 ||
                  item.submenu3 ||
                  item.submenu4 ||
                  item.submenu5 ? (
                    openSubMenu === item.id ? (
                      <IoIosArrowUp
                        className={`${item.title === "GET " && "hidden"}`}
                      />
                    ) : (
                      <IoIosArrowDown
                        className={`${item.title === "GET " && "hidden"}`}
                      />
                    )
                  ) : null}
                </div>
              ) : null}

              {openSubMenu === item.id && (
                <ul className="ml-4 mt-2 border-l-2 border-gray-300 pl-2">
                  {(
                    item.submenu1 ||
                    item.submenu2 ||
                    item.submenu3 ||
                    item.submenu4 ||
                    item.submenu5
                  )?.map((subItem) => (
                    <li
                      key={subItem.id}
                      className="mb-2 flex flex-row-reverse justify-end items-center gap-3"
                    >
                      <div className="flex flex-col">
                        <Link
                          href={subItem.href || "#"}
                          className="flex items-center font-bold gap-2 text-[13px] duration-300 text-gray-700 hover:text-[#29E0CB]"
                        >
                          {subItem.item1dsc}
                        </Link>
                        <p className="text-[11px] text-[#95888F] leading-[20px]">
                          {subItem.item2desc}
                        </p>
                      </div>
                      {
                        <Image
                          src={subItem.image}
                          alt={subItem.item1dsc}
                          width={30}
                          height={30}
                          className={`${subItem.image ? "block" : "hidden"}`}
                        />
                      }
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className={`${openSubMenu && "hidden"} absolute bottom-[12rem]`}>
          {!showSearhc ? (
            <IoIosSearch
              onClick={() => setShowSearch(true)}
              size={20}
              className="cursor-pointer"
            />
          ) : (
            <SearchBtn />
          )}
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
