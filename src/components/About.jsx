import React, {useState} from "react";
import Picture from '../assets/bruno-pic.jpg'


function About(){

    const [about,setAbout] = useState(true)  
    const [techs, setTechs] = useState(true)
    const [courses, setCourses] = useState(true)
 
    return(
    <div name="about" className="back-color w-full h-screen">
        <div className=" text-center pt-1">
          <div className="text-center mt-1"></div>
          <img className="pic sm:text-3xl" alt="myself" src={Picture}></img>
          
          <div className="about-div pb-1">
            <button type="button" className="about-btn" onClick={ ()=> setAbout(!about)}> Sobre </button>
            {about === false ? null : <p className="texto">
            Profissional em transição de carreira para área de tecnologia, tendo foco em
            desenvolvimento Front-End.
            </p>
          }
          <button className="about-btn" onClick={ ()=> setTechs(!techs)} >Tecnologias</button> 
          {techs === false ? null : <p className="texto">HTML, CSS, Javascript, React Js, Api's, Jquery, Node, Git & Github </p>}   

          <button className="about-btn" onClick={ ()=> setCourses(!courses)}>Cursos</button> 
          {courses === false ? null : <ul className="texto">

          <li>Html e Css Essencial (+ 11 horas) </li>   

          <li>Curso programador br FullStack (+70 horas)</li>

          <li>TipsCode React Js (+ 30 horas)</li>   

          </ul>} 
          </div>
        </div>
        
    </div>
 )
}

export default About;