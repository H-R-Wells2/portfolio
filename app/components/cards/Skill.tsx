import React from "react";
import { motion } from "framer-motion";

type Props = {
  name: string;
  imgUrl: string;
  proficiency: number;
};

const Skill = ({ name, imgUrl, proficiency }: Props) => {
  return (
    <motion.div
      initial={{
        rotate: -20,
        y: -10,
      }}
      whileInView={{
        rotate: 0,
        y: 0,
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="group relative flex cursor-default bg-teal-100/20 rounded-2xl"
    >
      <img
        className="rounded-2xl border border-teal-300 p-2 object-cover w-20 h-20 xl:w-28 xl:h-28 filter md:w-24 md:h-24 transition duration-300 ease-in-out"
        src={imgUrl}
        alt={name}
      />
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-teal-300/70 w-20 h-20 xl:w-28 xl:h-28 md:w-24 md:h-24  rounded-2xl z-0">
        <div className="flex items-center justify-center h-full">
          <p className="md:text-lg text-sm font-semibold text-black opacity-100">{name}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
