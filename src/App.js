import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home/Home'
import Curso from './components/Curso/Cursos'
import Actividades from './components/Actividades/Actividades'
import Prematricula from './components/Prematricula/Prematricula'
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  return (
  <BrowserRouter>
       <Header />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/actividades' element={<Actividades />} />
          <Route path='/cursos' element={<Curso />} />
          <Route path='/prematricula' element={<Prematricula />} />
         </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
