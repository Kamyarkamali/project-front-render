import React from "react";
import { FaFacebookF, FaReddit, FaTwitter } from "react-icons/fa";
import { MdOutlineMail, MdWhatsapp } from "react-icons/md";

function ShareBtnfooter() {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-9">
      <button className="bg-[#00B6F1] rounded-lg w-[150px] md:w-[190px] rounden-lg p-2 flex justify-center">
        <FaTwitter size={35} color="white" />
      </button>
      <button className="bg-[#3B5998] rounded-lg w-[150px] md:w-[190px] rounden-lg p-2 flex justify-center">
        <FaFacebookF size={35} color="white" />
      </button>
      <button className="bg-[#25D366] rounded-lg w-[150px] md:w-[190px] rounden-lg p-2 flex justify-center">
        <MdWhatsapp size={35} color="white" />
      </button>
      <button className="bg-[#136763] rounded-lg w-[150px] md:w-[190px] rounden-lg p-2 flex justify-center">
        <MdOutlineMail size={35} color="white" />
      </button>
      <button className="bg-[#FF5700] rounded-lg w-[150px] md:w-[190px] rounden-lg p-2 flex justify-center">
        <FaReddit size={35} color="white" />
      </button>
    </div>
  );
}

export default ShareBtnfooter;
