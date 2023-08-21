"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaTelegramPlane, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {

  // const [activeSection, setActiveSection] = useState("hero");

  // const handleScroll = () => {
  //   const sections = ["hero", "about", "skills", "projects", "contact"];

  //   for (const sectionId of sections) {
  //     const section = document.getElementById(sectionId);
  //     if (section) {
  //       const rect = section.getBoundingClientRect();
  //       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
  //         setActiveSection(sectionId);
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header className="flex py-2 px-3 bg-[#38306A] w-full overflow-hidden sticky z-30 top-0">
      <div className="w-full flex justify-between max-w-[1300px] mx-auto">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex items-center"
        >
          <a href="/#">
            <h1 className="font-bold md:text-3xl text-2xl text-white cursor-pointer">
              &lt;HR<span className="text-teal-300">Wells/&gt;</span>
            </h1>
          </a>
          <div className="border-orange-500 border-x h-10 w-2 grow justify-center min-w-md ml-5 hidden md:flex" />
          <div className=" md:flex w-fit sm:ml-4 gap-3 hidden">
            <Link href="https://t.me/h_r_wells" className="self-center">
              <FaLinkedin className="h-8 w-8 text-teal-300" />
            </Link>
            <Link href="https://t.me/h_r_wells" className="self-center">
              <FaGithub className="h-8 w-8 text-teal-300" />
            </Link>
            <Link href="https://t.me/h_r_wells" className="self-center">
              <FaTelegramPlane className="h-8 w-8 text-teal-300" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="items-center gap-4 mx-4 text-white text-lg sm:text-xl font-semibold flex md:hidden"
        >
          <Link href="https://t.me/h_r_wells" className="self-center">
            <FaLinkedin className="h-6 w-6 text-teal-300" />
          </Link>
          <Link href="https://t.me/h_r_wells" className="self-center">
            <FaGithub className="h-6 w-6 text-teal-300" />
          </Link>
          <Link href="https://t.me/h_r_wells" className="self-center">
            <FaTelegramPlane className="h-6 w-6 text-teal-300" />
          </Link>
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="md:flex items-center gap-4 mx-4 text-white text-lg font-medium hidden "
        >
          <a href="#about">
            <h2 className="hover:text-teal-300 cursor-pointer">Who am I?</h2>
          </a>
          <a href="#skills">
            <h2 className="hover:text-teal-300 cursor-pointer">Skills</h2>
          </a>
          <a href="#projects">
            <h2 className="hover:text-teal-300 cursor-pointer">Projects</h2>
          </a>
          <a href="#contact">
            <h2 className="hover:text-teal-300 cursor-pointer">Contact</h2>
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
