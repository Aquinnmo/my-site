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
      <div class="home">
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

        <h2>Some languages and frameworks I know:</h2>
        <div class="languages">
            <img src="/java_logo.svg" className="logo fire" alt="Java" />
            <img src="/python_logo.svg" className="logo python" alt="Python" />
            <img src="/django_logo.svg" className="logo django" alt="Django" />
            <img src="/html_logo.svg" className="logo fire" alt="HTML" />
            <img src="/javascript_logo.svg" className="logo python" alt="JavaScript" />
            <img src="/git_logo.svg" className="logo django" alt="Git" />
            <img src="/vite.svg" className="logo vite" alt="Vite" />
            <img src="/react_logo.svg" className="logo vite" alt="React" />
            <img src="/linux_logo.svg" className="logo vanilla" alt="Linux" />
            <img src="/github_logo.svg" className="logo vanilla" alt="Github" />
            <img src="/gitlab_logo.svg" className="logo fire" alt="GitLab" />
            <img src="/c_logo.svg" className="logo vite" alt="C" />
            <img src="/css_logo.svg" className="logo vite" alt="CSS" />
        </div>
        <p className="read-the-docs">This site was made using React</p>
        <p className="read-the-docs">.svg images generously provided by SVG Repo</p>
      </div>
    );
  }
  
export default Home;