import { Roboto_Slab } from "next/font/google";

const RoboMono = Roboto_Slab({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="bg-transparent flex flex-col max-w-7xl mx-auto my-32 text-white w-full px-3">
      <div>
        <span className="text-xl">Hello, My name is</span>
        <h1
          className={`text-[50px] sm:text-[100px] text-teal-300 font-semibold ${RoboMono.className}`}
        >
          Shubham Kadam
        </h1>
      </div>
      <div className="mt-10 text-orange-300 text-xl sm:text-3xl font-semibold">
        <h1>Web Developer</h1>
        <h2 className="text-white font-mono ">I code therefore I am...occasionally functional.</h2>
      </div>
    </div>
  );
};

export default Hero;
