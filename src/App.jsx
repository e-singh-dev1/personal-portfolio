import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import MainSection from './Components/MainSection'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import {BrowserRouter as Router,Routes ,Route } from 'react-router-dom';

function App() {
    return (
    
      <Router>
      <Navbar />
      <Routes>
      <Route exact path='/' element={<MainSection />}/>
      <Route  path='/Skills' element={<Skills />}/>
      <Route  path='/About' element={<About />}/>
      <Route  path='/Contact' element={<Contact />}/>
      </Routes>
      </Router>
    
  )
}

export default App
