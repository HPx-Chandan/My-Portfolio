import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Works, Contact } from "./components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const App = () => {
  const parallaxRef = useRef();

  const getpage = () => {
    const width = window.innerWidth;
    if (width < 660) return 4.32;
    if (width < 1278) return 3.195;
    return 3.1;
  };

  const getOffset = () => {
    const width = window.innerWidth;
    if (width < 660) return 2.4;
    if (width < 1278) return 1.5;
    return 1.7;
  };

  const getOffset2 = () => {
    const width = window.innerWidth;
    if (width < 660) return 3;
    if (width < 1278) return 2;
    return 2;
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary text-white">
        <Navbar parallaxRef={parallaxRef} />

        <div className="wrapper">
          <Parallax ref={parallaxRef} pages={getpage()}>
            <ParallaxLayer id="hero" speed={-0.2} offset={0}>
              <div id="hero" className=" z-10 h-[100vh]">
                <Hero />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              id="about"
              style={{ height: "auto" }}
              className="overflow-hidden "
              speed={0.95}
              offset={0.85}
            >
              <About />
            </ParallaxLayer>
            <ParallaxLayer
              id="work"
              style={{ height: "auto" }}
              className="bg-slate-600"
              speed={1.4}
              offset={getOffset()}
            >
              <Works />
            </ParallaxLayer>
            <ParallaxLayer
              id="contact"
              speed={1.4}
              style={{ height: "auto" }}
              className="bg-slate-800"
              offset={getOffset2()}
            >
              <Contact />
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
