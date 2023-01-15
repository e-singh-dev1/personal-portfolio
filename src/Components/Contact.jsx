import React from 'react'
import img5 from '../assets/img13.avif'
const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center  p-4 md:flex md:flex-col sm:flex sm:flex-col sm:justify-center sm:items-center bg-no-repeat bg-center sm:bg-no-repeat sm:bg-cover'
      style={{backgroundImage: `url(${img5})`}}>
        <div className='flex justify-items-end mt-10 items-center sm:flex sm:justify-center sm:items-center'>
        <form action="https://getform.io/f/6b53a6dd-21ea-4a1d-a0bd-bf8cac291b42" method="POST" className='flex flex-col w-[200px] w-full sm:w-full sm:w-[600px] mt-10 '>
            <div className='flex flex-col justify-center items-center sm:flex sm:flex-col sm:justify-center sm:items-center pb-4 sm:pb-8'>
                <p className='text-4xl sm:text-6xl font-bold flex m-0 border-b-4 border-pink-600 text-gray-300 md:flex md:flex-col sm:flex sm:flex-col '>
                    Contact
                </p>
                <p className='text-sm sm:text-2xl text-gray-300 py-2 sm:py-4'>//Submit the form below or send me an email to eshansingh510@gmail.com</p>
            </div>
            <input className='placeholder-black bg-[#ccd6f6] p-2 sm:p-4' type="text" placeholder='Name' name='name'/>
            <input className='placeholder-black my-2 p-2 sm:my-4 sm:p-4 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='placeholder-black bg-[#ccd6f6] p-2' name="message" rows={3} placeholder='Message'></textarea>
            <button className='text-black border-black font-bold bg-yellow-600 border-2 px-4 py-3 my-8 mx-auto  flex sm:flex sm:items-center hover:scale-110'>
              Submit Form
              </button>
        </form>
    </div>
    </div>
  )
}

export default Contact