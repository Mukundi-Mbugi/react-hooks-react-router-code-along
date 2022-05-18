import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'

function App() {
  return (
    <BrowserRouter>
  <NavBar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Login" element={<Login />} />   
    </Routes>
  </BrowserRouter>
  )
}

export default App