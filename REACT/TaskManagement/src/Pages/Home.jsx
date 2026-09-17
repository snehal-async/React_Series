import React, { useContext } from 'react'
import { Theme } from '../Context/BlogContext'
import BlogCard from '../Components/BlogCard'

const Home = () => {

     let {theme} = useContext(Theme);
  return (
<>
{/* "text-black bg-white py-10 px-6 text-center" */}

      <div>
         <div className={`p-6 rounded-lg duration-300 py-10 px-6 text-center
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black "}`}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 font-bold">
        Welcome to <span className={`${
          theme === "dark" ? "text-teal-700" : "text-sky-700"
        }`}>Inkwell</span>
      </h1>
      <p className="text-10px text-gray-700 md:text-xl max-w-2xl mx-auto">
        Discover thoughtful articles on technology, programming, and software
        engineering from passionate writers.
      </p>
    </div>
    </div>
    <div>
     <BlogCard />
    </div>
</>
  )
}

export default Home
