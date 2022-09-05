import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'


function Navbar(){

   const [nav,setNav] = useState(false)
   const handleClick = () => setNav(!nav)

function emailCode(){
  alert('brn_boggio@hotmail.com')
}   

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
              
            </div>

            {/* menu */}
                <ul className="hidden md:flex">
                    <li>
                    <Link to="home"  smooth={true}  duration={500} >
                    Home
                    </Link>
                    </li>
                    <li>
                    <Link to="about"  smooth={true}  duration={500} >
                    Sobre
                    </Link>
                    </li>
                    <li>
                    <Link to="skills"  smooth={true}  duration={500} >
                    Habilidades/Tecnologias
                    </Link>
                    </li>
                    <li>
                    <Link to="work"  smooth={true}  duration={500} >
                    Projetos
                    </Link>
                    </li>
                    <li>
                    <Link to="contact"  smooth={true}  duration={500} >
                    Contato
                    </Link>
                    </li>
                </ul>
            

          {/* Hamburger */}
          <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
          </div>

           {/* Mobile Menu */}
           <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}> 
                    <Link to="home"  smooth={true}  duration={500} >
           <li className="py-6 text-4xl">Home</li>
                    </Link>
                    <li className="py-6 text-4xl">Sobre</li>
                    <li className="py-6 text-4xl">Habilidades</li>
                    <li className="py-6 text-4xl">Projetos</li>
                    <li className="py-6 text-4xl">Contato</li>
           </ul>

           {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>

                  <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-500">
                    <a className="flex justify-between items-center w-full text-gray-300" 
                     href="https://www.linkedin.com/in/bruno-medeiros-02139a231/" target="blank">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                  </li>

                  <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]">
                    <a className="flex justify-between items-center w-full text-gray-300" 
                     href="https://github.com/bruno-boggio" target="blank">
                        Github <FaGithub size={30}/>
                    </a>
                  </li>

                  <li onClick={emailCode} className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#558841]">
                    <a className="flex justify-between items-center w-full text-gray-300" 
                     href="/">
                        Email <HiOutlineMail size={30}/>
                    </a>
                  </li>

                  <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#a84336]">
                    <a className="flex justify-between items-center w-full text-gray-300" 
                     href="cv-bruno.pdf" download>
                        Currículo <BsFillPersonLinesFill size={30}/>
                    </a>
                  </li>

                </ul>
             </div>


            </div>
    )
}

export default Navbar;