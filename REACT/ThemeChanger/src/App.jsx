import React, { useContext, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import { Theme } from './context/ThemeContext'
import ProductCard from './Components/ProductCard'
import Contact from './Components/Contact'
import { Route, Routes } from 'react-router'
const App = () => {
  let {theme,renderPages}=useContext(Theme)
  let data=useContext(Theme)
  console.log(data)
  return (
    <div className={`h-screen
      ${theme === 'dark' ?
         "bg-gray-800" 
        :
         "bg-white"
    } flex flex-col gap-6`}>
      <Navbar/>
      <div className="h-[90%] px-[100px]">
     
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      </div>
    </div>
  )
}
export default App
