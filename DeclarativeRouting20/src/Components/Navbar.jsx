import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[10%] flex items-center justify-between p-5'>
      <h1>Logo</h1>
      <div className='flex gap-10 text-xl'>
        <NavLink 
        className={({isActive})  => (isActive ? "text-red-700":"")} 
        to="/home">Home</NavLink>

         <NavLink 
        className={({isActive}) => (isActive ? "text-red-700":"")} 
        to="/about">About</NavLink>

         <NavLink 
        className={({isActive}) => (isActive ? "text-red-700":"")} 
        to="/contact">Contact</NavLink>

         <NavLink 
        className={({isActive}) => (isActive ? "text-red-700":"")} 
        to="/product">Product</NavLink>
      </div>
      <button>Sign Up</button>
    </div>
  )
}

export default Navbar
