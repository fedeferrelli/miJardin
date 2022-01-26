import React from 'react';
import imagen from '../images/fer.jpg';

import { Link as LinkScroll } from 'react-scroll'

function Home() {
    return (
      <div className="w-full  bg-gray-200 relative -mt-0 z-10 h-[32rem] sm:h-auto">
        <img
          src={imagen}
          alt="gardening"
          className=" sm:w-full max-h-screen h-full sm:h-auto  saturate-100 opacity-95 object-cover"
        />

        <div className="absolute bottom-0 left-0   h-full w-1/2 flex flex-col ">
          
          <div className="h-full w-full m-auto flex flex-col  justify-end py-4">
            <h1 className=" sm:text-5xl h-12 sm:h-20 tracking-wide text-center m-auto bg-gray-200 text-green-700 -mb-2 z-50 px-2 sm:px-4 flex">
              
              <span className="m-auto"> Apasionados </span>
            </h1>
            <h1 className=" sm:text-5xl h-12 sm:h-20 tracking-wide text-center m-auto bg-green-700 text-gray-200  mt-0 px-2 sm:px-4 flex">
              
              <span className="m-auto">por los jardines</span>
            </h1>




            <LinkScroll
            activeClass="active" to="contacto" spy={true} smooth={true} offset={-80} duration={1500}

            className="bg-green-900 hover:bg-green-700 cursor-pointer rounded-full text-white text-center  sm:text-xl  px-0 p-4 w-full  sm:w-1/2 uppercase m-auto">
              Contactanos
            </LinkScroll>

            
                
                
          </div>
        </div>
      </div>
    );
}

export default Home;
