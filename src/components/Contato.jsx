import React from "react";

function Contato(){
return(
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form method="post" action="https://getform.io/f/c3a7d952-4026-43b7-9503-86929c9fcf01" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                Contato
                </p>
                <p className="text-gray-300 py-4">Me envie uma mensagem ou me envie um Email - brn_boggio@hotmail.com</p>
            </div>
            <input type="text" placeholder="Nome" name="name"/>
            <input className="my-4 p-2 bg-[#fff]" type="email" placeholder="Email" name="email"/>
            <textarea className="bg-[#fff] p-2"  name="message" rows="10" placeholder="Mensagem"></textarea>
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Lets collaborate</button>
        </form>
    </div>
)
}

export default Contato;