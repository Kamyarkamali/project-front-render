import React from "react";
import { FaTwitter, FaFacebookF, FaReddit } from "react-icons/fa";
import { MdWhatsapp, MdOutlineMail } from "react-icons/md";

function ShareBtn() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h3>Share me!</h3>
      <div className="bg-[#00B6F1] cursor-pointer flex justify-center items-center w-[50px] h-[50px] rounded-[100%]">
        <FaTwitter size={25} color="white" />
      </div>
      <div className="bg-[#3B5998] cursor-pointer flex justify-center items-center w-[50px] h-[50px] rounded-[100%]">
        <FaFacebookF size={25} color="white" />
      </div>
      <div className="bg-[#25D366] cursor-pointer flex justify-center items-center w-[50px] h-[50px] rounded-[100%]">
        <MdWhatsapp size={25} color="white" />
      </div>
      <div className="bg-[#136763] cursor-pointer flex justify-center items-center w-[50px] h-[50px] rounded-[100%]">
        <MdOutlineMail size={30} color="white" />
      </div>
      <div className="bg-[#FF5700] flex justify-center items-center w-[50px] h-[50px] rounded-[100%]">
        <FaReddit size={25} color="white" />
      </div>
    </div>
  );
}

export default ShareBtn;
