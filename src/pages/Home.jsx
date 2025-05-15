import React, { useEffect, useState } from 'react'; 
import '../style.css';
import githubLogo from '/github_logo.svg';
import linkedInLogo from '/LinkedIn_icon.svg';
import emailIcon from '/email_icon.svg';
import Rotating_Description from "../components/Rotating_Description.jsx";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";

function Home() {
    // Add state to track navbar height
    const [navbarHeight, setNavbarHeight] = useState(0);
    // Additional offset for gradient fade effect
    const gradientOffset = 20;

    // Effect to measure navbar height and update state
    useEffect(() => {
        const updateNavbarHeight = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                setNavbarHeight(navbar.offsetHeight);
            }
        };

        // Initial measurement
        updateNavbarHeight();

        // Update on window resize
        window.addEventListener('resize', updateNavbarHeight);
        
        // Cleanup listener
        return () => window.removeEventListener('resize', updateNavbarHeight);
    }, []);

    return (
      <div className="home" style={{ marginTop: `${navbarHeight + gradientOffset}px` }}>
        <a href="mailto:aquinnmo@outlook.com">
          <img src={emailIcon} className="logo vanilla" alt="email" />
        </a>
        <a
          href="https://linkedin.com/in/adam-montgomery-05a936315"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a
          href="https://github.com/Aquinnmo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} className="logo vanilla" alt="Github logo" />
        </a>
  
        <h1>Hello I'm Adam!</h1>

        <div className="rotating-description">
          <Rotating_Description />
        </div>
  
        <div className="card">
          <Counter />
        </div>        <h2>Some languages, frameworks, and tools I use:</h2>
        
        {/* Desktop version of the logo grid */}
        <div className="languages-desktop no-select">
            <div className="logo-container" data-tooltip="Java">
              <img src="/java_logo.svg" className="logo fire" alt="Java" />
            </div>
            <div className="logo-container" data-tooltip="Python">
              <img src="/python_logo.svg" className="logo python" alt="Python" />
            </div>
            <div className="logo-container" data-tooltip="Django">
              <img src="/django_logo.svg" className="logo django" alt="Django" />
            </div>
            <div className="logo-container" data-tooltip="HTML">
              <img src="/html_logo.svg" className="logo fire" alt="HTML" />
            </div>
            <div className="logo-container" data-tooltip="JavaScript">
              <img src="/javascript_logo.svg" className="logo python" alt="JavaScript" />
            </div>
            <div className="logo-container" data-tooltip="Git">
              <img src="/git_logo.svg" className="logo django" alt="Git" />
            </div>
            <div className="logo-container" data-tooltip="Vite">
              <img src="/vite.svg" className="logo vite" alt="Vite" />
            </div>
            <div className="logo-container" data-tooltip="React">
              <img src="/react_logo.svg" className="logo vite" alt="React" />
            </div>
            <div className="logo-container" data-tooltip="Linux">
              <img src="/linux_logo.svg" className="logo vanilla" alt="Linux" />
            </div>
            <div className="logo-container" data-tooltip="Github">
              <img src="/github_logo.svg" className="logo vanilla" alt="Github" />
            </div>
            <div className="logo-container" data-tooltip="GitLab">
              <img src="/gitlab_logo.svg" className="logo fire" alt="GitLab" />
            </div>
            <div className="logo-container" data-tooltip="C">
              <img src="/c_logo.svg" className="logo vite" alt="C" />
            </div>
            <div className="logo-container" data-tooltip="CSS">
              <img src="/css_logo.svg" className="logo vite" alt="CSS" />
            </div>
            <div className="logo-container" data-tooltip="MongoDB">
              <img src="/mongodb_logo.svg" className="tech logo django" alt="MongoDB" />
            </div>
            <div className="logo-container" data-tooltip="TypeScript">
              <img src="/typescript_logo.svg" className="tech logo vite" alt="Typescript" />
            </div>
            <div className="logo-container" data-tooltip="Claude">
              <img src="/claude_logo.svg" className="tech logo fire" alt="Claude" />
            </div>
            <div className="logo-container" data-tooltip="Render">
              <img src="/render_logo.svg" className="tech logo vanilla" alt="Render" />
            </div>
            <div className="logo-container" data-tooltip="Vercel">
              <img src="/vercel_logo.svg" className="tech logo vanilla" alt="Vercel" />
            </div>
            <div className="logo-container" data-tooltip="Node.js">
              <img src="/nodejs_logo.svg" className="tech logo django" alt="Node.js" />
            </div>
            <div className="logo-container" data-tooltip="Gemini">
              <img src="/gemini_logo.svg" className="tech logo vite" alt="Gemini" />
            </div>
            <div className="logo-container" data-tooltip="Microsoft Copilot">
              <img src="/copilot_logo.svg" className="tech logo vanilla" alt="Copilot" />
            </div>
            <div className="logo-container" data-tooltip="Cursor">
              <img src="/cursor_logo.svg" className="tech logo vanilla" alt="Cursor" />
            </div>
        </div>
        
        {/* Mobile version of the logo grid - same content but with different styling */}
        <div className="languages-mobile no-select">
            <div className="logo-container" data-tooltip="Java">
              <img src="/java_logo.svg" className="logo fire" alt="Java" />
            </div>
            <div className="logo-container" data-tooltip="Python">
              <img src="/python_logo.svg" className="logo python" alt="Python" />
            </div>
            <div className="logo-container" data-tooltip="Django">
              <img src="/django_logo.svg" className="logo django" alt="Django" />
            </div>
            <div className="logo-container" data-tooltip="HTML">
              <img src="/html_logo.svg" className="logo fire" alt="HTML" />
            </div>
            <div className="logo-container" data-tooltip="JavaScript">
              <img src="/javascript_logo.svg" className="logo python" alt="JavaScript" />
            </div>
            <div className="logo-container" data-tooltip="Git">
              <img src="/git_logo.svg" className="logo django" alt="Git" />
            </div>
            <div className="logo-container" data-tooltip="Vite">
              <img src="/vite.svg" className="logo vite" alt="Vite" />
            </div>
            <div className="logo-container" data-tooltip="React">
              <img src="/react_logo.svg" className="logo vite" alt="React" />
            </div>
            <div className="logo-container" data-tooltip="Linux">
              <img src="/linux_logo.svg" className="logo vanilla" alt="Linux" />
            </div>
            <div className="logo-container" data-tooltip="Github">
              <img src="/github_logo.svg" className="logo vanilla" alt="Github" />
            </div>
            <div className="logo-container" data-tooltip="GitLab">
              <img src="/gitlab_logo.svg" className="logo fire" alt="GitLab" />
            </div>
            <div className="logo-container" data-tooltip="C">
              <img src="/c_logo.svg" className="logo vite" alt="C" />
            </div>
            <div className="logo-container" data-tooltip="CSS">
              <img src="/css_logo.svg" className="logo vite" alt="CSS" />
            </div>
            <div className="logo-container" data-tooltip="MongoDB">
              <img src="/mongodb_logo.svg" className="tech logo django" alt="MongoDB" />
            </div>
            <div className="logo-container" data-tooltip="TypeScript">
              <img src="/typescript_logo.svg" className="tech logo vite" alt="Typescript" />
            </div>
            <div className="logo-container" data-tooltip="Claude">
              <img src="/claude_logo.svg" className="tech logo fire" alt="Claude" />
            </div>
            <div className="logo-container" data-tooltip="Render">
              <img src="/render_logo.svg" className="tech logo vanilla" alt="Render" />
            </div>
            <div className="logo-container" data-tooltip="Vercel">
              <img src="/vercel_logo.svg" className="tech logo vanilla" alt="Vercel" />
            </div>
            <div className="logo-container" data-tooltip="Node.js">
              <img src="/nodejs_logo.svg" className="tech logo django" alt="Node.js" />
            </div>
            <div className="logo-container" data-tooltip="Gemini">
              <img src="/gemini_logo.svg" className="tech logo vite" alt="Gemini" />
            </div>
            <div className="logo-container" data-tooltip="Microsoft Copilot">
              <img src="/copilot_logo.svg" className="tech logo vanilla" alt="Copilot" />
            </div>
            <div className="logo-container" data-tooltip="Cursor">
              <img src="/cursor_logo.svg" className="tech logo vanilla" alt="Cursor" />
            </div>
        </div>
        <p className="read-the-docs">This site was made by me! <Link to="/projects">Take a look at what I used!</Link></p>
        <br></br>
      </div>
    );
  }
  
export default Home;