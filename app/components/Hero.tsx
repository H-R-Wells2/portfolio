"use client";

import { Roboto_Slab } from "next/font/google";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import Image from "next/image";
import { motion } from "framer-motion";


const RoboSlab = Roboto_Slab({ subsets: ["latin"] });

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Next JS", "MERN Stack", "React"],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="flex flex-col text-white w-full h-screen space-y-8 items-center justify-center text-center overflow-hidden">
      <BackGroundCircles />
      {/* <div className="relative bg-red-400 rounded-full border-red-600 border w-40 h-40" /> */}

      <div className="relative -mt-2 h-44 w-44 object-cover mx-auto">
        <Image
          src={"/profile.png"}
          alt="profile image"
          fill
          className=" rounded-full object-cover"
        />
      </div>
      <motion.div
      initial={{
        y: 200,
        opacity: 0,
      }}
      animate={{
        y:0,
        scale: 1,
        opacity:1
      }}
      transition={{
        duration: 1,
      }}
      className="z-20"
      >
        <h2 className="sm:text-md text-sm uppercase text-teal-300 pb-2 tracking-[15px]">
          Web Developer
        </h2>
        <div className=" text-orange-400 px-4 text-xl sm:text-3xl">
        <h1 className="pb-3">
          <span className="font-semibold"> I do <span className="text-teal-300 font-mono tracking-[5px]">
            {text}
            </span>
          <Cursor cursorColor="#FDBA74" />
          <span> Development</span>
          </span>
        </h1>
        <h2 className="text-white font-mono ">
          I code therefore I am... occasionally functional.
        </h2>
      </div>
      </motion.div>
      {/* <div>
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
      </div> */}
    </div>
  );
}

export default Hero;
