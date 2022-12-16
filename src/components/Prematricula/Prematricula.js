import React, {useState, useEffect} from "react";
import Crudcards from "./Crudcards";
import CrudForm from './CrudForm';
import  { helpFetch } from "./helpers/helpFetch"
import Loader from "./Loader"
import './prema.css'


const Prematricula = () => {
 
   const API = helpFetch()
   const [editData, setEditData] = useState(null);
   const [contactos, setContactos] = useState([])
   const [loading, setLoading] = useState(false)

    
   useEffect(() => {
    setLoading(true)
   API.get('info').then((response) => {
    if(!response.error) setContactos(response)
    setLoading(false)
   })
  }, [])

  const addContacto = (contacto) => {''
  const options = {
    body: contacto
  }
API.post('info', options).then(response => {
  if(!response.error) setContactos([...contactos, contacto  ])
  })

}
const editContacto = (contacto) => {
  const options = {
    body: contacto
  }
API.put('info', options, contacto.id).then(response => {
  if(!response.error) {
    const newContactos = contactos.map(el => el.id === contacto.id ? contacto : el)
    setContactos(newContactos)
    setEditData(null)
  }
})
}

const deleteContacto = (id) => {
  const isDelete = window.confirm(`Desejas eliminar o contato com id:${id}`)
  if(isDelete) {
    API.del("info", id).then( response => {
      if (!response.error){
      const newContactos = contactos.filter(el => el.id !== id)
      setContactos(newContactos)
      } 
    })
}
}

  return<>
  <h1 className="tituloCur"> Pré-mátricula</h1>
  <CrudForm addContacto={addContacto} editContacto={editContacto} editData={editData}/>
  {loading && <Loader />  }
  <Crudcards contactos={contactos} setEditData={setEditData} deleteContacto={deleteContacto}/>

  </>
}
export default Prematricula