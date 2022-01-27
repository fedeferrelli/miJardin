import React from "react";

import { FaBars } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";
import { FaCanadianMapleLeaf } from "react-icons/fa";

import { Link as LinkScroll, animateScroll } from "react-scroll";

import { Fade, Rotate } from "react-awesome-reveal";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  /* var scroll = Scroll.animateScroll; */

 

  return (
    <div className="bg-gray-200 flex flex-row justify-between py-0 px-2 h-20 sm:h-20 z-40 fixed top-0 w-full">
      <div className="flex flex-row ">
       
          <Rotate className="w-14 h-14 bg-green-100 rounded-full border-2 border-green-800 flex m-auto">
            <FaCanadianMapleLeaf
              className="m-auto text-green-800 cursor-pointer h-10 w-10"
              onClick={() => animateScroll.scrollToTop()}
            />
          </Rotate>
        
        <h1 className="m-auto ml-2 text-xl">mi Jardín</h1>
      </div>

      <ul className="hidden sm:flex">
        <li className="ml-1 h-full">
          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
            className="flex items-center justify-center cursor-pointer   border-y-4 border-b-transparent h-full decoration-0 mx-4  active:border-b-green-900 active:border-b-4 text-xl"
          >
            {" "}
            Quienes somos
          </LinkScroll>
        </li>

        <li className="ml-1">
          <LinkScroll
            activeClass="active"
            to="servicios"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
            className="flex items-center justify-center cursor-pointer   border-y-4 border-b-transparent h-full decoration-0 mx-4  active:border-b-green-900 active:border-b-4 text-xl"
          >
            {" "}
            Servicios{" "}
          </LinkScroll>{" "}
        </li>

        <li className="ml-1">
          <LinkScroll
            activeClass="active"
            to="contacto"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
            className="flex items-center justify-center cursor-pointer   border-y-4 border-b-transparent h-full decoration-0 mx-4  active:border-b-green-900 active:border-b-4 text-xl"
          >
            {" "}
            Contacto{" "}
          </LinkScroll>{" "}
        </li>
      </ul>

      <div
        className=" flex sm:hidden "
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {" "}
        <FaBars className="m-auto cursor-pointer w-10 h-6" />{" "}
      </div>
    </div>
  );
};

export default Navbar;
