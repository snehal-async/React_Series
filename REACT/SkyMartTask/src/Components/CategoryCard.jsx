const CategoryCard = ({ icon, title, count }) => (
  <div className="bg-white p-6 rounded-lg text-center flex flex-col justify-center hover:bg-neutral-800 transition">
    <h3 className="text-xl text-black">{icon} {title}</h3>
    <p className="text-gray-400">{count} items</p>

  </div>
);
export default CategoryCard;
