"use client"


import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";


type Props = {}

const BottomContact = (props: Props) => {
  return (
    <div className="md:mb-6 mb-24 flex justify-center items-center gap-10 text-teal-200">
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
  )
}

export default BottomContact