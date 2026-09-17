import React from 'react'

const Navbar = ( { setToggle, toggle } ) => {
  return (
    <div className="h-[80px] rounded-xl justify-between px-10 flex items-center bg-black">
      <div className="h-[70%]">
        <img
          className="h-full"
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt=""
        />
      </div>
      <div className="flex gap-10 items-center text-2xl font-semibold">
        <p className="text-amber-100">Home</p>
        <p className="text-amber-100">About</p>
        <p className="text-amber-100">Contact</p>
      </div>

      <button 
       onClick={() => setToggle((prev)=> !prev)}
       className='bg-blue-100 text-blue-900 border 
       rounded-xl px-5 py-3 cursor-pointer text-2xl'>
      {toggle ? "Show User" : "Add User"}
       </button>
</div>
  )
}

export default Navbar
