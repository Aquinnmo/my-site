import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
    // Add state to track navbar height and window width
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // Additional offset for gradient fade effect
    const gradientOffset = 20;

    // Effect to measure navbar height and update state
    useEffect(() => {
        const updateMeasurements = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                setNavbarHeight(navbar.offsetHeight);
            }
            setWindowWidth(window.innerWidth);
        };

        // Initial measurement
        updateMeasurements();

        // Update on window resize
        window.addEventListener('resize', updateMeasurements);
        
        // Cleanup listener
        return () => window.removeEventListener('resize', updateMeasurements);
    }, []);
    
    // Use a smaller offset on small screens
    const effectiveOffset = windowWidth <= 768 ? 2 : gradientOffset;
    
    return (
        <div className="project-list" style={{ marginTop: `${navbarHeight + effectiveOffset}px` }}>
            <div class="interest-list">
                    <div class="interest-item" id="databasing-system">
                    <div class="display">                        <h1>Custom Enterprise-Level Databasing System</h1>
                        <h3>Built With:</h3>
                        <div className="languages no-select projects-logo-grid">
                            <div className="logo-container" data-tooltip="Next.js">
                                <img src="/nextjs_logo.svg" className="logo vanilla" alt="Next.js" />
                            </div>
                            <div className="logo-container" data-tooltip="Supabase">
                                <img src="/supabase_logo.svg" className="logo django" alt="Supabase" />
                            </div>
                            <div className="logo-container" data-tooltip="Codex">
                                <img src="/codex_logo.svg" className="logo vanilla" alt="Codex" />
                            </div>
                            <div className="logo-container" data-tooltip="TypeScript">
                                <img src="/typescript_logo.svg" className="logo vite" alt="Typescript" />
                            </div>
                            <div className="logo-container" data-tooltip="Vercel">
                                <img src="/vercel_logo.svg" className="logo vanilla" alt="Vercel" />
                            </div>
                            <div className="logo-container" data-tooltip="Microsoft Copilot">
                                <img src="/copilot_logo.svg" className="logo vanilla" alt="Copilot" />
                            </div>
                        </div>
                        <p>Started Development June 2025</p>
                        <p>Deployment target: <span style={{ textDecoration: 'underline' }}>Early 2026</span></p>
                    </div>
                    <div class="info">
                        <p style={{textAlign:'center'}}>I am currently building a databasing system for a busing company based out of York region to simplify
                            their workflow. I am creating a full-stack web application to handle bus maintenance records, inventory and tracking of over 700 machines,
                            and approximately 50 maintenance records daily. I have built to be secure and comply to the OWASP Top 10 as well as other common security vulnerabilities.
                        </p>

                        <a href='mailto:adammontcompany@gmail.com' rel='noopener noreferrer'>Contact me here if you need a custom software solution</a>
                        <Link to="/foundry">Learn more about what my company does</Link>
                    </div>
                </div>
                <div class="interest-item" id="personal-site">
                    <div class="display">                        <h1>adam-montgomery.ca</h1>
                        <h3>Built With:</h3>
                        <div className="languages no-select projects-logo-grid">
                            <div className="logo-container" data-tooltip="React">
                                <img src="/react_logo.svg" className="logo vite" alt="React" />
                            </div>                            <div className="logo-container" data-tooltip="CSS">
                                <img src="/css_logo.svg" className="logo vite" alt="CSS" />
                            </div><div className="logo-container" data-tooltip="JavaScript">
                                <img src="/javascript_logo.svg" className="logo python" alt="Javascript" />
                            </div>
                            <div className="logo-container" data-tooltip="Vite">
                                <img src="/vite.svg" className="logo vite" alt="Vite" />
                            </div>
                            <div className="logo-container" data-tooltip="Github">
                                <img src="/github_logo.svg" className="logo vanilla" alt="Github" />
                            </div>
                            <div className="logo-container" data-tooltip="React Router">
                                <img src="/react-router.svg" className="logo fire" alt="React Router" />
                            </div>
                        </div>
                        <p>Maintained and Updated Since April 2025</p>
                    </div>
                    <div class="info">
                        <p style={{textAlign:'center'}}>Well what do you think?</p>
                        <a href='/adam_montgomery_resume.pdf' target='_blank' rel='noopener noreferrer'>Contact me if you have a suggestion!</a>
                    </div>
                </div>
                <div class="interest-item">
                    <div class="display">
                        <h1 className="no-select">
                            <span className="trembling-letter">A</span>
                            <span className="trembling-letter">m</span>
                            <span className="trembling-letter">&nbsp;</span>
                            <span className="trembling-letter">I</span>
                            <span className="trembling-letter">&nbsp;</span>
                            <span className="trembling-letter">C</span>
                            <span className="trembling-letter">o</span>
                            <span className="trembling-letter">o</span>
                            <span className="trembling-letter">k</span>
                            <span className="trembling-letter">e</span>
                            <span className="trembling-letter">d</span>
                            <span className="trembling-letter">?</span>
                        </h1>                        <h3>Built With:</h3>
                        <div className="languages no-select projects-logo-grid">
                            <div className="logo-container" data-tooltip="React">
                                <img src="/react_logo.svg" className="logo vite" alt="React" />
                            </div>
                            <div className="logo-container" data-tooltip="CSS">
                                <img src="/css_logo.svg" className="logo css" alt="CSS" />
                            </div>
                            <div className="logo-container" data-tooltip="HTML">
                                <img src="/html_logo.svg" className="logo fire" alt="HTML" />
                            </div>
                            <div className="logo-container" data-tooltip="MongoDB">
                                <img src="/mongodb_logo.svg" className="logo django" alt="MongoDB" />
                            </div>
                            <div className="logo-container" data-tooltip="TypeScript">
                                <img src="/typescript_logo.svg" className="logo vite" alt="Typescript" />
                            </div>
                            <div className="logo-container" data-tooltip="Git">
                                <img src="/git_logo.svg" className="logo django" alt="Git" />
                            </div>
                            <div className="logo-container" data-tooltip="Github">
                                <img src="/github_logo.svg" className="logo vanilla" alt="Github" />
                            </div>
                            <div className="logo-container" data-tooltip="Claude">
                                <img src="/claude_logo.svg" className="logo fire" alt="Claude" />
                            </div>
                            <div className="logo-container" data-tooltip="Render">
                                <img src="/render_logo.svg" className="logo vanilla" alt="Render" />
                            </div>
                            <div className="logo-container" data-tooltip="Vercel">
                                <img src="/vercel_logo.svg" className="logo vanilla" alt="Vercel" />
                            </div>
                            <div className="logo-container" data-tooltip="Node.js">
                                <img src="/nodejs_logo.svg" className="logo django" alt="Node.js" />
                            </div>
                            <div className="logo-container" data-tooltip="Vite">
                                <img src="/vite.svg" className="logo vite" alt="Vite" />
                            </div>
                            <div className="logo-container" data-tooltip="Gemini">
                                <img src="/gemini_logo.svg" className="logo vite" alt="Gemini" />
                            </div>
                            <div className="logo-container" data-tooltip="Microsoft Copilot">
                                <img src="/copilot_logo.svg" className="logo vanilla" alt="Copilot" />
                            </div>
                            <div className="logo-container" data-tooltip="Cursor">
                                <img src="/cursor_logo.svg" className="logo vanilla" alt="Cursor" />
                            </div>
                        </div>
                        <p>First Developed and Deployed at GDSCHacks 2025! Currently maintained.</p>
                    </div>
                    <div class="info">
                        <p>Through this project two fellow students and I aimed to help our peers evaluate
                            how ready they were in this difficult job market. We created a website for us to measure
                            how "cooked" you are if trying to find a job. You either take a quick survey or upload you resume
                            and then you get back Google Gemini powered feedback to help with your job search.
                        </p>
                        <a href="https://cooked.adam-montgomery.ca" target="_blank">Try it for yourself!</a>
                        <br></br>
                        <a href="https://github.com/nathan-probert/am-i-cooked" target="_blank">Check out our codebase</a>
                    </div>
                </div>
                <div class="interest-item">
                    <div class="display">
                        <h1>
                            <span className="poker-red">C</span>
                            <span className="poker-black">h</span>
                            <span className="poker-red">i</span>
                            <span className="poker-black">p</span>
                            <span className="poker-red">&nbsp;</span>
                            <span className="poker-red">C</span>
                            <span className="poker-black">h</span>
                            <span className="poker-red">a</span>
                            <span className="poker-black">m</span>
                            <span className="poker-red">p</span>
                        </h1>
                        <h3>Built With:</h3>
                        <div className="languages no-select projects-logo-grid">
                            <div className="logo-container" data-tooltip="Django">
                                <img src="/django_logo.svg" className="logo django" alt="Django" />
                            </div>                            <div className="logo-container" data-tooltip="Python">
                                <img src="/python_logo.svg" className="logo python" alt="Python" />
                            </div>                            <div className="logo-container" data-tooltip="Git">
                                <img src="/git_logo.svg" className="logo django" alt="Git" />
                            </div>
                            <div className="logo-container" data-tooltip="Github">
                                <img src="/github_logo.svg" className="logo vanilla" alt="Github" />
                            </div>
                            <div className="logo-container" data-tooltip="React">
                                <img src="/react_logo.svg" className="logo vite" alt="React" />
                            </div>
                            <div className="logo-container" data-tooltip="CSS">
                                <img src="/css_logo.svg" className="logo css" alt="CSS" />
                            </div>
                            <div className="logo-container" data-tooltip="HTML">
                                <img src="/html_logo.svg" className="logo fire" alt="HTML" />
                            </div>
                            <div className="logo-container" data-tooltip="TypeScript">
                                <img src="/typescript_logo.svg" className="logo vite" alt="Typescript" />
                            </div>
                            <div className="logo-container" data-tooltip="Claude">
                                <img src="/claude_logo.svg" className="logo fire" alt="Claude" />
                            </div>
                            <div className="logo-container" data-tooltip="Vercel">
                                <img src="/vercel_logo.svg" className="logo vanilla" alt="Vercel" />
                            </div>
                            <div className="logo-container" data-tooltip="Node.js">
                                <img src="/nodejs_logo.svg" className="logo django" alt="Node.js" />
                            </div>
                            <div className="logo-container" data-tooltip="Vite">
                                <img src="/vite.svg" className="logo vite" alt="Vite" />
                            </div>
                            <div className="logo-container" data-tooltip="Microsoft Copilot">
                                <img src="/copilot_logo.svg" className="logo vanilla" alt="Copilot" />
                            </div>
                        </div>
                        <p>Currently In Development</p>
                    </div>
                    <div class="info">
                        <p>I am aiming to solve the most common problem with playing poker, not having chips. 
                        I am developing an online substitute for poker chips you can still play poker in-person with your friends if
                        you forget or cannot afford chips. I makes the game more portable and more accessible to everyone.
                        </p>
                        <a href="https://chip-champ.adam-montgomery.ca" target="_blank" rel="noopener noreferrer">Link to the info page</a>
                    </div>
                </div>
                <div class="interest-item">
                    <div class="display">                        <h1>Brick Breaker</h1>
                        <h3>Built With:</h3>
                        <div className="languages no-select projects-logo-grid">
                            <div className="logo-container" data-tooltip="Java">
                                <img src="/java_logo.svg" className="logo fire" alt="Java" />
                            </div>                            <div className="logo-container" data-tooltip="Git">
                                <img src="/git_logo.svg" className="logo django" alt="Git" />
                            </div>
                            <div className="logo-container" data-tooltip="Github">
                                <img src="/github_logo.svg" className="logo vanilla" alt="Github" />
                            </div>
                        </div>
                        <p>Grade 12 Course Final Project, 2022</p>
                    </div>
                    <div class="info">
                        <p>I built a brick breaker game that has multiple levels throughout. 
                            As you play, the difficulty increases to provide an adequate challenge. I built 
                            this project with a strong focus on Object-Oriented Programming concepts, creating 
                            a final product that was efficient and elegant code.
                        </p>
                        <a href="https://github.com/Aquinnmo/BrickBreaker" target="_blank">Check it out!</a>
                    </div>
                </div>
                <div class="interest-item">
                    <div class="display">                        <h1>Tic-Tac-Toe</h1>
                        <h3>Built With:</h3>
                        <div className="languages no-select projects-logo-grid">
                            <div className="logo-container" data-tooltip="Java">
                                <img src="/java_logo.svg" className="logo fire" alt="Java" />
                            </div>
                        </div>
                        <p>Grade 11 Course Final Project, 2021</p>
                    </div>
                    <div class="info">
                        <p>I made a multi-board tic-tac-toe game that challenges even the most seasoned of Tic-Tac-Toe players to 
                            the test. In this version of the classic game, you play on 6 boards simultaneously against a friend. You have 
                            to strategize to win the most boards as possible. Whoever wins the most boards at the end wins!
                        </p>
                        <a href="https://osmows.com/menu/daily-specials/" target="_blank">I'm working on uploading the project to a repo as we speak!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;