"use client";
import React, { useEffect, useState } from "react";

function Saidbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 200 && !showSidebar) {
        setShowSidebar(true);
      } else if (scrollY <= 200 && showSidebar) {
        setShowSidebar(false);
      }

      if (scrollY > 1000 && !isFixed) {
        setIsFixed(true);
      } else if (scrollY <= 1000 && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSidebar, isFixed]);
  return (
    <div className="w-[300px]">
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          showSidebar ? "opacity-100" : "hidden"
        } 
    ${isFixed ? "absolute top-[1000px]" : "sticky top-10"} 
    w-64 h-screen bg-gray-800 text-white p-4`}
      >
        سایدبار
      </div>
    </div>
  );
}

export default Saidbar;
