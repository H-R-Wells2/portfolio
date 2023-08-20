// "use client";

import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto justify-center w-full h-full scroll-smooth">
      <section className=" w-full flex justify-center items-center">
        <Hero />
      </section>

      <section id="about" className="">
        <About />
      </section>

      <section id="skills" className="">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      {/* Contact me */}
    </div>
  );
}
