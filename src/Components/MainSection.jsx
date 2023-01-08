import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom';
const MainSection = () => {
  return (
    <div  name="MainSection" className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p class="flex font-semibold text-pink-600 text-4xl">Hello <span class="animate-[wave_10s_ease-in-out_5]">👋🏻</span>,my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f4]'>
            Eshan Singh
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a Full Stack Developer
        </h2>
        <p className='text-xl text-[#8892b0] py-4 max-w-[700px]'>
         Specializing in .Net Core, Azure services and React.
         Exceptional problem solving skills.Excited to leverage my deep expertise in
         development and maintaining scalable,data-driven applications.Equipped with a record
         of success in consistently identifying and providing the technological needs of the company through ingenious innovation.
         </p>
        
        <div>
          <Link to="/Contact">
            <button className=' text-xl text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-black  hover:text-black
                                hover:font-bold'>
             Contact
             <span className>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
            </button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default MainSection