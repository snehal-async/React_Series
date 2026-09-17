import React from 'react'

const Shop = () => {
  return (
    <div>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6 bg-black">
              {products.map((elem) => (
                <ProductCard
                  key={elem.id}
                  products={{
                    img: elem.thumbnail,
                    title: elem.title,
                    price: elem.price,
                  }}
                />
              ))}
            </div>
    </div>
  )
}

export default Shop
