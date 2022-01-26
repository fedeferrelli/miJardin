import React from 'react';

import Image from '../images/contacto3.svg'

import {FaWhatsapp, FaPhoneAlt} from 'react-icons/fa'

import {MdOutlineMailOutline} from 'react-icons/md'

import {FiPhone} from 'react-icons/fi'



function Contacto() {

  const w = window.innerWidth;



    return (
      <div id="contacto" className="flex flex-col sm:flex-row  sm:h-[40rem]">
       
       

        <div className="w-full flex  justify-center items-center">
         <div className='flex flex-col p-12 sm:px-24  m-auto '>
            <h1 className="text-green-700 text-left uppercase font-bold text-xs sm:text-sm">
              Contacto
            </h1>
            <h1 className="font-bold text-xl sm:text-3xl">¿Tenés alguna pregunta?</h1>
            <h1 className="font-bold text-xl sm:text-3xl">Estamos a tu dispocisión</h1>
            

            { w < 468 ?

              <a href='https://api.whatsapp.com/send?phone=5492262574254&text=Hola,%20Hernán.%20Cómo%20estás?%20Me%20gustaría%20hecerte%20la%20siguiente%20consulta.%0D%0A%0D%0A' className="mt-4 leading-tight  hover:text-green-700 tracking-wider sm:text-lg flex flex-row justify-start items-center ">
              <FaWhatsapp className='text-green-900 text-3xl sm:text-4xl mr-2'/> +54 9 294 466-9065
              </a> :

              <div className="mt-4 leading-tight  hover:text-green-700 tracking-wider sm:text-lg flex flex-row justify-start items-center ">
              <FaWhatsapp className='text-green-900 text-3xl sm:text-4xl mr-2'/> +54 9 294 466-9065
              </div> 
            }

            { w < 468 ?

              <a href="tel:+5492262574254" className="mt-4 leading-tight  hover:text-green-700 tracking-wider sm:text-lg flex flex-row justify-start items-center ">
              <FiPhone className='text-green-900 text-3xl sm:text-4xl mr-2'/> +54 9 294 466-9065
              </a> :

              <div className="mt-4 leading-tight  hover:text-green-700 tracking-wider sm:text-lg flex flex-row justify-start items-center ">
              <FiPhone className='text-green-900 text-3xl sm:text-4xl mr-2'/> +54 9 294 466-9065
              </div> 
            }


            <a href="mailto:femoreno45@gmail.com" className="mt-4 leading-tight hover:text-green-700 tracking-wider sm:text-lg flex flex-row justify-start items-center ">
              <MdOutlineMailOutline className='text-green-900 text-3xl sm:text-4xl mr-2'/> femoreno45@gmail.com 
            </a>
            
          </div>
        </div>

        <div className=" w-full  flex flex-row pb-12 sm:pb-0  justify-center items-center ">
          <img src={Image} alt="contacto" className="m-auto w-2/3 sm:w-1/2" />
        </div>

      </div>
    );
}

export default Contacto;
