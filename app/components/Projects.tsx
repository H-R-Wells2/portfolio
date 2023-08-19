"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "StitchTalk",
    imgUrl: "/stitchtalk.png",
    desc: "StitchTalk is a dynamic web app crafted using Next.js and TypeScript, designed for engaging conversations, effortless thread creation, and community growth. By leveraging Clerk Auth, MongoDB, Shadcn, and Tailwind CSS, users can seamlessly connect, initiate threads, join discussions, and create their own unique community hubs.",
    tags: [
      "NextJS",
      "TypeScript",
      "MongoDB",
      "Clerk-Auth",
      "TailwindCSS",
      "Shadcn",
    ],
    liveUrl: "https://stitch-talk.vercel.app/",
    codeUrl: "https://github.com/H-R-Wells2/StitchTalk",
  },
  {
    title: "CollegeQuora",
    imgUrl: "/CollegeQuora.png",
    desc: "A MERN stack web app with Tailwind CSS, enabling college students to connect, ask questions, and share posts. Implemented secure authentication using bcrypt.js and JWT tokens. Integrated Google Drive API with a service account to enable imgUrl storage and retrieval. Utilized MongoDB for storing user data such as usernames and passwords, as well as posts. Employed Mongoose for creating schemas and models in MongoDB. Frontend deployed on Vercel, backend on Render.com",
    tags: [
      "React",
      "ExpressJS",
      "MongoDB",
      "NodeJS",
      "TailwindCSS",
      "ContextAPI",
    ],
    liveUrl: "https://college-quora.vercel.app/",
    codeUrl: "https://github.com/H-R-Wells2/frontend-collegeQuora",
  },
  {
    title: "The Prompt Bazaar",
    imgUrl: "/PromptBazaar.png",
    desc: "The Prompt Bazaar is a dynamic web application built with Next.js 13, a modern React framework known for its server-side rendering and static site generation capabilities. Using MongoDB, Express JS, React JS, and Node JS, users can easily create, view, update, and delete prompts, fostering a collaborative space for sharing and interacting. The platform includes secure Google authentication for user login and exploration of prompts contributed by various users. To enhance the user experience, Tailwind CSS were utilized to create visually appealing and responsive interfaces",
    tags: ["NextJS", "ExpressJS", "TypeScript", "MongoDB"],
    liveUrl: "https://the-prompt-bazaar.vercel.app/",
    codeUrl: "https://github.com/H-R-Wells2/the-prompt-bazaar",
  },
  {
    title: "CarXplore",
    imgUrl: "/carxplore.png",
    desc: "CarXplore is a demo website that simplifies car booking and rental. Built with Next.js, TypeScript, and styled with Tailwind CSS, it offers easy car exploration, booking, and filtering by fuel type and year. Leveraging RapidAPI's Cars API ensures up-to-date car details, providing a seamless experience for users interested in car rental and booking.",
    tags: ["NextJS", "TypeScript", "React", "TailwindCSS", "Rapid-API"],
    liveUrl: "https://carxplore.vercel.app/",
    codeUrl: "https://github.com/H-R-Wells2/carxplore",
  },
];

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
      {/* <h4 className="absolute text-md shadow-md p-3 rounded-lg shadow-teal-300 text-center flex justify-center flex-col top-32 text-orange-400 z-10">
        “Talk is cheap. Show me the code”?  I got you.
        <span className="flex"> Here are some of my projects you shouldn't misss</span>
      </h4> */}
      <div className="flex flex-wrap gap-6 xl:justify-between justify-center mt-32 mx-8">
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
    </motion.div>
  );
};

export default Projects;
