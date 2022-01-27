import React from 'react';

import { Fade } from 'react-awesome-reveal';

function Servicios() {
    return (

        <div className=' bg-gray-200 pb-8'>

        <div id='servicios' className='flex flex-col px-8 sm:flex-row justify-center'>

            <Fade duration={2500}  className=' m-auto my-12 shadow-lg shadow-gray-300 rounded-2xl border-gray-400 w-full sm:jusify-center sm:w-1/2 sm:mx-12 bg-white max-w-sm sm:hover:-translate-y-2 hover:shadow-2xl transition-all ease-in-out pb-4'>
            <div className='py-8'>
              {/*   <div>
                    <img src={require('../images/servicios1.jpg')} alt='servicios' className='h-16 sm:h-48 rounded-t-2xl object-none w-full ' />    
                </div> */}

                <h1 className='font-bold text-xl sm:text-3xl text-center px-8 my-2 mb-6'>
                 <span className=' underline decoration-green-700'>Diseño y creación</span> de Espacios Verdes
                </h1>

                <p className='mt-2 leading-tight tracking-wider sm:text-lg text-center px-8'>
                    Diseñamos el jardín adaptado a sus necesidades, preferencias y al espacio disponible en armonía con su entorno. 
                </p>

                <p className='mt-2 leading-tight tracking-wider sm:text-lg text-center px-8'>
                  Realizamos movimientos de tierra, plantación de árboles, arbustos y especies de temporada, instalación de césped y panes y cercos.
                </p>
                </div>

            </Fade > 



            <Fade duration={2500} className=' m-auto sm:my-12 mb-6 shadow-lg shadow-gray-300 rounded-2xl border-gray-400 w-full sm:jusify-center sm:w-1/2 sm:mx-12 bg-white max-w-sm hover:-translate-y-2 hover:shadow-2xl transition-all ease-in-out pb-4'>
            
            <div className='py-8'>
             {/*    <div>
                    <img src={require('../images/servicios2.jpg')} alt='servicios' className='h-16 sm:h-48 rounded-t-2xl object-none w-full '/>    
                </div> */}

<h1 className='font-bold text-xl sm:text-3xl text-center px-8 my-2 mb-6'>
               <span className=' underline decoration-green-700'>Mantenimiento</span>  de
                Espacios Verdes
                </h1>

                <p className='mt-2 leading-tight tracking-wider sm:text-lg text-center px-8'>
                Buscamos los mayores estándares de desempeño considerando tanto aspectos estéticos como su buen estado estructural. 
                </p>

                <p className='mt-2 leading-tight tracking-wider sm:text-lg text-center px-8'>
                Nos ocupamos de aspectos paisajísticos, desarrollando espacios que sean usables para las personas con una mirada holística e integral.
                </p>

            </div> 

            </Fade>

            </div>   

            {/* <Fade duration={1000} className='flex flex-row flex-wrap justify-center sm:mx-48'> */}

            <div className='flex flex-row flex-wrap justify-center sm:mx-48'>
                <div className='rounded-full bg-gray-100 px-4 py-2 shadow-md m-1.5 border-gray-700'>
                Forestación
                </div>

                <div className='rounded-full bg-gray-100 px-4 py-2 shadow-md m-1.5 border-gray-700'>
                Extracción y Poda de Árboles
                </div>
                <div className='rounded-full bg-gray-100 px-4 py-2 shadow-md m-1.5 border-gray-700'>
                Poda de Formación
                </div>
                <div className='rounded-full bg-gray-100 px-4 py-2 shadow-md m-1.5 border-gray-700 text-center'>
                Tratamientos y Manejo Fitosanitario
                </div>
                <div className='rounded-full bg-gray-100 px-4 py-2 shadow-md m-1.5 border-gray-700'>
                Planes de Fertilización
                </div>
                <div className='rounded-full bg-gray-100 px-4 py-2 shadow-md m-1.5 border-gray-700'>
                Planes de Mejoras
                </div>
                </div>
           {/*  </Fade> */}
        
        </div>

        
    )
}

export default Servicios
