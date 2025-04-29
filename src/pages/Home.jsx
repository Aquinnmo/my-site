import React, { useEffect } from "react";
import '../style.css';
import githubLogo from '/github_logo.svg';
import linkedInLogo from '/LinkedIn_icon.svg';
import emailIcon from '/email_icon.svg';
import { setupCounter } from '../counter.js';

function Home() {
    useEffect(() => {
      // once the DOM is up, wire up your counter
      setupCounter(document.getElementById('counter'));
    }, []);
  
    return (
      <div>
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
  
        <div className="card">
          <button id="counter" type="button"></button>
        </div>
  
        <p id="description"></p>
        <p className="read-the-docs">This site was made using React</p>
      </div>
    );
  }
  
export default Home;