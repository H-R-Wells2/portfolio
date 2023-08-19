"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AboutBgSvg from "./AboutBgSvg";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-x-hidden"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-teal-300 z-10">
        Who am I?
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        //   viewport={{once:true}}
        className="relative h-56 w-56 md:w-64 md:h-96 xl:h-[400px] xl:w-[400px] object-cover mx-auto md:pt-0 mt-28 md:mt-0 z-0"
      >
        <Image
          src="/profile.png"
          alt="profile image"
          fill
          className="-mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg"
        />
      </motion.div>

      <div className="px-0 space-y-10 md:px-4 md:w-1/2 md:mt-0 mt-10">
        <h1 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-orange-400 font-medium">
            Little
          </span>{" "}
          background
        </h1>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-col gap-2 text-sm"
        >
          <p>
            Hello, I'm Shubham Kadam – a skilled web developer with a robust
            foundation in the world of web development. I'm a recent graduate,
            holding a BScIT degree from Mumbai University. My journey has been
            shaped by a fervent dedication to honing my craft through
            independent projects.
          </p>
          <p>
            With an insatiable drive, I specialize in crafting impactful web
            applications and user-centric experiences. My academic journey has
            paved the way for a deep proficiency in a range of web technologies,
            including JavaScript, Next.js, React JS, Express.js, Node Js,
            Tailwind CSS, SASS, and more. I'm also well-versed in MongoDB, a
            versatile NoSQL database that allows for adaptable and scalable data
            storage.
          </p>
          <p>
            Now, I'm on the lookout for exciting opportunities to apply my
            skills and contribute to dynamic web projects. If you're seeking a
            dedicated and innovative developer, let's connect and explore
            potential collaborations. Feel free to reach out. Together, we can
            create exceptional web experiences.
          </p>
        </motion.div>
        <AboutBgSvg />
      </div>
    </motion.div>
  );
};

export default About;
