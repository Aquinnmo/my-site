import React from "react";

function Interests()
{
    return (
        <div class="project-list">
            <div class="project">
                <div class="display">
                    <h1>Hockey</h1>
                    <p>Favourite Teams: use API to grab team logos</p>
                    <p>Favourite Players: </p>
                </div>
                <div class="info">
                    <h2>My Acomplishments</h2>
                    <p>I am aiming to solve the most common problem with playing poker, not having chips. 
                    I am developing an online substitute for poker chips you can still play poker in-person with your friends if
                    you forget or cannot afford chips. I makes the game more portable and more accessible to everyone.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Music_(Playboi_Carti_album)" target="_blank">I will update it this link to show the repo, once released.</a>
                </div>
            </div>
            <div class="project">
                <div class="display">
                    <h1>Music</h1>
                    <h3>View My Spotify Profile:</h3>
                    <p>embed my profile here</p>
                </div>
                <div class="info">
                    <h2>Description</h2>
                    <p style={{textAlign:'center'}}>Contact me if you have any music recommendations!</p>
                </div>
            </div>
        </div>
    );
}

export default Interests;