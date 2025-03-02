import Link from "next/link";
import React from "react";

function FrogetPassword() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <Link href={"/"}>
          <img
            className="w-[200px] md:w-[260px]"
            src="/images/imageHome/mbb-logo.svg"
            alt="Logo"
          />
        </Link>

        <div className="bg-[#BEE5EB] p-4 rounded-lg w-full">
          <p className="text-[#6E6D60] text-sm md:text-base text-center">
            Please enter your username or email address. You will receive an
            email message with instructions on how to reset your password.
          </p>
        </div>

        <div className="bg-white p-4 w-full rounded-lg shadow-sm">
          <label className="block text-sm md:text-base font-medium text-gray-700">
            Username or Email Address
          </label>
          <input
            type="text"
            className="w-full border border-[#CED4DA] rounded-md p-2 outline-none mt-2 mb-4 text-sm md:text-base"
          />
          <div className="flex justify-center items-center">
            <button className="bg-[#29E0CB] w-full p-3 cursor-pointer hover:bg-[#27c5b2] duration-200 rounded-lg text-white font-bold text-sm md:text-base">
              Get New Password
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm md:text-base">
          <Link
            href={"/login"}
            className="text-[#29E0CB] hover:underline duration-200"
          >
            Log in
          </Link>
          <div className="text-[#29E0CB] border-r-[2px] w-1 h-3"></div>
          <Link
            href={"/register"}
            className="text-[#29E0CB] hover:underline duration-200"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FrogetPassword;
