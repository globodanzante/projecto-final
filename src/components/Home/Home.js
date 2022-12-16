import React from 'react';
import mujer from './img/mujer.png'
import Manzana from './img/manzana.png'
import Abecedario from './img/abc.png'
import Saludos from './img/saludos.png'
import Oferta from './img/oferta.png'
import'./Home.css'

export default function Home() {

  return (
    <>
   
    <div className='conteudo'>
      <h2 className='titulo-home'>Cursos e atividades para aprender espanhol</h2>
      <img src={mujer} alt= 'Estudiante' className='mujer'/>
      <img src={Manzana} alt= 'Estudiante' className='manzana'/>
      <div className='info-geral'>
        <p>
          O brasileiro e desejas aprender espanhol, aquí tem a oportunidade de utlizar nossos recursos e também formar parte de nossas turmas de espanhol e totalmente online. Matricule-se!
        </p>
      </div>   
        <div className='home-act'> 
        <h3 className='titulo-home1'> Atividades destacadas</h3>
        <div className='destaque-home'>
        <div className='destaque'>
          <img src={Abecedario} alt='abecedario' className='activ-home' />
          <p className='desc-home'>Descubra as diferencias no alfabeto</p>
        </div>
        <div className='destaque'>
          <img src={Saludos} alt='saludos' className='activ-home'/>          
          <p className='desc-home1'>Aprenda dinamicamente saudos despedidas e presentaçoes</p>
        </div>
        </div> 
      </div>
      <div className='convite'>
        <h1 className='convite-oferta'> Matricule-se!</h1>
        <img src={Oferta} alt='etiqueta de oferta' className='descuento-home'/>
      </div>
    </div>
    </>
  )
}