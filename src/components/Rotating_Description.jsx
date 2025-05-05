import React, { useEffect, useState } from "react";
import "../style.css";

const headers = [
    "I am a communicator 🗨️",
    "I am a UI desginer 🎨",
    "I am a web developer 🌐",
    "I am a forward-thinker ⏩",
    "I am a team player 🤝",
    "I am a life-long student 👨‍🎓"
];

function Rotating_Description() {
    const [index, setIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0); // Start fade out
            setTimeout(() => {
                setIndex(prev => (prev + 1) % headers.length);
                setOpacity(1); // Fade in with new text
            }, 500); // Wait for fade out to complete
        }, 3000);
    
        return () => clearInterval(interval);
    }, []);
    
    return (
        <h2 
            style={{
                opacity: opacity,
                transition: "opacity 0.5s ease-in-out"
            }}
        >
            {headers[index]}
        </h2>
    );
}

export default Rotating_Description;