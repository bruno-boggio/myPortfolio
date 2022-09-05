import React from "react";
import Picture from '../assets/picture.jpg'

function About(){


 return(
    <div name="about" className="back-color w-full h-screen">
        <div>
          <h1 className="text-6xl text-white text-center pt-24">Sobre</h1>
          <div className="text-center mt-12">
          <img className="pic sm:text-3xl" src={Picture}></img>
          <div><p className="texto sm:text-2xl text-center">
          
              Olá, Meu nome é <strong>Bruno Medeiros</strong>, tenho 27 anos.
              <br></br>
              Venho estudando programação desde Janeiro 
              deste ano e meu foco é trabalhar com Front-End. 
              Tenho um background comercial no qual trabalhei por mais de 05 anos como vendedor,
              saindo de promotor de vendas até vendedor de autosserviço,
              desde que descobri a programação tenho me dedicado
              totalmente a isso e procuro cada dia me aperfeiçoar
              mais e aprender novas tecnologias.</p></div>

          </div>
        </div>
    </div>
 )
}

export default About;