import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import img5 from '../assets/img5.png'
const MainSection = () => {
  return (
    <div  name="MainSection" className='w-full h-screen bg-[#0a192f] bg-no-repeat bg-center sm:bg-no-repeat sm:bg-cover'
    style={{backgroundImage:`url(${img5})`}}>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p class="flex font-semibold text-pink-600 text-2xl sm:text-4xl">Hello,<span class="hidden sm:animate-[wave_10s_ease-in-out_5] sm:inline ">👋🏻</span>my name is</p>
        <h1 className='text-3xl sm:text-7xl font-bold text-[#ccd6f4]'>
            Eshan Singh
        </h1>
        <h2 className='text-2xl sm:text-7xl font-bold text-[#ccd6f4]'>
            I'm a Full Stack Developer
        </h2>
        <p className='text-sm text-bold sm:text-2xl sm:text-bold  sm:font-serif text-white py-4 max-w-[700px] m-0 bg-clip-content bg-gradient-to-r from-pink-600 hover:to-yellow-500
         sm:bg-gradient-to-r sm:from-pink-600 sm:hover:to-yellow-500'>
         Specializing in .Net Core, Azure services and React.
         Exceptional problem solving skills.Excited to leverage my deep expertise in
         development and maintaining scalable,data-driven applications.
         </p>
        
        <div>
          <Link to="/Contact">
            <button className=' text-xl text-black bg-yellow-600 font-bold border-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-black  hover:text-black
             sm:hover:bg-yellow-600 sm:hover:border-black  sm:hover:text-black hover:font-bold hover:scale-110 sm:hover:font-bold sm:hover:scale-110 '>
             Contact
             <span>
              <HiArrowNarrowRight className='ml-3' />
            </span>
            </button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default MainSection