import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Uppermain from './Uppermain.js'
const categories = [
  { name: "General Knowledge", desc: "Test your general knowledge with a variety of questions"},
  { name: "Science & Technology", desc: "Explore the wonders of science and technology"},
  { name: "Mathematics", desc: "Challenge your math skills with various problems"},
  { name: "History & Geography", desc: "Dive into history and geography with engaging quizzes" },
  { name: "English Language & Grammar", desc: "Improve your English language and grammar skills" },
  { name: "Logical Reasoning & Aptitude", desc: "Sharpen your logical reasoning and aptitude"},
  { name: "Programming (JavaScript, Python, C++, etc.)", desc: "Test your programming knowledge in various languages"},
  { name: "Web Development", desc: "Learn and test your web development skills"},
  { name: "AI & Machine Learning", desc: "Explore the world of AI and machine learning"},
  { name: "Cybersecurity", desc: "Learn about cybersecurity and test your knowledge"},
  { name: "Movies & TV Shows", desc: "Test your knowledge of movies and TV shows" },
  { name: "Sports & Games", desc: "Challenge your knowledge of sports and games"},
  { name: "World Capitals & Countries", desc: "Learn about world capitals and countries"},
  { name: "Health & Fitness", desc: "Learn about health and fitness"},
  { name: "Current Affairs & News", desc: "Stay updated with current affairs and news"},
];

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="categories bg-[#3873e0] w-full overflow-hidden pb-[5rem] ">
      {/* Header */}
      <Uppermain />
      <div className="categories-header pb-3 flex items-center justify-center rounded-sm py-12">
        <h2 className="text-[2rem] md:text-[3rem] font-bold text-[#000102]">Categories</h2>
      </div>

      {/* Categories List - Horizontal Scroll */}
      <div className="categories-container flex gap-4 flex-wrap px-4 justify-center items-center rounded-t-3xl">
        {categories.map((category, index) => (
          <div key={index} className="category bg-gray-200 p-1 rounded-xl shadow-md w-full sm:w-[45%] md:w-[30%] h-[25rem] md:h-[23rem] flex-shrink-0 snap-center flex flex-col justify-between items-center">
            <div className="w-full h-[10rem] md:h-[12rem] object-cover rounded bg-[#afefff] flex items-center justify-center">
              <h2 className="text-2xl PlayfairDisplay font-bold flex justify-center items-center">{category.name}</h2>
            </div>
              
            <h3 className="font-bold text-lg mt-2 text-center ">{category.name}</h3>
            <p className="text-sm text-center">{category.desc}</p>
            
            {/* Button to Start Quiz */}
            <Link
              to={`/ExamEase/quiz/${category.name}`}
              className="block bg-blue-500 text-white p-2 w-[80%] mt-2 text-center hover:bg-blue-600 transition rounded-full"
            >
              Start {category.name} Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;