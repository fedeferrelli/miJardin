import React from 'react';
import imagen from '../images/fer.jpg';

import { Link as LinkScroll } from 'react-scroll'

import {Fade} from 'react-awesome-reveal'

function Home() {
    return (
      <div className="w-full relative -mt-0 z-10 h-[32rem] sm:h-auto">
        <Fade triggerOnce duration={2000} className='h-full'>
          <img
            src={imagen}
            alt="gardening"
            className=" sm:w-full max-h-screen h-full sm:h-auto  saturate-100 opacity-95 object-cover"
          />
        </Fade>

        <Fade triggerOnce duration={2500}>
        <div className="absolute bottom-0 left-0   h-full w-full flex flex-col justify-center items-center">
          <div className="h-full w-full m-auto flex flex-col  justify-center items-center py-4">
            <h1 className="text-xl sm:text-5xl h-12 sm:h-20 tracking-wide text-center m-auto bg-gray-200 text-green-700 -mb-2 z-50 px-2 sm:px-4 flex">
              <span className="m-auto"> Apasionados </span>
            </h1>
            <h1 className="text-xl sm:text-5xl h-12 sm:h-20 tracking-wide text-center m-auto bg-green-700 text-gray-200  mt-0 px-2 sm:px-4 flex">
              <span className="m-auto">por los jardines</span>
            </h1>

            <LinkScroll
              activeClass="active"
              to="contacto"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1500}
              className="bg-green-900 hover:bg-green-700 cursor-pointer rounded-full text-white text-center  sm:text-xl  px-0 p-4 w-1/2  sm:w-auto sm:px-16 uppercase m-auto"
            >
              Contactanos
            </LinkScroll>
          </div>
        </div>
        </Fade>
      </div>
    );
}

export default Home;
