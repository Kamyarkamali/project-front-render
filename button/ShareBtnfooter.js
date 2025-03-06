import React from "react";
import { FaFacebookF, FaReddit, FaTwitter } from "react-icons/fa";
import { MdOutlineMail, MdWhatsapp } from "react-icons/md";

function ShareBtnfooter() {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-9">
      <a
        href="https://x.com/home"
        traget="_blank"
        className="bg-[#00B6F1] cursor-pointer rounded-lg w-[150px] md:w-[190px] rounden-lg p-2 flex justify-center"
      >
        <FaTwitter size={35} color="white" />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/"
        className="bg-[#3B5998] cursor-pointer rounded-lg w-[150px] md:w-[190px] rounden-lg p-2 flex justify-center"
      >
        <FaFacebookF size={35} color="white" />
      </a>
      <a
        target="_blank"
        href="https://web.whatsapp.com/"
        className="bg-[#25D366] rounded-lg cursor-pointer w-[150px] md:w-[190px] rounden-lg p-2 flex justify-center"
      >
        <MdWhatsapp size={35} color="white" />
      </a>
      <a
        href="mailto:0912345678"
        target="_blank"
        className="bg-[#136763] rounded-lg w-[150px] md:w-[190px] rounden-lg p-2 flex justify-center"
      >
        <MdOutlineMail size={35} color="white" />
      </a>
      <a
        href="https://www.reddit.com/"
        target="_blank"
        className="bg-[#FF5700] cursor-pointer rounded-lg w-[150px] md:w-[190px] rounden-lg p-2 flex justify-center"
      >
        <FaReddit size={35} color="white" />
      </a>
    </div>
  );
}

export default ShareBtnfooter;
