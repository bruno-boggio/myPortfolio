import React from "react";
import Javascript from '../assets/javascript.png'
import Html from '../assets/html.png'
import ReactImg from '../assets/react.png'
import Css from '../assets/css.png'
import Github from '../assets/github.png'
import Node from '../assets/node.png'

function Skills(){
return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">

        {/* container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="text-4xl font-bold inline border-b-4 border-pink-600 ">
                <p className="pb-3 text-center">Habilidades</p>
                <p className="pb-3 text-center">Estas são as Tecnologias que tenho utilizado</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6">
                <div className="shadow-md  shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Html} alt="Html Icon"></img>
                    <p>HTML</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Css} alt="Html Icon"></img>
                    <p>CSS</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={ReactImg} alt="Html Icon"></img>
                    <p>React</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Javascript} alt="Html Icon"></img>
                    <p>Javascript</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Node} alt="Html Icon"></img>
                    <p>Node</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Github} alt="Html Icon"></img>
                    <p>Github</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Skills;