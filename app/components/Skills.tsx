"use client";

import React from "react";
import { motion } from "framer-motion";
import Skill from "./cards/Skill";
import { skills } from "../constants";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-x-hidden"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-teal-300 z-10">
        Skills
      </h3>

      <div className="flex flex-col sm:mt-8 mt-28">
        <div className="flex w-full justify-center">
          <h4 className="text-md p-3 rounded-lg text-center flex justify-center max-w-md flex-col top-32 text-quaternary z-10">
            Skills are the foundation, but actions speak louder. Let &apos;s dive into
            what I bring to the table. Here &apos;s a glimpse of my skill set.
          </h4>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 mb-7 max-w-4xl mt-16">
          {skills.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              imgUrl={skill.imgUrl}
              proficiency={skill.proficiency}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
