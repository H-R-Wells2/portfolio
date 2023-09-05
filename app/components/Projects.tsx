"use client";

import { motion } from "framer-motion";
import ProjectCard from "./cards/ProjectCard";
import { projects } from "../constants";
import Link from "next/link";

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
      <div className="flex flex-col mt-28">
        <div className="flex w-full justify-center">
          <h4 className="text-md p-3 rounded-lg text-center max-w-md flex justify-center flex-col top-32 text-quaternary z-10">
            “Talk is cheap. Show me the code”? I got you. Here are some of my
            projects you shouldn &apos;t miss
          </h4>
        </div>
        <div className="flex flex-wrap gap-6 xl:justify-between justify-center mt-16 mx-8 mb-7">
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
        <p className="w-full mx-auto flex justify-center text-center">Explore more of my projects on my<Link href={'https://github.com/h-r-wells2'} className="mx-1 text-teal-300 hover:text-teal-400 hover:underline-offset-2 hover:underline ">GitHub profile</Link></p>
      </div>
    </motion.div>
  );
};

export default Projects;
