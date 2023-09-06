import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  title: string;
  desc: string;
  imgUrl: string;
  liveUrl: string;
  codeUrl: string;
  tags: string[];
};

const ProjectCard = ({
  title,
  desc,
  imgUrl,
  liveUrl,
  codeUrl,
  tags,
}: Props) => {
  return (
    <div className="rounded-lg bg-primary/30 w-full md:w-[500px] hover:shadow-[1px_1px_9px_5px] hover:shadow-teal-300 transition-all duration-500">
      <div className="relative aspect-[16/9] rounded-t-lg overflow-hidden object-cover mx-auto z-0">
        <Image
          src={imgUrl}
          alt="StitchTalk"
          fill
          className="flex-shrink-0 object-contain hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between w-full">
          <h1 className="text-2xl font-semibold pb-3">{title}</h1>
          <div className="flex gap-3 pr-2">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href={codeUrl} target="_blank">
                <BsGithub className="h-7 w-7 " />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href={liveUrl} target="_blank">
                <IoOpenOutline className="h-7 w-7 " />
              </Link>
            </motion.div>
          </div>
        </div>
        <h4 className="text-left ">{desc}</h4>
      </div>
      <div className="flex flex-wrap max-w-full gap-2 px-3 pb-3">
        {tags.map((tag) => (
          <motion.span
            initial={{
              rotate: -20,
              y: -10,
            }}
            whileInView={{
              rotate: 0,
              y: 0,
            }}
            transition={{
              type: "spring",
            }}
            viewport={{ once: true }}
            key={tag}
            className="bg-secondary/40 rounded-md px-1 "
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
