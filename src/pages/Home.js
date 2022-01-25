import React from 'react';
import imagen from '../images/garden2.jpg';

function Home() {
    return (
        <div  className='w-ful bg-contain relative -mt-20 -z-10'>

        <img src={imagen} alt='gardening'  className=' w-full max-h-screen  saturate-100 opacity-95 object-cover'/>

        <div className='absolute top-1  right-0 h-full w-1/2 flex'>

            <div className='h-1/2 w-3/4 m-auto mt-28 shadow-4xl  drop-shadow-md  rounded-t-sm  flex flex-col'>
                
                <h1 className=' text-5xl h-20 tracking-wide text-center m-auto bg-gray-200 text-green-700 -mb-2 z-50 px-4 flex'> <span className='m-auto'> Apasionados </span></h1>
                <h1 className=' text-5xl h-20 tracking-wide text-center m-auto bg-green-700 text-gray-200  mt-0 px-4 flex'> <span className='m-auto'>por los jardines</span></h1>
                <button className='bg-green-700 rounded-xl text-white shadow-2xl  text-xl w-1/2 h-12 uppercase m-auto' >Contactanos</button>
            </div>

        </div>
        
        </div>
    )
}

export default Home;
