"use client";

import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import ProjectCard from "./cards/ProjectCard";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const subjectEncoded = encodeURIComponent(formData.subject);
    const body = `Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    const mailtoLink = `mailto:kadamshubham10246@gmail.com?subject=${subjectEncoded}&body=${encodeURIComponent(
      body
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-x-hidden"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-teal-300 z-10">
        Contact
      </h3>

      <div className="relative flex flex-col w-full justify-center items-center">
        <h4 className="text-lg mb-2 text-teal-50">
          Let &apos;s craft excellence, together!
        </h4>
        <p className="text-base max-w-lg text-center text-teal-50">
          As an enthusiastic developer, I excel in overcoming challenges through
          coding. If you &apos;re seeking to build exceptional projects or eager to
          explore new horizons, I invite you to reach out. Let &apos;s connect and
          make your vision a reality.
        </p>
        <div className="flex justify-center flex-col items-center mt-20 w-fit">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 mx-auto"
          >
            <div className="flex space-x-2  ">
              <input
                {...register("name")}
                placeholder="Name"
                className="p-2 rounded-lg text-black outline-none text-base bg-[#E8F0FE] w-1/2"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="p-2 rounded-lg text-black outline-none text-base bg-[#E8F0FE] w-1/2"
                type="email"
              />
            </div>

            <input
              {...register("subject")}
              placeholder="Subject"
              className="p-2 rounded-lg text-black outline-none text-base bg-[#E8F0FE]"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="p-2 rounded-lg text-black outline-none text-base bg-[#E8F0FE]"
              rows={5}
            ></textarea>
            <button className="bg-teal-300 hover:bg-teal-400 py-2 px-10 rounded-md text-black font-bold text-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
