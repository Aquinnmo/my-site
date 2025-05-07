import React from "react";
import TeamGuessingGame from "../components/TeamGuessingGame";

function Interests() {
    return (
        <div className="interest-list">
            <div className="interest-item">
                <div className="display">
                    <h1>Hockey</h1>
                    <h3>Check out my team guessing game! Guess my favourite NHL teams!</h3>
                    <TeamGuessingGame />
                </div>
                <div className="info">
                    <p>I led my high school hockey team as the captain to a silver medal in the final year. I 
                        since retired and have become a beer league legend.
                    </p>
                    <a href="https://www.youtube.com/watch?v=4eBoTI6_1Q8" target="_blank">Watch some of my highlights...</a>
                </div>
            </div>
            <div className="interest-item">
                <div className="display">
                    <h1>Music</h1>
                    <a href="https://open.spotify.com/user/aquinnmo?si=dde9c65268ae4d36" target="_blank"><h3>View My Spotify Profile</h3></a>
                    <a href="https://stats.fm/aquinnmo" target="_blank"><h3>View My Stats.Fm Page</h3></a>
                    <p>Check out my favourite playlist on the right!</p>
                </div>
                <div className="info">
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