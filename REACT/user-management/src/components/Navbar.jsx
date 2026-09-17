import React from "react";

const Navbar = ({ setToggle, toggle }) => {
  return (
    <div className="h-[10%] rounded-xl justify-between px-10 flex items-center bg-red-100">
      <div className="h-[70%]">
        <img
          className="h-full"
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt=""
        />
      </div>
      <div className="flex gap-15  items-center text-2xl font-semibold">
        <p className="text-red-950 text-2xl hover:text-blue-500 cursor-pointer transition font-bold font-serif">Home</p>
        <p className="text-red-950 text-2xl hover:text-blue-500 cursor-pointer font-bold font-serif">About</p>
        <p className="text-red-950 text-2xl hover:text-blue-500 cursor-pointer font-bold font-serif">Contact</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className=" bg-blue-500 font-bold text-white border-2 rounded-lg px-5 py-2 cursor-pointer font-serif text-2xl hover:bg-blue-800"
      >
        {toggle ? 'Show User' : 'Add User'}
      </button>
    </div>
  );
};

export default Navbar;