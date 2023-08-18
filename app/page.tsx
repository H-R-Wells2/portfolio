// "use client";

import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto justify-center w-full h-full snap-y snap-mandatory ">
      <section className="snap-start w-full flex justify-center items-center">
        <Hero />
      </section>

      <section id="about" className="snap-center shrink-0">
        <About />
      </section>

      {/* Projects */}

      {/* Skills */}

      {/* Contact me */}
    </div>
  );
}
