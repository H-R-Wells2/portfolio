import { Roboto_Mono } from "next/font/google";

const RoboMono = Roboto_Mono({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="bg-transparent flex flex-col max-w-3xl mx-auto my-32 text-white w-full">
      <div>
        <span className="text-xl">Hello, My name is</span>
        <h1
          className={`text-4xl text-teal-300 font-semibold ${RoboMono.className}`}
        >
          Shubham <span className="text-teal-300">Kadam...</span>{" "}
        </h1>
      </div>
      <div className="mt-10 text-orange-300 text-3xl font-semibold">
        <h1>Web Developer</h1>
        <h2 className="text-white">I code therefore I am...occasionally functional.</h2>
      </div>
    </div>
  );
};

export default Hero;
