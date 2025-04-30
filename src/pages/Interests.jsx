import React from "react";

function Interests()
{
    return (
        <div class="project-list">
            <div class="project">
                <div class="display">
                    <h1>Hockey</h1>
                    <p>Favourite Teams: use API to grab team logos</p>
                    <p>Or I show the rankings of the teams above and have input here for them to guess here</p>
                </div>
                <div class="info">
                    <p>I led my high school hockey team as the captain to a silver medal in the final year. I 
                        since retired and have become a beer league legend.
                    </p>
                    <a href="https://www.youtube.com/watch?v=4eBoTI6_1Q8" target="_blank">Watch some of my highlights...</a>
                </div>
            </div>
            <div class="project">
                <div class="display">
                    <h1>Music</h1>
                    <a href="https://open.spotify.com/user/aquinnmo?si=dde9c65268ae4d36" target="_blank"><h3>View My Spotify Profile</h3></a>
                    <a href="https://stats.fm/aquinnmo" target="_blank"><h3>View My Stats.Fm Page</h3></a>
                    <p>Check out my favourite playlist on the right!</p>
                </div>
                <div class="info">
                <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/0BIwrKbc2J69rarG625XF3?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Interests;