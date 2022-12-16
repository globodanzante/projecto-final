import { Link } from "react-router-dom";
import React from "react";
import ManzD from "../imagenes/manzDere.png"
import ManzI from "../imagenes/manzizq.png"
import ManzH from "../imagenes/manzHoja.png"
import  ManzV from"../imagenes/manzVirg.png"

function Header(){

  return(
  <header className="encabezado">
    <h2 className=" titulo">GM</h2>
    <Link to= '/'>
    <img src={ManzI} alt="Lado derecho"  className="ManzI"/>
    <img src={ManzD} alt="Lado derecho"  className="ManzD"/>
    <img src={ManzH} alt="Lado derecho"  className="ManzH"/>
    <img src={ManzV} alt="Lado derecho"  className="ManzV" />
   </Link>
    <nav className="menu">
      <Link to= '/Actividades'>
      <span>Actividades</span>
      </Link>
      <Link to= '/Cursos'>
      <span>Cursos</span>
      </Link>
      <Link to= '/Prematricula'>
      <span>Prematrícula</span>
      </Link>
    </nav>
  </header>
  )
  
}
export default Header


