"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

function LoginPage() {
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
            Sign in
          </h1>
          <div className="flex items-center gap-1 text-center">
            <p className="text-[#64514E] text-sm md:text-base">
              Don’t have an account?
            </p>
            <Link
              className="text-[#29E0CB] font-bold hover:text-[#005A51] duration-300 text-sm md:text-base"
              href="/register"
            >
              Register for free.
            </Link>
          </div>

          <input
            type="text"
            placeholder="Email or username *"
            className="w-full p-3 rounded-lg outline-none border-[1px] border-[#533A38]"
            {...register("emailOrUsername", {
              required: "Email or username is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^[a-zA-Z0-9_]+$/,
                message: "Enter a valid email or username",
              },
            })}
          />
          {errors.emailOrUsername && (
            <p className="text-red-500 text-sm">
              {errors.emailOrUsername.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Password *"
            className="w-full p-3 rounded-lg outline-none border-[1px] border-[#533A38]"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <div className="flex items-center gap-2 w-full">
            <input type="checkbox" {...register("rememberMe")} />
            <label className="text-[#64514E] text-sm md:text-base">
              Remember Me
            </label>
          </div>

          <button className="bg-[#29E0CB] w-full p-3 rounded-lg cursor-pointer hover:bg-[#02e5AA] duration-300">
            Login
          </button>

          <Link
            className="text-[#29E0CB] text-sm md:text-base"
            href={"/frogetpassword"}
          >
            Lost password
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
