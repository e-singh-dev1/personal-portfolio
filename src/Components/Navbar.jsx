import React,{useState}  from 'react';
import Logo from '../assets/E_log.jpg';
import {FaBars,FaTimes,FaLinkedin,FaLinkedinIn,FaGithub} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav,SetNav] = useState(false);
    const handleClick = () => SetNav(!nav);
  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-2 py-4 bg-black text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'60px'}} />
        </div>
        
            <ul className='hidden md:flex flex-row space-x-3'>
            <Link to="/">
            <li className=' text-2xl border-2 border-green-600 cursor-pointer px-5 
                                py-2 rounded-lg  hover:scale-110  hover:bg-yellow-400 hover:text-black hover:font-bold'>
             Home
             </li>
           </Link>

            <Link to="/Skills">
            <li className=' text-2xl border-2 border-yellow-200 cursor-pointer px-5
                                py-2 rounded-lg 
                                 hover:scale-110  hover:bg-yellow-400 hover:text-black hover:font-bold'>Skills</li>
            </Link>
            <Link to="/About">
            <li className='text-2xl border-2 border-red-600 cursor-pointer px-5
                                py-2 rounded-lg 
                                 hover:scale-110  hover:bg-yellow-400 hover:text-black hover:font-bold'>About</li>
            </Link>
            <Link to="Contact">
            <li className='text-2xl border-2 border-violet-600 cursor-pointer 
                                py-2 rounded-lg  hover:scale-110 hover:bg-yellow-400 hover:text-black
                                hover:font-bold'>Contact</li>
            </Link>
            </ul>
        

        <div  onClick={handleClick}
        className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>
         
         {/* mobile menu */}
        <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <Link to="/">
        <li className='py-6 text-4xl'>Home</li>
        </Link>
        <Link to="/Skills">
        <li className='py-6 text-4xl'>Skills</li>
        </Link>
        <Link to="/About">
        <li className='py-6 text-4xl'>About</li>
        </Link>
        <Link to="/Contact">
        <li className='py-6 text-4xl'>Contact</li>
        </Link>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300'
                target="_blank"
                rel="noreferrer" 
                href="https://www.linkedin.com/in/eshan-singh-39a138176"
                >
                    Linkedin <FaLinkedin size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                <a className='flex justify-between items-center w-full text-gray-300'
                target="_blank"
                rel="noreferrer"
                href="https://github.com/e-singh-dev1"
                >
                    GitHub <FaGithub size={30}/>
                </a>
            </li>
             
             <Link to="/Contact">
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href="/">
                    Email <HiOutlineMail size={30}/>
                </a>
            </li>
            </Link>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
                <a className='flex justify-between items-center w-full text-gray-300'
                target="_blank"
                rel="noreferrer" 
                href="https://drive.google.com/drive/folders/116j4m17K_3owUD0Vy887INWlPGmvnmNO?usp=sharing">
                    Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar;