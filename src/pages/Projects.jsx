import React, { useState, useEffect } from 'react';

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
                        </h1>
                        <h3>Built With:</h3>
                        <div class="grid">
                            <div className="logo-container" data-tooltip="React">
                                <img src="/react_logo.svg" className="tech logo vite" alt="React" />
                            </div>
                            <div className="logo-container" data-tooltip="CSS">
                                <img src="/css_logo.svg" className="tech logo css" alt="CSS" />
                            </div>
                            <div className="logo-container" data-tooltip="HTML">
                                <img src="/html_logo.svg" className="tech logo fire" alt="HTML" />
                            </div>
                            <div className="logo-container" data-tooltip="MongoDB">
                                <img src="/mongodb_logo.svg" className="tech logo django" alt="MongoDB" />
                            </div>
                            <div className="logo-container" data-tooltip="TypeScript">
                                <img src="/typescript_logo.svg" className="tech logo vite" alt="Typescript" />
                            </div>
                            <div className="logo-container" data-tooltip="Git">
                                <img src="/git_logo.svg" className="tech logo django" alt="Git" />
                            </div>
                            <div className="logo-container" data-tooltip="Github">
                                <img src="/github_logo.svg" className="tech logo vanilla" alt="Github" />
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
                            <div className="logo-container" data-tooltip="Vite">
                                <img src="/vite.svg" className="tech logo vite" alt="Vite" />
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
                        <p>First Developed and Deployed at GDSCHacks 2025! Currently maintained.</p>
                    </div>
                    <div class="info">
                        <p>Through this project two fellow students and I aimed to help our peers evaluate
                            how ready they were in this difficult job market. We created a website for us to measure
                            how "cooked" you are if trying to find a job. You either take a quick survey or upload you resume
                            and then you get back Google Gemini powered feedback to help with your job search.
                        </p>
                        <a href="https://am-i-cooked-zeta.vercel.app" target="_blank">Check it out</a>
                        <br></br>
                        <a href="https://github.com/nathan-probert/am-i-cooked" target="_blank">Check out our codebase</a>
                    </div>
                </div>
                <div class="interest-item">
                    <div class="display">
                        <h1>
                            <span className="poker-red">P</span>
                            <span className="poker-black">o</span>
                            <span className="poker-red">k</span>
                            <span className="poker-black">e</span>
                            <span className="poker-red">r</span>
                            <span className="poker-red">&nbsp;</span>
                            <span className="poker-black">C</span>
                            <span className="poker-red">h</span>
                            <span className="poker-black">i</span>
                            <span className="poker-red">p</span>
                            <span className="poker-red">&nbsp;</span>
                            <span className="poker-black">P</span>
                            <span className="poker-red">r</span>
                            <span className="poker-black">o</span>
                            <span className="poker-red">j</span>
                            <span className="poker-black">e</span>
                            <span className="poker-red">c</span>
                            <span className="poker-black">t</span>
                        </h1>
                        <h3>Built With:</h3>
                        <div class="grid">
                            <div className="logo-container" data-tooltip="Django">
                                <img src="/django_logo.svg" className="tech logo django" alt="Django" />
                            </div>
                            <div className="logo-container" data-tooltip="Python">
                                <img src="/python_logo.svg" className="tech logo python" alt="Python" />
                            </div>
                            <div className="logo-container" data-tooltip="Git">
                                <img src="/git_logo.svg" className="tech logo django" alt="Git" />
                            </div>
                            <div className="logo-container" data-tooltip="Github">
                                <img src="/github_logo.svg" className="tech logo vanilla" alt="Github" />
                            </div>
                        </div>
                        <p>Currently In Development</p>
                    </div>
                    <div class="info">
                        <p>I am aiming to solve the most common problem with playing poker, not having chips. 
                        I am developing an online substitute for poker chips you can still play poker in-person with your friends if
                        you forget or cannot afford chips. I makes the game more portable and more accessible to everyone.
                        </p>
                        <a href="https://en.wikipedia.org/wiki/Music_(Playboi_Carti_album)" target="_blank">I will update it this link to show the repo, once released.</a>
                    </div>
                </div>
                <div class="interest-item" id="personal-site">
                    <div class="display">
                        <h1>adam-montgomery.ca</h1>
                        <h3>Built With:</h3>
                        <div class="grid">
                            <div className="logo-container" data-tooltip="React">
                                <img src="/react_logo.svg" className="tech logo vite" alt="React" />
                            </div>
                            <div className="logo-container" data-tooltip="CSS">
                                <img src="/css_logo.svg" className="tech logo vite" alt="CSS" />
                            </div>
                            <div className="logo-container" data-tooltip="JavaScript">
                                <img src="/javascript_logo.svg" className="tech logo python" alt="Javascript" />
                            </div>
                            <div className="logo-container" data-tooltip="HTML">
                                <img src="/html_logo.svg" className="tech logo fire" alt="HTML" />
                            </div>
                            <div className="logo-container" data-tooltip="Git">
                                <img src="/git_logo.svg" className="tech logo django" alt="Git" />
                            </div>
                            <div className="logo-container" data-tooltip="Github">
                                <img src="/github_logo.svg" className="tech logo vanilla" alt="Github" />
                            </div>
                        </div>
                        <p>Maintained and Updated Since April 2025</p>
                    </div>
                    <div class="info">
                        <p style={{textAlign:'center'}}>Well what do you think?</p>
                    </div>
                </div>
                <div class="interest-item">
                    <div class="display">
                        <h1>Brick Breaker</h1>
                        <h3>Built With:</h3>
                        <div class="grid">
                            <div className="logo-container" data-tooltip="Java">
                                <img src="/java_logo.svg" className="tech logo fire" alt="Java" />
                            </div>
                            <div className="logo-container" data-tooltip="Git">
                                <img src="/git_logo.svg" className="tech logo django" alt="Git" />
                            </div>
                            <div className="logo-container" data-tooltip="Github">
                                <img src="/github_logo.svg" className="tech logo vanilla" alt="Github" />
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
                    <div class="display">
                        <h1>Tic-Tac-Toe</h1>
                        <h3>Built With:</h3>
                        <div class="grid">
                            <div className="logo-container" data-tooltip="Java">
                                <img src="/java_logo.svg" className="tech logo fire" alt="Java" />
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