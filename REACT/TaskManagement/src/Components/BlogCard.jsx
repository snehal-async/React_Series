import React, { useContext } from 'react'
import { Theme } from '../Context/BlogContext'

const BlogCard = () => {
  let { theme } = useContext(Theme);

  const articles = [
    {
      tags: ["React", "JavaScript", "Web Development"],
      title: "Getting Started with React Hooks",
      description: "Learn how React Hooks can simplify your component logic and make your code more reusable.",
      author: "Sarah Chen",
      date: "January 15, 2024"
    },
    {
      tags: ["Node.js", "API", "Backend"],
      title: "Building Scalable APIs with Node.js",
      description: "Explore best practices for creating robust and scalable REST APIs using Node.js and Express.",
      author: "Sarah Chen",
      date: "January 20, 2024"
    },
    {
      tags: ["Programming", "Best Practices", "Software Engineering"],
      title: "The Art of Clean Code",
      description: "Discover the principles and practices that separate good code from great code.",
      author: "Marcus Johnson",
      date: "February 1, 2024"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-[50px]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="p-4 text-2xl md:text-3xl font-medium">Latest Articles</h1>
        <p className="text-gray-600 p-4">{articles.length} articles</p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`border rounded-lg p-6 max-w-md mx-auto
            ${theme === "dark"
                ? "bg-black text-white border-amber-50"
                : "bg-white text-black border-gray-200"
              }`}
          >

            {/* Tags */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {article.tags.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-700 text-sm rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>

            {/* Description */}
            <p className="text-gray-600 mb-4">{article.description}</p>

            {/* Footer */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <i className="ri-user-line text-gray-400"></i>
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line text-gray-400"></i>
                <span>{article.date}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default BlogCard