import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import Link from "next/link";

type Props = {
    image: string,
    title: string,
    desc: string,
};

const ProjectCard = (props: Props) => {
  return (
    <div className="rounded-lg bg-primary/30 w-[500px] hover:shadow-[1px_1px_9px_7px] hover:shadow-teal-300 transition-all duration-500">
      <div className="relative aspect-[16/9]  rounded-t-lg overflow-hidden object-cover mx-auto z-0">
        <Image
          src="/stitchtalk.png"
          alt="StitchTalk"
          fill
          className="flex-shrink-0 object-contain hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between w-full">
          <h1 className="text-2xl font-semibold pb-3">StitchTalk</h1>
          <div className="flex gap-3">
            <Link href={"https://www.github.com/h-r-wells2"} target="_blank">
              <BsGithub className="h-7 w-7 hover:rotate-12" />
            </Link>
            <Link
              href={"https://www.github.com/h-r-wells2/stitchtalk"}
              target="_blank"
            >
              <IoOpenOutline className="h-7 w-7 hover:rotate-12" />
            </Link>
          </div>
        </div>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolore
          dolor ipsa corporis adipisci laboriosam ex inventore explicabo
          repellendus consequatur accusamus quas eum fugiat, quaerat nostrum
          veniam voluptates praesentium unde.
        </h4>
      </div>
    </div>
  );
};

export default ProjectCard;
