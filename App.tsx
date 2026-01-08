
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Contact from './pages/Contact';
import LegalPaper from './pages/LegalPaper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* pt-20 added to offset the fixed solid navbar (approx 80px) */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal-paper" element={<LegalPaper />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
