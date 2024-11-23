import Image from "next/image";
import React from "react";
import login from "@/assets/image/apurv-das-ciN8mnrlvFY-unsplash.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="w-full bg-[#0B0B0B] h-screen flex">
      <div className="hidden lg:flex w-1/2 h-fullw-1/2 h-full">
        <Image alt="login-image" className="h-full w-full" src={login} />
      </div>
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
        <div className="w-1/2">
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-white text-center mb-5">
              Get Started
            </h1>
            <p className="text-white text-center text-sm ">
              Please enter your details
            </p>
          </div>

          <Input
            placeholder="Name"
            className="text-white rounded-none border-0 border-b py-5 mb-7 focus:border-[#25D366]"
          ></Input>
          <Input
            placeholder="Email"
            className="text-white rounded-none border-0 border-b py-5 mb-7 focus:border-[#25D366]"
          ></Input>
          <Input
            placeholder="Password"
            className="text-white rounded-none border-0 border-b py-5 mb-7 focus:border-[#25D366]"
          ></Input>
          <Button className="bg-[#25D366] border border-[#0B0B0B] font-medium text-black px-5 py-2 rounded-md hover:bg-[#0B0B0B] hover:text-[#25D366] hover:border-[#25D366] transition-colors duration-500 ease-in-out w-full">
            Login
          </Button>

          <div className="flex justify-center items-center mt-5 gap-1 text-sm">
            <p className="text-zinc-500">Already have an account?</p>
            <Link href="/login" className="text-[#25D366] hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
