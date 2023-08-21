"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import Image from "next/image";
import { motion } from "framer-motion";

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

      <div className="relative h-44 w-44 object-cover mx-auto">
        <Image
          src={"/profile.png"}
          alt="profile image"
          fill
          className="-mt-2 rounded-full object-cover"
        />
      </div>

      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        animate={{
          y: 0,
          scale: 1,
          opacity: 1,
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
            <span className="font-semibold">
              {" "}
              I do{" "}
              <span className="text-teal-300 font-mono tracking-[5px]">
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
      <div className="absolute -bottom-4 animate-bounce w-full hidden md:flex justify-center">
        <a
          href="#about"
          className="group hidden transform md:flex items-center flex-col"
        >
          <span className="text-orange-400 group-hover:text-teal-300 dark:group-hover:text-teal-300">
            Scroll
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="dark:fill-bglight fill-orange-400 group-hover:fill-teal-300 dark:group-hover:fill-teal-300"
          >
            <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
            <path d="M11 6h2v6h-2z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="dark:fill-bglight fill-orange-400 group-hover:fill-teal-300 dark:group-hover:fill-teal-300"
          >
            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Hero;
