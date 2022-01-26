import React from 'react';

import {Link as LinkScroll} from 'react-scroll';

import {AiOutlineClose} from 'react-icons/ai';



const Sidebar = ({showSidebar, setShowSidebar}) => {
    return (
        <div   className='fixed z-50 w-full pb-8 bg-green-600 flex flex-row flex-wrap '   >
       
       <div className=' h-20 w-full flex  px-2 mb-8 ' onClick={()=>setShowSidebar(!showSidebar)} > <AiOutlineClose className='w-10 h-10  m-auto mr-0' /> </div>

        <ul className='flex flex-col w-full h-full justify-evenly ' >

                <li className='flex flex-row justify-center' > 
                    <LinkScroll to='about'
                    activeClass="active" spy={true} smooth={true} offset={-80} duration={1500}
                    className='text-white flex items-center justify-center decoration-0 text-base'
                    onClick={()=>setShowSidebar(!showSidebar)}> Quienes somos     
                    </LinkScroll> 
                </li>

                <li className=' flex flex-row justify-center'> 
                <LinkScroll to='servicios' 
                activeClass="active" spy={true} smooth={true} offset={-80} duration={1500}
                className='text-white mt-8 flex items-center justify-center decoration-0'
                onClick={()=>setShowSidebar(!showSidebar)}
                > Servicios  </LinkScroll> </li>


                <li className=' flex flex-row justify-center'> 
                <LinkScroll to='contacto' 
                activeClass="active" spy={true} smooth={true} offset={-80} duration={1500}
                className='text-white mt-8 flex items-center justify-center decoration-0'
                onClick={()=>setShowSidebar(!showSidebar)}> Contacto  </LinkScroll> </li>
                
            </ul>

            </div>
    )
};

export default Sidebar;
