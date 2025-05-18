import React, { useState, useEffect } from "react";
import TeamGuessingGame from "../components/TeamGuessingGame";

function Interests() {
// Add state to track navbar height
    const [navbarHeight, setNavbarHeight] = useState(0);
    // Additional offset for gradient fade effect
    const gradientOffset = 20;

    // Effect to measure navbar height and update state
    useEffect(() => {
        const updateNavbarHeight = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                setNavbarHeight(navbar.offsetHeight);
            }
        };

        // Initial measurement
        updateNavbarHeight();

        // Update on window resize
        window.addEventListener('resize', updateNavbarHeight);
        
        // Cleanup listener
        return () => window.removeEventListener('resize', updateNavbarHeight);
    }, []);    return (
        <div className="interest-list" style={{ marginTop: `${navbarHeight + gradientOffset}px` }}>
            <div className="interest-item">
                <div className="display">
                    <h1>Hockey</h1>
                    <h3>Check out my team guessing game! Guess my favourite NHL teams!</h3>
                    <div className="guessing-game-container" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                        <TeamGuessingGame />
                    </div>
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
                    <p>Check out my favourite playlist below!</p>
                    <iframe
                        style={{ borderRadius: "12px", maxWidth: '100%' }}
                        src="https://open.spotify.com/embed/playlist/0BIwrKbc2J69rarG625XF3?utm_source=generator"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="info">
                    <div style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
                        <a href="https://open.spotify.com/user/aquinnmo?si=dde9c65268ae4d36" target="_blank"><h3 className="header-link">View My Spotify Profile</h3></a>
                        <a href="https://stats.fm/aquinnmo" target="_blank"><h3 className="header-link">View My Stats.Fm Page</h3></a>
                        <p>Some of my favourite artists are: A$AP Rocky, Blu, and Pink Floyd.</p>
                    </div>
                </div>
            </div>
            <div className="interest-item">
                <div className="display">
                    <h1>Other Sports</h1>
                    <h3>I enjoy baseball and football as well!</h3>
                    <div className="languages no-select sports-logo-grid">
                        <div className="logo-container" data-tooltip="Vladimir Guerrero Jr.">
                            <img src="/vlad_27.png" alt="Vladimir Guerrero Jr." className="logo vanilla"/>
                        </div>
                        <div className="logo-container" data-tooltip="Josh Allen">
                            <img src="/allen_17.png" alt="Josh Allen" className="logo vite"/>
                        </div>
                        <div className="logo-container" data-tooltip="Elly de la Cruz">
                            <img src="/elly_44.png" alt="Elly de la Cruz" className="logo fire"/>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <p>I love watching sports as well as playing fantasy versions of them. I am proudly dedicated to each league I am in, and am the commissioner of multiple.
                    </p>
                    <a href="https://hockey.fantasysports.yahoo.com/hockey/7006" target="_blank" rel="noopener noreferrer">Check out my Yahoo Fantasy Profile</a>
                </div>
            </div>
        </div>
    );
}

export default Interests;