import React from "react";
import WeatherApi from '../assets/pic-weather.png'
import NotasApp from '../assets/pic-projeto-3.png'
import FinanceApp from '../assets/pic-projeto-4.png'
import QuizApp from '../assets/pic-projeto-5.png'

function Work(){
return (

    <div name="work" className="w-full  h-full text-gray-300 bg-gradient-to-tl from-sky-500 to-indigo-500">
        <div className="max-w-[1000px] mx-auto   p-4 flex flex-col justify-center w-full ">
             <div> 
            <p className="text-4xl font-bold inline  border-b-4 text-gray-300 border-pink-600">Projetos</p>
            <p className="py-6 ">Meus últimos Projetos</p>
        </div>    

            <div 
            className="grid sm:-cols-2 md:grid-cols-2 gap-4">

                {/* grid item */}
              <div style={{backgroundImage: `url(${WeatherApi})`}}
              className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                   {/* hover effects*/}     
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-black tracking-wider">
     React.Js Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://weather-api-sable.vercel.app/" target="blank">
                              <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">Demo</button>
                             </a>

                            <a href="https://github.com/bruno-boggio/weatherApi" target="blank">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                  {/* grid item */}
                <div style={{backgroundImage: `url(${NotasApp})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                   {/* hover effects*/}     
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-black tracking-wider">
     React.Js Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://app-tarefas-sooty.vercel.app/" target="blank">
                              <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">Demo</button>
                             </a>

                            <a href="https://github.com/bruno-boggio/tarefas" target="blank">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${FinanceApp})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                   {/* hover effects*/}     
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-black tracking-wider">
     React.Js Application
                        </span>
                        <div className="pt-8 text-center" >
                            <a href="https://finance-cripto.vercel.app/" target="blank">
                              <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">Demo</button>
                             </a>

                            <a href="https://github.com/bruno-boggio/Finance-Cripto" target="blank">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${QuizApp})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                   {/* hover effects*/}     
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-black tracking-wider">
     React.Js Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://quiz-app-mauve-nine.vercel.app/" target="blank">
                              <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">Demo</button>
                             </a>

                            <a href="https://github.com/bruno-boggio/QuizApp" target="blank">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">Code</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
          </div>
    </div>
   
)
}

export default Work;