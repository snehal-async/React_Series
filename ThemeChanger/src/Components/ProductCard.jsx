import React, { useContext } from 'react'
import { Theme } from '../context/ThemeContext';

const ProductCard = () => {
    let {theme} = useContext(Theme);
  return (
    <div className={`w-[30%] ${theme==='dark'?'bg-black text-white' : 'bg-white text-black'} flex flex-col gap-8 rounded-xl p-6 shadow-xl`}>
        <div>
      <img src="https://img.indiaforums.com/article/1040x780/16/4237-radhakrishn-actor-sumedh-mudgalkar-is-back-on-social-media.jpg"/>
      </div>

        <div>
            <h1>Product name</h1>
            <p>Product price</p>
        </div>
        <div className='flex justify-between w-ful'>
            <button>Update</button>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default ProductCard
