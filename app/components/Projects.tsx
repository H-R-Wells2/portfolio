"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-1 justify-evenly mx-auto items-center overflow-x-hidden"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-teal-300 z-10">
        Projects
      </h3>
      <div className="flex flex-col mt-32">
        <div className="flex w-full justify-center">

        <h4 className="text-md p-3 rounded-lg text-center flex justify-center flex-col top-32 text-quaternary z-10">
          “Talk is cheap. Show me the code”? I got you.
          <span className="flex w-full text-center">
            Here are some of my projects you shouldn't miss
          </span>
        </h4>
        </div>
        <div className="flex flex-wrap gap-6 xl:justify-between justify-center mt-20 mx-8 mb-7">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              desc={project.desc}
              imgUrl={project.imgUrl}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
