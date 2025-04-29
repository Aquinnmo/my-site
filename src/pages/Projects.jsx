import React from "react";

function Projects()
{
    return (
        <div id="project-list">
            <div class="project">
                <div class="display">
                    <h2>Tic-Tac-Toe</h2>
                    <h3>Used Technologies:</h3>
                    <img src="/java_logo.svg" className="tech logo fire" alt="Java" />
                    <p>Grade 11 Course Final Project</p>
                </div>
                <div class="info">
                    <h2>Description</h2>
                    <p>I will describe it here</p>
                    <p>Then link it to the github repo</p>
                </div>
            </div>
            <div class="project">
                <div class="display">
                    <h2>Brick Breaker</h2>
                    <h3>Used Technologies:</h3>
                    <img src="/java_logo.svg" className="tech logo fire" alt="Java" />
                    <p>Grade 12 Course Final Project</p>
                </div>
                <div class="info">
                    <h2>Description</h2>
                    <p>I will describe it here</p>
                    <p>Then link it to the github repo</p>
                </div>
            </div>
            <div class="project">
                <div class="display">
                    <h2>Poker Chip Project</h2>
                    <h3>Used Technologies:</h3>
                    <img src="/django_logo.svg" className="tech logo" id="django" alt="Django" />
                    <img src="/python_logo.svg" className="tech logo" id="python" alt="Python" />
                    <p>Grade 11 Course Final Project</p>
                </div>
                <div class="info">
                    <h2>Description</h2>
                    <p>I will describe it here</p>
                    <p>Then link it to the github repo</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;