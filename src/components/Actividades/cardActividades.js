import React from 'react';


export default function CardActividades(props) {

  return (
    <div className='cardActiv'>
      <img src= {props.image} alt= ''  className='imgCard'/>
      <h3 className='tituloCarsActv'>{props.nome}</h3>
      <p className='pCardActv'>{props.Descripcion}</p>
      
    </div>
  )
}