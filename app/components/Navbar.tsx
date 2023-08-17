import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="flex py-5 px-3 bg-secondary/20 w-full">
      <div className="w-full flex justify-between max-w-[1400px] mx-auto">
        <div className="flex items-center">
          <h1 className="font-bold text-3xl text-white cursor-pointer hidden sm:block">
            HR<span className="text-teal-300">Wells</span>
          </h1>
          <div className="border-orange-500 border-x h-10 w-2 grow justify-center min-w-md ml-5 hidden sm:flex"/>
          <div className=" flex w-fit sm:ml-4">
            <SocialIcon
              url="https://www.linkedin.com/in/shubham-kadam-0620b722a/"
              fgColor="#5EEAD4"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/h-r-wells2"
              fgColor="#5EEAD4"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://t.me/h_r_wells"
              fgColor="#5EEAD4"
              bgColor="transparent"
            />
            {/* <SocialIcon url="" fgColor="#5EEAD4" bgColor="transparent" /> */}
          </div>
        </div>
        <div className="flex items-center gap-4 mx-4 text-white text-lg sm:text-xl font-semibold">
          <h2 className="hover:text-teal-300 cursor-pointer">Projects</h2>
          <h2 className="hover:text-teal-300 cursor-pointer">Contact</h2>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
