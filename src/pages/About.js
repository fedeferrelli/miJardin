import React from 'react';

import Image from '../images/about.svg'

function About() {
    return (
      <div id="about" className="flex flex-col sm:flex-row  sm:h-[40rem]">
       
        <div className=" w-full  flex flex-row  pt-12 sm:pt-0  justify-center items-center">
          <img src={Image} alt="about" className="m-auto w-2/3 sm:w-1/2 " />
        </div>

        <div className="w-full flex  justify-center items-center ">
          <div className='flex flex-col p-12 sm:px-24  m-auto '>
            <h1 className="text-green-700 text-left uppercase font-bold text-xs sm:text-sm">
              Nosotros
            </h1>
            <h1 className="font-bold text-xl sm:text-3xl">Hola!</h1>
            <h1 className="font-bold text-xl sm:text-3xl">Somos mi Jardín</h1>
            <p className="mt-2 leading-tight tracking-wider sm:text-lg">
              Somos una familia emprendora con una meta: desarrollar soluciones
              integrales en Espacios Verdes.
            </p>
            <p className="mt-2 leading-tight tracking-wider sm:text-lg">
              {" "}
              Ofrecemos servicios de jardinería y paisajismo, diseñando
              proyectos con una mirada sostenible y creativa.
            </p>
          </div>
        </div>
      </div>
    );
}

export default About
