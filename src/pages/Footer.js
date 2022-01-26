import React from 'react';

import {FaCanadianMapleLeaf} from 'react-icons/fa';

import { animateScroll } from 'react-scroll'

function Footer() {
    return (
        <div className='bg-slate-900 h-40 sm:h-48  flex flex-col items-center justify-end'>
            
            <div className='w-10 h-10 bg-green-100 rounded-full border-2 border-green-800 flex shadow-2xl shadow-black'> 
                <FaCanadianMapleLeaf className='m-auto text-green-800 cursor-pointer h-10 w-10' 
                onClick={()=>animateScroll.scrollToTop()}
                /> 
            </div>

            <h1 className='text-lg m-0 font-bold text-white'>mi Jardín</h1>

            <h1 className='my-4 text-sm m-0 text-white'>Todos los derecho reservados. 2022</h1>
        </div>
    )
}

export default Footer;
