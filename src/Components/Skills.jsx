import React from 'react';

import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import Java from '../assets/java.png';
import SQL from '../assets/SQl.png';
import azure from '../assets/azure.png';
import Csharp from '../assets/Csharp_Logo.png';
import Tailwind from '../assets/tailwind.png';
import ReactImg from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='sm:w-full sm:h-screen bg-[#0a192f] text-gray-300 md:flex md:flex-col sm:flex sm:flex-col sm:m-0 '>
      {/* Container */}
      <div className='max-w-[1000px] sm:mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='flex flex-col mt-14'>
              <p className='text-4xl sm:text-6xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='p-4 text-sm font-bold sm:text-xl sm:font-sans sm:py-4'>// These are the technologies I've worked with:</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 font-sans'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Csharp} alt="C# icon" />
                  <p className='my-4 font-sans'>C#</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="javascript icon" />
                  <p className='my-4 font-sans'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="react icon" />
                  <p className='my-4 font-sans'>REACT</p>
              </div>
  
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                  <p className='my-5 font-sans'>Java</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 h-20 mx-auto' src={azure} alt="Azure icon" />
                  <p className='my-5 font-sans'>Azure</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                  <p className='my-4 font-sans'>Tailwind</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={SQL} alt="Sql icon" />
                  <p className='my-4 font-sans'>SQL</p>
              </div>
          </div>
      </div>
    </div>
  );
}
export default Skills;