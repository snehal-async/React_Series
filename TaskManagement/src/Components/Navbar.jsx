import React, { useContext } from 'react'
import { Theme } from '../Context/BlogContext'

const Navbar = () => {
  let { theme, setTheme } = useContext(Theme);

  return (
    <div className={`border-b border-gray-300 flex justify-between items-center h-16 px-6 md:px-20
      ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          className={`h-10 w-auto m-2 ${theme === "dark" ? "invert" : ""}`}
          src="src/assets/logo.png"
          alt="Logo"
        />
        
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}
          className="hover:bg-teal-700 rounded-lg px-3 py-2 flex items-center justify-center"
        >
          {theme === "light" ? (
            <i className="ri-moon-line text-black"></i>
          ) : (
            <i className="ri-sun-line text-yellow-400"></i>
          )}
        </button>

        {/* Login / Signup */}
        <button className="hover:bg-teal-700 rounded-lg px-3 py-2">Login</button>
        <button className="bg-sky-800 text-white rounded-lg px-3 py-2">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
