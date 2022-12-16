import React from 'react';
import CardCurso from './cardCurso'
import Ale from './img/ale.jpeg'
import Anibal from './img/anibal.jpeg'
import Marbelia from './img/Marbe.jpeg'
import Cesar from './img/cesar.jpeg'
import './cursos.css'

export default function Cursos() {

  return (
    <div>
      <h1 className='tituloCur'>Cursos</h1>
      <p className='infoCurso'>
        Você pode escolher entre cursos na modalidade para iniciante, que já tem um conhecimento básico, meio e avançado,
        tão bem fazemos teste de nivelação e voce pode estudar de acordo con seu conhecimento e com o proposito que deseja, como viajens, estudos, empregos, etc.
      </p>
      <h1 className='tituloCur'>Professores</h1>
        <div className='cursoscar'>
        <CardCurso 
          classname='cardcurso'
          image= {Ale}
          nome='Alejandra Delgado Diaz'
          email="Globodanzante@gmail.com"
          Descripcion= 'Professora formada na área de espanhol com 15 anos de experiencia'

        />
        <CardCurso 
          classname='cardcurso'
          image= {Anibal}
          nome='Aníbal Jose Jimenez Mendoza'
          email='Anibaljm1011@gmail.com'
          Descripcion= 'Professor e pedagogo espedializado na área de letras'
        />
        <CardCurso  
          classname='cardcurso'
          image= {Marbelia}
          nome='Marbelia Mercedes La Rosa'
          email='vitti.larosa@gmail.com'
          Descripcion= 'Professora formada na área de idiomas com 20 anos de experiencia'

        />
        <CardCurso 
          classname='cardcurso'
          image= {Cesar}
          nome='Cesar Rafael Pastrano Bolivar'
          email='cepastra@gmail.com'
          Descripcion= 'Pedagogo e professor, com 13 anos de experiencia '

        />
    </div>  
    </div>
  )
}