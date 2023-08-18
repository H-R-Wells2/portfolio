"use client";

import { motion } from "framer-motion";
import { FaTelegramPlane, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
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
          <h1 className="font-bold md:text-3xl text-2xl text-white cursor-pointer">
            &lt;HR<span className="text-teal-300">Wells/&gt;</span>
          </h1>
          <div className="border-orange-500 border-x h-10 w-2 grow justify-center min-w-md ml-5 hidden md:flex" />
          <div className=" md:flex w-fit sm:ml-4 gap-3 hidden">
            <a href="https://t.me/h_r_wells" className="self-center">
              <FaLinkedin className="h-8 w-8 text-teal-300" />
            </a>
            <a href="https://t.me/h_r_wells" className="self-center">
              <FaGithub className="h-8 w-8 text-teal-300" />
            </a>
            <a href="https://t.me/h_r_wells" className="self-center">
              <FaTelegramPlane className="h-8 w-8 text-teal-300" />
            </a>
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
          <a href="https://t.me/h_r_wells" className="self-center">
            <FaLinkedin className="h-6 w-6 text-teal-300" />
          </a>
          <a href="https://t.me/h_r_wells" className="self-center">
            <FaGithub className="h-6 w-6 text-teal-300" />
          </a>
          <a href="https://t.me/h_r_wells" className="self-center">
            <FaTelegramPlane className="h-6 w-6 text-teal-300" />
          </a>
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
          className="md:flex items-center gap-4 mx-4 text-white text-lg sm:text-xl font-medium hidden "
        >
          <h2 className="hover:text-teal-300 cursor-pointer">About</h2>
          <h2 className="hover:text-teal-300 cursor-pointer">Projects</h2>
          <h2 className="hover:text-teal-300 cursor-pointer">Contact</h2>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
