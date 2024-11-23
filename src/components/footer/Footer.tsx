import { Quantico } from "next/font/google";
import React from "react";

const doto = Quantico({
  weight: ["400", "700"],
  style: ["normal"],
});

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="bg-[#0B0B0B] h-[220px] w-full border-t-[0.1px] border-[#bee8c0] px-4 lg:px-10 pt-7">
        <h1 className={`${doto.className} text-xl text-[#25D366] font-bold`}>
          JudgeArena
        </h1>
        <p className="text-white text-sm mt-2">
          A competitive programming platform by Team BAIUST.
        </p>

        <p className="text-white text-sm mt-10">&copy; {year}</p>
      </div>
    </>
  );
};

export default Footer;
