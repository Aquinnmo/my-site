import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home";
import Contact from './pages/contact';
import Projects from './pages/projects';
import Navbar from './components/Navbar';
import React from 'react';

function App()
{
    return (
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </Router>
      );
}

export default App;