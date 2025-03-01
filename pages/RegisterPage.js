"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { IoAlertCircleOutline } from "react-icons/io5";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen ">
      {/* Hidden on mobile */}
      <div className="hidden xl:block flex-1 flex justify-center">
        <img
          className="max-w-full h-auto"
          src="/images/imageMainContent/login.png"
          alt="login"
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center w-full md:w-1/2 items-center flex-1"
      >
        <div className="flex flex-col items-center gap-5 w-full max-w-[400px]">
          <Link href={"/"}>
            <img
              className="w-[200px] md:w-[260px]"
              src="/images/imageHome/mbb-logo.svg"
              alt="logo"
            />
          </Link>
          <h1 className="text-[24px] md:text-[28px] font-bold text-[#0B3C3A]">
            Register
          </h1>
          <div className="flex items-center gap-1 text-center">
            <p className="text-[#64514E] text-sm md:text-base">
              Already have an account?
            </p>
            <Link
              className="text-[#29E0CB] font-bold hover:text-[#005A51] duration-300 text-sm md:text-base"
              href="/login"
            >
              Login
            </Link>
          </div>

          <div className="bg-[#E8F6F8] flex flex-row-reverse items-center justify-center gap-2 w-[400px] h-[100px] rounded-lg p-4">
            <p className="text-[12px] text-[#52869D]">
              If you are using a VPN and have problems registering, please try
              again with your VPN disabled
            </p>
            <IoAlertCircleOutline size={30} color="#52869D" />
          </div>

          <input
            type="text"
            placeholder="Display name *"
            className="w-full p-3 rounded-lg outline-none border-[1px] border-[#533A38]"
            {...register("DisplayName", {
              required: "DisplayName is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^[a-zA-Z0-9_]+$/,
                message: "Enter a valid DisplayNamee",
              },
            })}
          />
          {errors.emailOrUsername && (
            <p className="text-red-500 text-sm">
              {errors.emailOrUsername.message}
            </p>
          )}

          <input
            type="email"
            placeholder="Email *"
            className="w-full p-3 rounded-lg outline-none border-[1px] border-[#533A38]"
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 6,
                message: "Email must be at least 6 characters",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="password *"
            className="w-full p-3 rounded-lg outline-none border-[1px] border-[#533A38]"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <div className="flex items-center gap-2 w-full">
            <input type="checkbox" {...register("rememberMe")} />
            <label className="text-[#64514E] text-sm md:text-base">
              Subscribe for offer alerts, regular tips and more!
            </label>
          </div>

          <button className="bg-[#29E0CB] w-full p-3 rounded-lg cursor-pointer hover:bg-[#02e5AA] duration-300">
            Register
          </button>

          <div className="flex  flex-col items-center gap-1">
            <p>Your information is private and confidential.</p>
            <Link
              className="text-[#29E0CB] text-[14px] "
              href={"/privacy-policy"}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
