"use client";

import { motion } from "framer-motion";

type Props = {};

const BackGroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center z-0"
    >
      <div className="absolute border border-orange-500/40 rounded-full h-[200px] w-[200px] animate-ping mt-56" />
      <div className="absolute border border-orange-300/20 rounded-full h-[300px] w-[300px]  mt-56" />
      <div className="absolute border border-orange-300/20 rounded-full h-[500px] w-[500px] mt-56" />
      <div className="rounded-full border border-teal-300/70 opacity-20 h-[650px] w-[650px]  absolute animate-pulse mt-56" />
      <div className="rounded-full border border-orange-300/20 h-[800px] w-[800px] absolute mt-56" />
    </motion.div>
  );
};

export default BackGroundCircles;
