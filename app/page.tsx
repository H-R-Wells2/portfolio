// "use client";

import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto justify-center w-full h-full scroll-smooth">
      <section className=" w-full flex justify-center items-center">
        <Hero />
      </section>

      <section id="about" className="">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>
      {/* Skills */}

      {/* Contact me */}
    </div>
  );
}
