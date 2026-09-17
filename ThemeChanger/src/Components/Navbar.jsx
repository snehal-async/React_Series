import React, { useContext } from 'react'
import { Theme } from '../context/ThemeContext';
import { NavLink } from 'react-router';

const Navbar = () => {

    // let {theme,setTheme}=useContext(Theme);

    let {theme,setTheme,setRenderPages,renderPages}=useContext(Theme);
      

  return (
    <div
     className={`h-[10%]
        ${
            theme==="dark" ? "text-white bg-black ":" bg-white text-black"
        }
          flex items-center shadow-2xl justify-between `
        } 
         >
 
      <h1 className='text-3xl font-bold p-5'>Logo</h1>
      <div className=' flex items font-semibold text-2xl items-center text-center gap-10 m-10'>
        
        <NavLink className={({isActive})=>
            isActive ? "text-red-700" : "text-white"
        } 
        to="/home">Home
        </NavLink>

        <NavLink className={({isActive})=>
            isActive ? "text-red-700" : "text-white"
        } 
          to="/about">About</NavLink>
        <NavLink className={({isActive})=>
            isActive ? "text-red-700" : "text-white"
        }  to="/contact">Contact</NavLink>

      </div>
      <button 
      onClick={()=>
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
      }
       className={`px-5 py-3 m-5 text-2xl rounded-xl ${theme === 'dark' ? "text-white bg-black": "text-black bg-white border-black"} border border-amber-50 cursor `}
       >
        {theme==="light" ? "dark" : "light"}
        </button>
    </div>
  )
}

export default Navbar
