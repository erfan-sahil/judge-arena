"use client";

import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Quantico } from "next/font/google";
import { usePathname } from "next/navigation";
const quantico = Quantico({
  weight: ["400", "700"],
  style: ["normal"],
});

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex md:hidden items-center justify-between px-4 py-4 bg-[#0B0B0B]">
        <h1
          className={`${quantico.className} text-2xl text-[#25D366] font-bold`}
        >
          JudgeArena
        </h1>

        <Sheet>
          <SheetTrigger>
            <AlignJustify className="text-[#25D366] hover:text-[#bee8c0] transition-colors duration-500 ease-out h-7 w-7" />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="w-full bg-[#0B0B0B] text-[#25D366] border-0"
          >
            <SheetTitle className="hidden"></SheetTitle>
            <div className="flex flex-col items-center mt-5 gap-1">
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "text-black bg-[#25D366]  hover:text-black  w-full text-center  rounded-md"
                    : "hover:bg-[#bee8c0] hover:text-black text-white bg-[#0B0B0B] w-full text-center rounded-md"
                }
              >
                <SheetClose className="w-full py-3">Home</SheetClose>
              </Link>
              <Link
                href="/contest"
                className={
                  pathname === "/contest"
                    ? "text-black bg-[#25D366]  hover:text-black  w-full text-center rounded-md"
                    : "hover:bg-[#bee8c0] hover:text-black text-white bg-[#0B0B0B] w-full text-center rounded-md"
                }
              >
                <SheetClose className="w-full py-3">Contest</SheetClose>
              </Link>
              <Link
                href="/leaderboard"
                className={
                  pathname === "/leaderboard"
                    ? "text-black bg-[#25D366]  hover:text-black  w-full text-center rounded-md"
                    : "hover:bg-[#bee8c0] hover:text-black text-white bg-[#0B0B0B] w-full text-center rounded-md"
                }
              >
                <SheetClose className="w-full py-3">Leaderboard</SheetClose>
              </Link>
              <Link
                href="/problems"
                className={
                  pathname === "/problems"
                    ? "text-black bg-[#25D366]  hover:text-black  w-full text-center rounded-md"
                    : "hover:bg-[#bee8c0] hover:text-black text-white bg-[#0B0B0B] w-full text-center rounded-md"
                }
              >
                <SheetClose className="w-full py-3">Problems</SheetClose>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* pc laptop  */}
      <div className="sticky top-0 z-50">
        <div className="hidden md:flex items-center justify-between px-10 py-4 bg-[#0B0B0B]">
          <h1 className="text-xl text-[#25D366] font-semibold">JudgeArena</h1>

          <div className="flex items-center gap-12">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-[#25D366]"
                  : "text-white hover:text-[#bee8c0] hover:transition-colors hover:duration-200"
              }
            >
              Home
            </Link>
            <Link
              href="/contest"
              className={
                pathname === "/contest"
                  ? "text-[#25D366]"
                  : "text-white hover:text-[#bee8c0] hover:transition-colors hover:duration-200"
              }
            >
              Contest
            </Link>
            <Link
              href="/leaderboard"
              className={
                pathname === "/leaderboard"
                  ? "text-[#25D366]"
                  : "text-white hover:text-[#bee8c0] hover:transition-colors hover:duration-200"
              }
            >
              Leaderboard
            </Link>
            <Link
              href="/problems"
              className={
                pathname === "/problems"
                  ? "text-[#25D366]"
                  : "text-white hover:text-[#bee8c0] hover:transition-colors hover:duration-200"
              }
            >
              Problems
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className=" border border-[#25D366] text-[#25D366] px-6 py-2 rounded-3xl hover:border-[#25D366] hover:bg-[#25D366] hover:text-black transition-colors duration-500 ease-in-out"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
