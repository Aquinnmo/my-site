import React from "react";

function Projects()
{
    return (
        <div class="project-list">
            <div class="project">
                <div class="display">
                    <h1>Poker Chip Project</h1>
                    <h3>Built With:</h3>
                    <div class="grid">
                        <img src="/django_logo.svg" className="tech logo django" alt="Django" />
                        <img src="/python_logo.svg" className="tech logo python" alt="Python" />
                        <img src="/git_logo.svg" className="tech logo django" alt="Git" />
                        <img src="/github_logo.svg" className="tech logo vanilla" alt="Github" />
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
            <div class="project">
                <div class="display">
                    <h1>Personal Website</h1>
                    <h3>Built With:</h3>
                    <div class="grid">
                        <img src="/react_logo.svg" className="tech logo vite" alt="React" />
                        <img src="/css_logo.svg" className="tech logo vite" alt="CSS" />
                        <img src="/javascript_logo.svg" className="tech logo python" alt="Javascript" />
                        <img src="/html_logo.svg" className="tech logo fire" alt="HTML" />
                        <img src="/git_logo.svg" className="tech logo django" alt="Git" />
                        <img src="/github_logo.svg" className="tech logo vanilla" alt="Github" />
                    </div>
                    <p>Maintained and Updated Since 2025</p>
                </div>
                <div class="info">
                    <p style={{textAlign:'center'}}>Well what do you think?</p>
                </div>
            </div>
            <div class="project">
                <div class="display">
                    <h1>Brick Breaker</h1>
                    <h3>Built With:</h3>
                    <div class="grid">
                        <img src="/java_logo.svg" className="tech logo fire" alt="Java" />
                        <img src="/git_logo.svg" className="tech logo django" alt="Git" />
                        <img src="/github_logo.svg" className="tech logo vanilla" alt="Github" />
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
            <div class="project">
                <div class="display">
                    <h1>Tic-Tac-Toe</h1>
                    <h3>Built With:</h3>
                    <div class="grid">
                        <img src="/java_logo.svg" className="tech logo fire" alt="Java" />
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
    );
}

export default Projects;