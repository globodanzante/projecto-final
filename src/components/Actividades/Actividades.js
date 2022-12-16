import React from 'react';
import CardActividades from './cardActividades'
import Saludos from './img/saludos.png'
import Abecedario from './img/abc.png'
import Numeros from './img/numeros.png'
import Verbos from './img/verbos.png'
import './Actividades.css'


export default function Actividades() {


  return (
    <div>
      <h1 className='titulo-act'>Atividades</h1>
          <CardActividades 
            classname='cardActiv'
            image= {Saludos}
            nome='Saudações e Despedidas'
            Descripcion= 'Aprender a saudar, responder e despedir em espanhol, assim como a apresentar-te'

          />
          <CardActividades 
            classname='cardActiv'
            image= {Abecedario}
            nome='O alfabeto'
            Descripcion= 'Conhecer as letras, seus nomes e suas pronuncias'
          />
          <CardActividades 
            classname='cardActiv'
            image= {Numeros}
            nome='Os números'
            Descripcion= 'Aprende os nomes de cada número'

          />
          <CardActividades 
            classname='cardActiv'
            image= {Verbos}
            nome='Os verbos'
            Descripcion= 'Aprende verbo em presente simple e suas conjugaçoes'

          />
        
    </div>
  )
}