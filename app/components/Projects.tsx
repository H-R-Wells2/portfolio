"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Terminal Portfolio",
    type: "Frontend",
    image: "",
    desc: "My portfolio website in terminal version developed with React and TypeScript. In this project, styled-components library is used for styling and multiple themes supported.",
    tags: ["React", "TypeScript", "Styled-Components"],
    liveUrl: "https://terminal.satnaing.dev/",
    codeUrl: "https://github.com/satnaing/terminal-portfolio",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Haru Fashion",
    type: "Frontend",
    image: "",
    desc: "An ecommerce web application where users can browse various products, add to wishlist, add to cart, and make purchase. Available in English and Burmese languages.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "ContextAPI"],
    liveUrl: "https://haru-fashion.vercel.app/",
    codeUrl: "https://github.com/satnaing/haru-fashion",
    bgColor: "bg-[#A6CECE]",
  },
  {
    title: "Haru API",
    type: "Backend",
    image: "",
    desc: "A RESTful API developed for Haru fashion ecommerce project. Include CRUD operations, authentication, authorization, forgot/reset password and full-text search.",
    tags: ["ExpressJS", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "https://satnaing.github.io/haru-api/",
    codeUrl: "https://github.com/satnaing/haru-api",
    bgColor: "bg-[#C5E4E7]",
  },
  {
    title: "AstroPaper",
    type: "Frontend",
    image: "",
    desc: "A minimal, responsive and SEO-friendly blog theme for Astro. This theme is developed with Astro, TypeScript and React. This theme includes fuzzy-search, pagination etc.",
    tags: ["Astro", "TypeScript", "React", "TailwindCSS"],
    liveUrl: "https://astro-paper.pages.dev/",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
  },
];

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-x-hidden"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-teal-300 z-10">
        Projects
      </h3>
      {/* <h4 className="absolute text-md shadow-md p-3 rounded-lg shadow-teal-300 text-center flex justify-center flex-col top-32 text-orange-400 z-10">
        “Talk is cheap. Show me the code”?  I got you.
        <span className="flex"> Here are some of my projects you shouldn't misss</span>
      </h4> */}
      <div className="flex flex-wrap gap-6 xl:justify-between justify-center mt-32 mx-8">
        {projects.map((project) =>(
            <ProjectCard key={project.title} title={project.title} desc={project.desc} image={project.image}/>

        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
