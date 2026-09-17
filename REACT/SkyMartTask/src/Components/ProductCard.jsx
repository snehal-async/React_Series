import React from "react";

const ProductCard = ({ products }) => {
  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={products?.img}
        alt={products?.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-gray-200 font-semibold">{products?.title}</h3>
        <p className="text-lime-400 font-bold">₹{products?.price?.toFixed(2)}</p>


        <button
          className="m-3 bg-lime-400 text-black p-2 rounded hover:bg-lime-500 transition"
        >
          Add to Cart
        </button>
        <button
          className="m-3 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
        >
          Remove from Cart
        </button>

      
      </div>
    </div>
  );
};

export default ProductCard;
