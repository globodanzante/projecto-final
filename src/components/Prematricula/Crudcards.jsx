import React from "react";



const MatriculaHecha = ({ contactos, setEditData, deleteContacto }) => {
  return<>
  <h2 className="tituloCur">Contactos</h2>
  
        {
          contactos.length === 0 ? <span>No tem informação</span>
          : contactos.map((contacto, index) => {
          return <div className="contac">
                  <div className="card">  
                    <div className="infocards" key={index}>
                      <span id="info" className="nome">Nome: {contacto.nome}</span>
                      <span id="info" className="telefone">Telefone: {contacto.telefone}</span>
                      <span id="info" className="email">Email: {contacto.email}</span>
                      <span id="info" className="profesor">Professor: {contacto.professor}</span>
                      <span id="info" className="periodo">Periodo: {contacto.periodo}</span>
                      <span id="info" className="dia">Dia de la semana: {contacto.dia}</span>
                      <span id="info" className="nivel">Nivel: {contacto.nivel}</span>
                    </div>
                    <div className="botomcards">
                      <button className="btn" onClick={() => setEditData(contacto)}>Editar</button>
                      <button className="btn1" onClick={() => deleteContacto(contacto.id)}>Eliminar</button>
                    </div>
                  </div>
                </div>
          } )
        } 
   
  
  </>
}
export default MatriculaHecha