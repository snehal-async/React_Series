import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "../Components/CategoryCard";
import NewArrivals from "../Components/NewArrival";
import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";

const Home = () => {
  const cards = [
    { icon: "🛍️", title: "Cart Items", desc: "In your bag" },
    { icon: "💰", title: "₹0.00", desc: "Cart Value" },
    { icon: "⭐", title: "5", desc: "Top Products" },
    { icon: "📦", title: "6", desc: "Categories" },
  ];

  const categories = [
    { icon: "💻", title: "Electronics", count: 17 },
    { icon: "👕", title: "Clothing", count: 2 },
    { icon: "🪑", title: "Furniture", count: 3 },
    { icon: "🏠", title: "Home", count: 14 },
    { icon: "⚽", title: "Sports", count: 8 },
    { icon: "🎒", title: "Accessories", count: 6 },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products); // ✅ correct array
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {/* Hero Section */}
     {/* Hero Section */}
<section className="flex flex-col md:flex-row justify-between items-center border border-gray-400 rounded-3xl px-4 sm:px-8 md:px-16 py-6 mt-10 ml-20 mr-20 bg-black text-gray-100">
  <div className="max-w-lg p-6 sm:p-10">
    <h4 className="text-gray-400 mb-2">GOOD EVENING 🌙</h4>
    <h1 className="text-3xl sm:text-4xl md:text-6xl mb-4">
      Welcome back, <span className="text-lime-400">Snehal!</span>
    </h1>
    <p className="text-gray-400 mb-6">
      Discover today's picks — hand-curated products across electronics,
      fashion, and more.
    </p>
    <div className="flex gap-4">
      <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-md">
        Shop Now
      </button>
      <button className="border border-lime-400 text-lime-400 font-semibold px-6 py-2 rounded-md">
        View All Products
      </button>
    </div>
  </div>

  {/* Highlight Boxes */}
  <div className="flex flex-col gap-5 mt-6 md:mt-0">
    <div className="bg-lime-950 p-4 rounded-xl text-center border border-lime-400 shadow-md">
      <h2 className="text-2xl sm:text-3xl font-bold text-lime-400">20+</h2>
      <p className="text-gray-400">Products Available</p>
    </div>
    <div className="bg-neutral-900 p-4 rounded-xl text-center border border-gray-400">
      <h2 className="text-2xl sm:text-3xl font-bold text-lime-400">Free</h2>
      <p className="text-gray-400">Delivery on ₹999+</p>
    </div>
  </div>
</section>


      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-10 bg-black">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-neutral-900 rounded-lg flex flex-col justify-center hover:bg-neutral-800 transition border border-gray-400 p-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-lime-400">
              {card.icon} {card.title}
            </h3>
            <p className="text-gray-400">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section className="px-10 sm:px-12 md:px-20 py-20 bg-black">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-2xl font-bold text-white">
            Shop by Category
          </h2>
          <a href="/categories" className="text-lime-400 hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={i} {...cat} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <NewArrivals />

      {/* Products Grid */}
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

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
