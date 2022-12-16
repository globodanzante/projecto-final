import React from 'react';


export default function CardCurso(props) {

  return (
    <div className='cursoscar'>
    <div className='cardCurso'>
      <img src= {props.image} alt= ''  className='imgCardcur'/>
      <h3 className='tituloCarsCurso'>Professor/a: {props.nome}</h3>
      <p className='pcardcurso'>Email: {props.email}</p>
      <p className='pCardcurso'>{props.Descripcion}</p>
      
    </div>
    </div>
  )
}