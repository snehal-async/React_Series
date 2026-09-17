import React, { useContext, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

import { Theme } from './Context/BlogContext'

const App = () => {
  let {theme,renderPages} = useContext(Theme);
  let data=useContext(Theme);
  console.log(data)
  return (
   <div className={`h-screen
      ${theme === 'dark' ?
         "bg-black text-white" 
        :
         "bg-white text-black"
    } flex flex-col gap-6`}>
      
      <Navbar/>

      <Home />
     
    </div>
  )
}

export default App
