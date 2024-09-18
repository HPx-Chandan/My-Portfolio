import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { useInView } from "react-intersection-observer";

const ServiceCard = memo(({ index, title, icon }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
    triggerOnce: true, // Animate only once
  });

  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="w-[15rem] green-pink-gradient rounded-[1.5rem] shadow-card hover:shadow-none"
    >
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ type: "spring", delay: index * 0.5, duration: 0.6 }}
        className="w-full p-[3px] rounded-[1rem]"
      >
        <div className="rounded-[1.5rem] py-5 px-12 min-h-[17rem] flex justify-evenly items-center flex-col bg-gray-900">
          <img
            src={icon}
            alt={title}
            className="w-[4rem] h-[4rem] object-contain"
          />
          <h3 className="text-white text-[1.2rem] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
});

export default ServiceCard;
