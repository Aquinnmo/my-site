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
                    <h2>Description</h2>
                    <p>I will describe it here</p>
                    <a href="https://en.wikipedia.org/wiki/Music_(Playboi_Carti_album)" target="_blank">I will update it this link to show the repo, once released.</a>
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
                    <p>Grade 12 Course Final Project</p>
                </div>
                <div class="info">
                    <h2>Description</h2>
                    <p>I will describe it here</p>
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
                    <p>Grade 11 Course Final Project</p>
                </div>
                <div class="info">
                    <h2>Description</h2>
                    <p>I will describe it here</p>
                    <a href="https://osmows.com/menu/daily-specials/" target="_blank">I'm working on uploading the project to a repo as we speak!</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;