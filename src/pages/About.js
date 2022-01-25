import React from 'react';

import Image from '../images/about.svg'

function About() {
    return (
        <div id='about' className='flex flex-col sm:flex-row mb-6'>

            <div className=' w-full  flex p-12'>

                <img src={Image} alt='about' className='m-auto w-9/12 sm:w-2/3 mb-0' />

            </div>

            <div className='w-full flex flex-col justify-center px-12'>

            <h1 className='text-green-700 text-left uppercase font-bold text-xs sm:text-sm'>Nosotros</h1>
            <h1 className='font-bold text-xl sm:text-3xl' >Hola! Somos mi Jardín</h1>
            <p className='mt-2 leading-tight tracking-wider sm:text-lg'>Somos una familia emprendora con una meta: desarrollar soluciones integrales en Espacios Verdes </p>
            <p className='mt-2 leading-tight tracking-wider sm:text-lg'> Ofrecemos servicios de jardinería y paisajismo, diseñando proyectos con una mirada sostenible y creativa.</p>

            </div>
            
            
        </div>
    )
}

export default About
