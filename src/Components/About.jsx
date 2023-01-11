import React from 'react';
import img from '../assets/img12.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 bg-no-repeat bg-cover'
    style={{backgroundImage:`url(${img})`}}>
      <div className='  flex flex-col justify-center items-center w-full h-full md:flex md:flex-col sm:flex sm:flex-col'>
        <div className='  max-w-[1000px] w-full grid grid-cols-2 gap-2'>
          <div className='sm:text-right sm:text-sm pb-8 pl-4 '>
            <p className='text-6xl font-bold font-serif inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className=' text-sm sm:text-right sm:text-4xl font-extrabold font-serif'>
              <p>Hey. I'm Eshan Singh, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='text-sm sm:text-xl font-serif'>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              applications on .Net/React/Azure.I work in a reputed company based in gurugram.
              Always ready to take on new challlenges and ready to collaborate for any interesting project.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;