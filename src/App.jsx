import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home";
import Interests from './pages/interests';
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
              <Route path="/interests" element={<Interests />} />
            </Routes>
          </main>
        </Router>
      );
}

export default App;