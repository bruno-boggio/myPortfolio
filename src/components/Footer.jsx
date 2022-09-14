import React from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Footer (){

    function emailCode(){
        alert('brn_boggio@hotmail.com')
      }   

    return(
        <div className='w-full h-[160px] pt-4 bg-gradient-to-tl from-sky-500 to-indigo-500'> 
            <div className='text-center'>
            Desenvolvido por <strong>Bruno Medeiros</strong>
            </div>

        <ul className="flex justify-center pt-12 items-center gap-4">


            <li><a className="text-gray-300" 
                        href="https://www.linkedin.com/in/bruno-boggio/" target="blank">
                            <FaLinkedin size={30}/>
            </a></li>

            <li><a className=" text-black-300" 
                        href="https://github.com/bruno-boggio" target="blank">
                            <FaGithub size={30}/>
            </a></li>

            <li><a onClick={emailCode} className=" text-green-300" 
                        href="/">
                            <HiOutlineMail size={30}/>
            </a></li>
        
            
            <li><a className="text-red-300" 
                        href="/cv-bruno.pdf" download>
                            <BsFillPersonLinesFill size={30}/>
            </a></li>

        </ul>
        
        </div>
    )
}

export default Footer;