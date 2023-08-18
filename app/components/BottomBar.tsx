"use client"


import Link from "next/link";
import {BiMessageDetail} from "react-icons/bi"
import {BiCodeAlt} from "react-icons/bi"
import {FaRegUser} from "react-icons/fa"


type Props = {};

const BottomBar = (props: Props) => {
  return (
    <div className="fixed bottom-4 flex justify-center z-20 w-full  md:hidden text-white">
      <div className="rounded-2xl mx-3 backdrop-blur-lg bg-[#38306A]/50 flex justify-center w-full py-2 px-8">
        <div className="flex items-center justify-between gap-3 xs:gap-5 w-full text-sm">
          <Link href="#about" className="items-center flex flex-col"><FaRegUser className="text-white h-5 w-5"/>Who am I?</Link>
          <Link href="#projects" className="items-center flex flex-col"><BiCodeAlt className="text-white h-6 w-6" />Projects</Link>
          <Link href="#contact" className="items-center flex flex-col"><BiMessageDetail className="text-white h-5 w-5" />Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
