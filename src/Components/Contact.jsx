import React from 'react'
import img5 from '../assets/img13.avif'
const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 md:flex md:flex-col sm:flex sm:flex-col sm:justify-center sm:items-center bg-no-repeat bg-center sm:bg-no-repeat sm:bg-cover'
      style={{backgroundImage: `url(${img5})`}}>
        <form action="https://getform.io/f/6b53a6dd-21ea-4a1d-a0bd-bf8cac291b42" method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4 sm:pb-8'>
                <p className='text-sm sm:text-6xl font-bold flex m-0 border-b-4 border-pink-600 text-gray-300 md:flex md:flex-col sm:inline '>
                    Contact
                </p>
                <p className='text-sm sm:text-2xl text-gray-300 py-4'>//Submit the form below or send me an email to eshansingh510@gmail.com</p>
            </div>
            <input className='placeholder-black bg-[#ccd6f6] p-4' type="text" placeholder='Name' name='name'/>
            <input className='placeholder-black my-4 p-4 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='placeholder-black bg-[#ccd6f6] p-2' name="message" rows="5" placeholder='Message'></textarea>
            <button className='text-black border-black font-bold bg-yellow-600 border-2 px-4 py-3 my-8 mx-auto flex items-center hover:scale-110'>
              Click for collaborating
              </button>
        </form>
    </div>
  )
}

export default Contact