import { useState } from "react";
import { dataMenu } from "@/data/localData";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function HamburgerMenu() {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (id) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  return (
    <div className="w-[300px] bg-white h-screen p-6 overflow-y-auto">
      <div>
        <Link
          className="text-[#29E0CB] hover:text-[#8daeaa] duration-300 text-[14px] font-bold"
          href="/login"
        >
          LOG IN
        </Link>
      </div>

      <ul className="mt-6 flex flex-col-reverse">
        {dataMenu.map((item) => (
          <li key={item.id} className="mb-4">
            {item.title ? (
              <div
                className="flex items-center justify-between cursor-pointer p-2 duration-300 hover:bg-gray-100 rounded-md"
                onClick={() => toggleSubMenu(item.id)}
              >
                <span
                  className={`${
                    item.title === "LOGIN" && "hidden"
                  } text-[#0B3C3A] font-bold text-[14px]`}
                >
                  <Link
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
                      className={`${item.title === "GET STARTED" && "hidden"}`}
                    />
                  ) : (
                    <IoIosArrowDown
                      className={`${item.title === "GET STARTED" && "hidden"}`}
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
                    <Link
                      href={subItem.href || "#"}
                      className="flex items-center font-bold gap-2 text-[13px] duration-300 text-gray-700 hover:text-[#29E0CB]"
                    >
                      {subItem.item1dsc}
                    </Link>
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
    </div>
  );
}

export default HamburgerMenu;
