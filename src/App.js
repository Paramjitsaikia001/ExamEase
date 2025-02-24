import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Component/main';
import Categories from './Component/categories';
import GoogleAnalytics from "./GoogleAnalytics";
import Random from './Component/random';
import Quiz from './Component/Quiz';
import Footer from './Component/footer';
import AboutUs from './Component/aboutus';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#00e1ff] font-poppins">
      <GoogleAnalytics />
        <Routes>
          <Route path="/ExamEase/" element={<Main />} />
          <Route path="/ExamEase/categories" element={<Categories />} />
          <Route path="/ExamEase/random" element={<Random />} />
          <Route path="/ExamEase/About" element={<AboutUs />} />
          <Route path="/ExamEase/quiz/:category" element={<Quiz />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;