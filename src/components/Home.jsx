import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

function Home (){
    return(
        <div name="home" className="bg-gradient-to-tl from-sky-500 to-indigo-500 w-full h-screen">
        
             {/* container */}
            <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center ">
                <p className="text-3xl py-1 text-black-900">Olá, meu nome é </p>
                <h1 className="my-name text-4xl py-1 sm:text-7xl typing-animation">Bruno ;)</h1>
                <h3 className="text-4xl py-1 sm:text-7xl">Sou um</h3>
                <h2 className="text-4xl sm:text-7xl py-1 font-bold text-[#000]">Programador</h2>
                <h2 className="front-text text-4xl sm:text-7xl py-1 font-bold typing-animation-text">Front-End.</h2>
                <div>
                    <button className="text-white mt-20 rounded-md border-2 px-6 py-4 my-2 flex items-center
                     hover:bg-pink-600 hover:border-pink-600">
                     <Link to="work"  smooth={true}  duration={600}> Projetos
                     </Link>
                     <span className="group-hover:rotate-90  duration-300">
                    </span>
                      </button>
                </div>
            </div>

        </div>
    )
}

export default Home;