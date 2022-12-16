import React, { useState} from "react";
import { useEffect } from "react";


const CrudForm = ({addContacto, editContacto, editData}) => {

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    id: null,
    professor: '',
    periodo: '',
    dia: '',
    nivel: ''
  })

  useEffect(() => {
   if (editData !== null){
    setFormData(editData)
   }else{
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      professor: '',
      periodo: '',
      dia: '',
      nivel: '',
      id: null
    })
   }
  }, [editData])

 
 
 const handleSubmit =(e) => {
  e.preventDefault();
 
  if (formData.nome !== '' && formData.telefone !== '' && formData.email !== '' && formData.professor !== ''  && formData.nivel !== '' && formData.dia !== '' && formData.periodo !== '') {
  if (editData !== null){
    editContacto(formData)
  }else{
      formData.id = Date.now()
    addContacto(formData)
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      professor: '',
      periodo: '',
      dia: '',
      nivel: '',
      id: null
    })
  }
    }else{
      alert('Falta alguma informação.')
    }
  }
 

 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
 }
 
 return<>
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Sobre você</h2>
      <div className="vc">
        <label htmlFor="nome">Nome</label>
          <div>
            <input className='inserir' id='nome' type="text" placeholder=" Jose Alves" name='nome' onChange={handleChange} value={formData.nome} /> 
          </div>
          <label htmlFor="telefone">Telefone</label>
          <div>
            <input className='inserir' id='telefone' type="text" placeholder=" (00) 00000-0000"  name='telefone' onChange={handleChange} value={formData.telefone}/>
          </div>
          <label htmlFor="email">Email</label>
          <div>
            <input className='inserir' id='email' type="text" placeholder=" Jose@email.com"  name='email' onChange={handleChange} value={formData.email}/>
          </div>
      </div>
        <h2>Sobre o curso</h2>
      <div className="curso">
          <label for='professor'>Professor</label>
          <div>
            <select name="professor" id="professor" className="form-prof"  onChange={handleChange} value={formData.professor}>
                <option value>Selecione</option>
                <option >Alejandra</option>
                <option >Anibal</option>
                <option >Marbelia</option>
                <option>Cesar</option>
            </select>
        </div>
        <label for='dia'>Dia de la semana</label>
        <div>
          <select name="dia" id="dia" className="form-dia"  onChange={handleChange} value={formData.dia}>
              <option value>Selecione</option>
              <option >Segunda-feira</option>
              <option >Terça-feira</option>
              <option >Quarta-feira</option>
              <option>Quinta-feira</option>
              <option>Sexta-feira</option>
              <option>Sabado</option>
          </select>
        </div>
        <label for='periodo'>Turma</label>
        <div>    
        <select name="periodo" id="periodo" className="form-periodo"  onChange={handleChange} value={formData.periodo}>
            <option value>Selecione</option>
            <option >Manha</option>
            <option >Tarde</option>
            <option >Noite</option>
        </select>
        </div>
        <label for='nivel'>Nivel que desea cursar</label>
        <div>     
        <select name="nivel" id="nivel" className="form-nivel" onChange={handleChange} value={formData.nivel}>
            <option value>Selecione</option>
            <option >Iniciante</option>
            <option >Básico</option>
            <option >Meio</option>
            <option >Avanzado</option>
        </select>
        </div>
        <div>
        <input id="boton1" type="submit" value="Enviar" />
        <input id="boton" type="reset" value="Cancelar" />
        </div>
      </div>
   </form>
  

  </>
} 
export default CrudForm