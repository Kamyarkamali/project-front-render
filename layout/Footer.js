import { FaTwitter, FaFacebookF, FaReddit } from "react-icons/fa";
import { MdWhatsapp, MdOutlineMail } from "react-icons/md";
import Link from "next/link";
import ShareBtn from "@/module/ShareBtn";
import ShareBtnfooter from "@/button/ShareBtnfooter";

function Footer() {
  return (
    <div className="bg-[#0F514E] mt-[4rem] flex flex-col items-center px-4 py-8">
      {/* Social Buttons */}
      <ShareBtnfooter />

      {/* Footer Sections */}
      <div className="flex flex-col md:flex-row justify-between w-full max-w-[1200px] mt-9 gap-8 text-center md:text-left">
        {/* About & T&C */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full md:w-auto">
          <div>
            <p className="text-white font-bold">ABOUT</p>
            <div className="flex flex-col mt-3 gap-2">
              <Link
                className="text-[#628D8B] hover:text-white duration-300"
                href="/about"
              >
                Contact
              </Link>
              <Link
                className="text-[#628D8B] hover:text-white duration-300"
                href="/mustory"
              >
                My Story
              </Link>
            </div>
          </div>

          <div>
            <p className="text-white font-bold">T & C’s</p>
            <div className="flex flex-col mt-3 gap-2">
              <Link
                className="text-[#628D8B] hover:text-white duration-300"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-[#628D8B] hover:text-white duration-300"
                href="/disclaimer"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

        {/* Endorsements */}
        <div className="flex flex-col gap-4 items-center w-full md:w-auto">
          <p className="text-[13px] font-bold text-white">ENDORSEMENTS</p>
          <div className="flex gap-4">
            <img
              className="w-[70px] md:w-[90px]"
              src="/images/footerimages/football_betting_216px.webp"
              alt="endorsement"
            />
            <img
              className="w-[70px] md:w-[90px]"
              src="/images/footerimages/football_betting_216px.webp"
              alt="endorsement"
            />
          </div>
        </div>

        {/* Gamble Aware */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-white font-bold">Gamble Aware</p>
          <div className="flex flex-col items-center md:flex-row md:items-center md:gap-4">
            <div className="text-[#628D8B] text-sm">
              <p>You must be 18 years or older to place a bet in the UK.</p>
              <p>Please gamble responsibly.</p>
            </div>
            <img
              className="w-[50px] md:w-[60px]"
              src="/images/footerimages/18-plus.svg"
              alt="18+"
            />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-[1200px] mx-auto text-[#628D8B] mt-9 text-center text-sm px-4">
        <p>
          * Does not include invite-only offers or offers involved in the more
          advanced matched betting methods. Figure shown requires a full set of
          unrestricted accounts.
        </p>
        <p className="mt-3">
          Matched Betting Blog uses cookies to help improve your experience
          whilst visiting the site. Please see the Privacy Policy for further
          information on how these are used. By continuing to use the blog, you
          consent to the use of cookies.
        </p>
        <p className="mt-3">© Matched Betting Blog 2025</p>
      </div>
    </div>
  );
}

export default Footer;
