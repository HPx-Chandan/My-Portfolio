import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({ parallaxRef }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 630) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const handleNavClick = (offset) => {
    if (parallaxRef && parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
    setToggle(false);
  };

  return (
    <section className="w-full fixed z-10 pt-2">
      <div className="flex items-center justify-between w-[94%] sm:w-11/12 lg:w-4/5 ml-auto mr-auto pt-2">
        <Link
          to="/"
          className="flex items-center cursor-pointer"
          onClick={() => {
            setActive("");
            handleNavClick(nav.offset);
          }}
        >
          <div className="logo w-[2.7rem] sm:w-[3rem]">
            <img className="object-fill" src={logo} alt="logo" />
          </div>
          <p className="pl-[1rem] text-[14px] font-bold">
            CHANDAN &nbsp;
            <span className="sm:block hidden"> MERN Stack Dev</span>
          </p>
        </Link>

        <ul className="list-none sm:flex hidden gap-8">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-black font-bold"
                  : "text-white font-medium"
              } hover:text-black hover:font-bold text-[18px] cursor-pointer`}
              onClick={() => {
                setActive(nav.title);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center sm:hidden cursor-pointer">
          <img
            className="w-6"
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <ul
          className={`${
            toggle ? "flex" : "hidden"
          } black-gradient fixed flex flex-col rounded-2xl p-4 top-16 right-0 mr-12`}
        >
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-black"
              } hover:text-white text-[18px] font-medium cursor-pointer p-2`}
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
