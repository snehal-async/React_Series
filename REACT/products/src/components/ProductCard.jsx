import React from 'react'

const ProductCard = ({products, deleteProduct}) => {
    
  return (
    <div className="w-[15%]  border p-3 rounded-xl flex flex-col gap-4">
        <div className='w-full h-[60%] '>
            <img
            className='h-full w-full object-cover rounded-xl'
            src={products.image}>
            </img>
        </div>
      <div className='text-sm'>
        <p className='text-sm '>{products.title}</p>
        <p className='text-2xl text-green-700 font-bold'>${products.price}</p>
        <p>{products.category}</p>
      </div>
      <button
      onClick={() => deleteProduct(products.id)}
      className='px-2 py-2 bg-red-700 text-white rounded-xl'>Remove</button>
    </div>
  )
}

export default ProductCard
