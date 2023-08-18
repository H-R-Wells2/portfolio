"use client";

import { Roboto_Slab } from "next/font/google";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import Image from "next/image";

const RoboSlab = Roboto_Slab({ subsets: ["latin"] });

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Next JS Developer", "MERN Stack Developer", "React Developer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col text-white w-full h-screen space-y-8 items-center justify-center text-center overflow-hidden">
      <BackGroundCircles />
      {/* <div className="relative bg-red-400 rounded-full border-red-600 border w-40 h-40" /> */}

      <div className="relative h-44 w-44 object-cover mx-auto">
        <Image
          src={'/profile.png'}
          alt="profile image"
          fill
          className=" rounded-full object-cover"
        />
      </div>
      {/* <h1>
        <span> I am {text}</span>
        <Cursor cursorColor="#FDBA74" />
      </h1> */}
      <div>
        <span className="text-xl">Hello, My name is</span>
        <h1
          className={`text-[50px] sm:text-[100px] text-teal-300 font-semibold ${RoboSlab.className}`}
        >
          Shubham Kadam
        </h1>
      </div>
      <div className="mt-10 text-orange-300 text-xl sm:text-3xl font-semibold">
        <h1>
          <span> I am {text}</span>
          <Cursor cursorColor="#FDBA74" />
        </h1>
        <h2 className="text-white font-mono ">
          I code therefore I am...occasionally functional.
        </h2>
      </div>
    </div>
  );
}

export default Hero;
