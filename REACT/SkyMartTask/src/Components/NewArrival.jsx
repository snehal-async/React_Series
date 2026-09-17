import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductBox = ({ title, price, img }) => (
  <div className="bg-white border overflow-hidden shadow hover:shadow-lg transition">
    <img src={img} alt={title} className="w-full h-32 object-contain" />
    <div className="p-3 text-center">
      <h3 className="text-gray-800 text-sm font-semibold truncate">{title}</h3>
      <p className="text-lime-600 font-bold">${price}</p>
      <button className="mt-2 bg-lime-500 text-black px-3 py-1 rounded hover:bg-lime-600">
        🛍 Add
      </button>
    </div>
  </div>
);

const NewArrival = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products?limit=10");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const topRated = products.slice(0, 5);
  const newArrivals = products.slice(5, 10);

  return (
    <div className="bg-black p-10">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Top Rated */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">⭐ Top Rated</h2>
            <a href="/top-rated" className="text-lime-600 hover:underline">See all →</a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {topRated.map((p) => (
              <ProductBox key={p.id} title={p.title} price={p.price} img={p.thumbnail} />
            ))}
          </div>
        </div>

        {/* New Arrivals */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">🆕 New Arrivals</h2>
            <a href="/new-arrivals" className="text-lime-600 hover:underline">See all →</a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {newArrivals.map((p) => (
              <ProductBox key={p.id} title={p.title} price={p.price} img={p.thumbnail} />
            ))}
          </div>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-center">
        <div className="bg-blaack p-6 rounded-lg shadow rounded border border-gray-400">
          <h3 className="text-lime-600 font-bold">⚡ Fast Delivery</h3>
          <p className="text-gray-600">Same-day on select items</p>
        </div>
        <div className="bg-blaack p-6 rounded-lg shadow rounded border border-gray-400">
          <h3 className="text-lime-600 font-bold">🔒 Secure Payments</h3>
          <p className="text-gray-600">100% encrypted checkout</p>
        </div>
        <div className="bg-blaack p-6 rounded-lg shadow rounded border border-gray-400">
          <h3 className="text-lime-600 font-bold">💸 Best Prices</h3>
          <p className="text-gray-600">Price-match guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
