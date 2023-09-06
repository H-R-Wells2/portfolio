"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegramPlane, FaHeart } from "react-icons/fa";

type Props = {};

const BottomContact = (props: Props) => {
  return (
    <div className="md:mb-6 mb-24 flex flex-col justify-center items-center gap-3 text-teal-200">
      <div className="flex justify-center items-center gap-10">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="https://t.me/h_r_wells"
          className="self-center"
        >
          <FaLinkedin className="h-8 w-8 hover:text-teal-300" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="https://t.me/h_r_wells"
          className="self-center"
        >
          <FaGithub className="h-8 w-8 hover:text-teal-300" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="https://t.me/h_r_wells"
          className="self-center"
        >
          <FaTelegramPlane className="h-8 w-8 hover:text-teal-300" />
        </motion.a>
      </div>
      <div className="flex justify-center items-center w-full">
        Coded with <FaHeart className="mx-1" /> by Shubham
      </div>
    </div>
  );
};

export default BottomContact;
