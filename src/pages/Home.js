import React from 'react';
import imagen from '../images/garden2.jpg';

function Home() {
    return (
        <div  className='w-full bg-contain relative -mt-20 -z-10'>

        <img src={imagen} alt='gardening'  className=' sm:w-full max-h-screen h-96 sm:h-auto  saturate-100 opacity-95 object-cover'/>

        <div className='absolute top-1  right-0 h-full w-1/2 flex'>

            <div className='h-1/2 w-full sm:w-3/4 m-auto mt-28 shadow-4xl  drop-shadow-md  rounded-t-sm  flex flex-col'>
                
                <h1 className=' sm:text-5xl h-12 sm:h-20 tracking-wide text-center m-auto bg-gray-200 text-green-700 -mb-2 z-50 px-2 sm:px-4 flex'> <span className='m-auto'> Apasionados </span></h1>
                <h1 className=' sm:text-5xl h-12 sm:h-20 tracking-wide text-center m-auto bg-green-700 text-gray-200  mt-0 px-2 sm:px-4 flex'> <span className='m-auto'>por los jardines</span></h1>
                <button className='bg-green-900 hover:bg-green-700 cursor-pointer rounded-xl text-white shadow-2xl  sm:text-xl px-4 sm:w-1/2 h-12 uppercase m-auto' >Contactanos</button>
            </div>

        </div>
        
        </div>
    )
}

export default Home;
