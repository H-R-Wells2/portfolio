"use client";

import { SocialIcon } from "react-social-icons";
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
          <h1 className="font-bold text-3xl text-white cursor-pointer hidden sm:block">
            HR<span className="text-teal-300">Wells</span>
          </h1>
          <div className="border-orange-500 border-x h-10 w-2 grow justify-center min-w-md ml-5 hidden sm:flex" />
          <div className=" flex w-fit sm:ml-4 gap-3">
            {/* <SocialIcon
              url="https://www.linkedin.com/in/shubham-kadam-0620b722a/"
              fgColor="#5EEAD4"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/h-r-wells2"
              fgColor="#5EEAD4"
              bgColor="transparent"
            /> */}
            {/* <SocialIcon
              url="https://t.me/h_r_wells"
              fgColor="#5EEAD4"
              bgColor="transparent"
            /> */}
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
          className="flex items-center gap-4 mx-4 text-white text-lg sm:text-xl font-semibold"
        >
          <h2 className="hover:text-teal-300 cursor-pointer">Projects</h2>
          <h2 className="hover:text-teal-300 cursor-pointer">Contact</h2>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
