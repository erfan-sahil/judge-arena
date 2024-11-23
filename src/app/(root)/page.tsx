import heroImage from "@/assets/image/Code typing-bro.svg";
import { Chakra_Petch } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const chakraPetch = Chakra_Petch({
  weight: ["500"],
  style: ["normal"],
});

export default function Home() {
  return (
    <>
      <div className="bg-[#0B0B0B] py-10 lg:py-28 px-4 lg:px-10  flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row items-center justify-center flex-grow">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h2
              className={`${chakraPetch.className} text-[#25D366] font-semibold text-5xl`}
            >
              The Arena for Coders
            </h2>
            <p className="mt-7 font-light text-[#bee8c0]">
              Challenge yourself, solve real-world problems, and grow with a
              community of coding enthusiasts at JudgeArena.
            </p>
            <div className="bg-[#bee8c0] h-[150px] w-[85%] lg:w-[60%] rounded-lg mt-8 p-6">
              <p className="text-black text-xl font-medium">
                Enter the Coding Arena
              </p>
              <div className="flex items-center gap-4 mt-3">
                <Link
                  href="/register"
                  className="bg-[#25D366] font-medium text-black px-5 py-2 rounded-md hover:bg-[#0B0B0B] hover:text-[#25D366] transition-colors duration-500 ease-in-out"
                >
                  Register
                </Link>
                <Link
                  href="/register"
                  className="border font-medium border-[#25D366] text-black px-5 py-2 rounded-md hover:bg-[#0B0B0B] hover:text-[#25D366] hover:border-[#0B0B0B] transition-colors duration-500 ease-in-out"
                >
                  Host a Contest
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image alt="hero-image" src={heroImage} />
          </div>
        </div>
      </div>
    </>
  );
}
