import React from 'react'

import Navbar from './Components/Navbar'
import Home from './Screens/Home'


const App = () => {
  return (
    <>
    <div className='bg-black h-screen'>
    <div>
      <Navbar/>

    </div>
    <div>
      <Home/>
    </div>



    </div>
    </>
  )
}

export default App
