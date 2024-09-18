import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "../constants";
import { Tilt } from "react-tilt";

import { Tech } from "./../components";

const ServiceCard = ({ index, title, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <Tilt className="w-[15rem] green-pink-gradient rounded-[1.5rem]  shadow-card hover:shadow-none">
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ type: "spring", delay: index * 0.5, duration: 0.6 }}
        className="w-full   p-[3px] rounded-[1.rem] "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className=" rounded-[1.5rem] py-5 px-12 min-h-[17rem] flex justify-evenly items-center flex-col bg-gray-900"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-[4rem] h-[4rem] object-contain"
          />

          <h3 className="text-white text-[1.2rem] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [inView]);

  return (
    <>
      <div className="bg-transparent  w-[100vw] h-[8rem]  "></div>
      <div className="w-[100vw] h-[100%] pt-[8rem]  bg-gray-400">
        <section className=" h-[100%] mt-[2rem] w-[94%] sm:w-11/12 lg:w-[70%] ml-auto mr-auto ">
          <motion.div
            className=" flex flex-col items-center "
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: animate ? 0 : -100, opacity: animate ? 1 : 0 }}
            transition={{ type: "spring", duration: 2, delay: 0.1 }}
          >
            <p className="pt-3  text-xl sm:text-3xl lg:text-4xl leading-normal sm:leading-relaxed lg:leading-relaxed xl:leading-relaxed text-amber-400 font-mono">
              Introduction
            </p>
            <h1 className=" pb-3 text-black overflow-hidden  text-4xl sm:text-6xl lg:text-7xl font-bold  ">
              Overview
            </h1>
          </motion.div>
          <div className="w-[100%] flex justify-between">
            <motion.div
              className="text-black  pt-[2rem] sm:pt-[2rem] lg:pt-[2rem] sm:p-4   text-lg sm:text-xl lg:text-2xl  text-center font-serif shadow-card  w-[70%] ml-auto mr-auto "
              ref={ref}
              initial={{ x: 70, opacity: 0 }}
              animate={{ x: animate ? 0 : 70, opacity: animate ? 1 : 0 }}
              transition={{ type: "spring", duration: 2, delay: 0.5 }}
            >
              I'm a skilled software developer with strong proficiency in
              JavaScript and deep expertise in modern frameworks such as React,
              Node.js, and Three.js. Known for being a fast learner, I have a
              passion for building efficient, scalable, and visually dynamic
              applications. I thrive on tackling complex challenges and
              continuously enhancing my skill set to stay ahead in the
              ever-evolving tech landscape.
            </motion.div>
          </div>
          <div className=" cards w-[100%] p-[3rem]  m-2 flex flex-wrap gap-10  justify-around items-center  ">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>

          <Tech />
        </section>
      </div>
    </>
  );
};

export default About;

// "  h-[100%] mt-[8rem]  w-[94%] sm:w-11/12 lg:w-[70%] ml-auto mr-auto ";
