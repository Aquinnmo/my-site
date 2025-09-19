import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence, motion } from 'framer-motion';
import Home from "./pages/Home";
import Interests from './pages/Interests';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import MontgomerySoftwareFoundry from './pages/MontgomerySoftwareFoundry';
import Navbar from './components/Navbar';
import React from 'react';
import ScrollToTop from './components/ScrollToTop'; // Import the new component
import PageNotFound from './pages/404Page'; // Import the 404 page

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/foundry" element={<MontgomerySoftwareFoundry />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Analytics />
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <Navbar />
      <main className="page-content">
        <AnimatedRoutes />
      </main>
    </Router>
  );
}

export default App;