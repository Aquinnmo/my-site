import { Link } from 'react-router-dom';
import React from 'react';
import '../style.css';

function Navbar ()
{
    return (
        <nav>
      <div className="navbar no-select">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/experience" className="nav-link">Experience</Link>
        <Link to="/interests" className="nav-link">Interests</Link>
      </div>
    </nav>
    )
}

export default Navbar;