import React, { memo } from "react";
import { Canvas } from "@react-three/fiber";
import PlaneAsteroid from "../models/plane-asteroid";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Hero = memo(() => {
  return (
    <section className="hero overflow-hidden z-0 ">
      <Parallax pages={1.4}>
        <ParallaxLayer speed={0.32} offset={0}>
          <img
            className=" absolute xl:-top-7 lg:-top-36 -top-16 "
            src="/hero-img/1st-img.svg"
            alt=""
          />
        </ParallaxLayer>

        <ParallaxLayer speed={0.54} offset={0}>
          <img
            className=" absolute xl:top-3 lg:-top-2 -top-14 z-20 "
            src="/hero-img/2nd-img.svg"
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0.1} offset={0}>
          <div
            className=" leading-normal absolute sm:top-44 top-48 lg:top-40 xl:top-28 xl:right-[28rem] sm:right-[42.5rem] lg:right-[35rem] right-[50rem] sm:w-[400px] sm:h-[400px] xl:w-[560px] xl:h-[560px] w-[300px] h-[300px]"
            data-scroll
            data-scroll-speed="-0.4"
          >
            <Canvas>
              <ambientLight intensity={0.7} />
              <directionalLight position={[-10, 5, 5]} />
              <PlaneAsteroid
                scale={0.19}
                position={[0, 1.2, 0]}
                rotation={[0, Math.PI / 2, 0]}
              />
            </Canvas>
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.01} offset={0} className=" ">
          <p
            className={` absolute top-52 lg:top-64 xl:top-72 ml-[52.8rem] w-[8rem] sm:w-[10rem] sm:ml-[46rem] lg:ml-[42.4rem] lg:w-[25rem] xl:ml-[36rem] xl:w-[36rem] text-base font-mono sm:text-lg text-black-200 mt-2`}
          >
            I am a professional Web Developer
            <br className="sm:block" />
            This is my Portfolio.
            <br className="sm:block" />I like to create 3D looking and
            professional Full Stack web Apps.
          </p>
        </ParallaxLayer>

        <ParallaxLayer speed={0.2} offset={0}>
          <img
            className=" absolute xl:-top-7 lg:-top-20 -top-10 "
            src="/hero-img/3rd-img.svg"
            alt=""
          />
        </ParallaxLayer>

        <ParallaxLayer speed={0.35} offset={0}>
          <img
            className=" absolute xl:-top-0  lg:-top-36 -top-16  "
            src="/hero-img/4th-img.svg"
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0.01}>
          <h1
            className={`hero-heading overflow-hidden lg:h-[3rem] sm:h-[2.5rem] h-[2.5rem] absolute top-36 lg:top-52 xl:top-60 font-bold text-4xl ml-[52.8rem] sm:ml-[46rem] lg:ml-[42.4rem] xl:ml-[36rem] lg:text-5xl text-[#E6E6FA]`}
          >
            Hi, I'm <span className="text-[#effd82]">CHANDAN</span>
          </h1>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
});
export default Hero;

// xl:-top-7 lg:-top-36 -top-16
//  xl:-top-7 lg:-top-20 -top-10
// xl:top-3 lg:-top-2 -top-14 z-20"
// xl:-top-3 lg:-top-16 -top-10 z-10
