import { Link } from 'react-router-dom';
import React from 'react';
import '../style.css';

function Navbar ()
{
    return (
        <nav>
      <div class="navbar">
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/projects"><h2>Projects</h2></Link>
        <Link to="/interests"><h2>Interests</h2></Link>
      </div>
    </nav>
    )
}

export default Navbar;