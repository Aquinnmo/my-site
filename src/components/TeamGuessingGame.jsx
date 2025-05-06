import React, { useState } from "react";

function TeamGuessingGame() {
    const [teamGuess, setTeamGuess] = useState('');
    const [teamOneChecked, setTeamOneChecked] = useState(false);
    const [teamTwoChecked, setTeamTwoChecked] = useState(false);
    const [guessCount, setGuessCount] = useState(0);
    const [guessResult, setGuessResult] = useState('');
    const [isRevealing, setIsRevealing] = useState(false);

    const hints = [
        "Team One: Original six team",
        "Team Two: 2023 Stanley Cup Champions",
        "Team One: #1 overall pick in 2023",
        "Team Two: Recent expansion team originally nicknamed \"The Misfits\""
    ];
    
    const handleGuess = (e) => {
        setTeamGuess(e.target.value);
    };

    const checkGuess = () => {
        if (guessCount >= 5) {
            return;
        }

        const newGuessCount = guessCount + 1;
        const guess = teamGuess.toLowerCase();
        const correctTeams = ['chicago blackhawks', 'vegas golden knights'];
        let newResult = '';

        if (guess.includes('chicago blackhawks') && !teamOneChecked) {
            setTeamOneChecked(true);
            newResult = 'You guessed the Chicago Blackhawks correctly!';
        } else if (guess.includes('vegas golden knights') && !teamTwoChecked) {
            setTeamTwoChecked(true);
            newResult = 'You guessed the Vegas Golden Knights correctly!';
        } else {
            newResult = hints[guessCount];
        }

        setGuessCount(newGuessCount);
        setGuessResult(newResult);
        setTeamGuess('');

        // Check if this was the last guess
        if (newGuessCount === 5 && (!teamOneChecked || !teamTwoChecked)) {
            setIsRevealing(true);
            setGuessResult("Game Over! Revealing teams in 5 seconds...");
            
            setTimeout(() => {
                setTeamOneChecked(true);
                setTeamTwoChecked(true);
                setGuessResult('Game Over! The teams are Chicago Blackhawks and Vegas Golden Knights!');
                setIsRevealing(false);
            }, 5000);
        }
    };

    return (
        <>
            <div className="team-checkbox-container">
                <div className={`custom-checkbox ${teamOneChecked ? 'checked' : ''}`} id={teamOneChecked ? 'chicago' : ''}>
                    <span className="team-name">{teamOneChecked ? "Chicago Blackhawks" : "Favourite Team"}</span>
                </div>
                <div className={`custom-checkbox ${teamTwoChecked ? 'checked' : ''}`} id={teamTwoChecked ? 'vegas' : ''}>
                    <span className="team-name">{teamTwoChecked ? "Vegas Golden Knights" : "Second Favourite Team"}</span>
                </div>
            </div>
            <div className="guess-container">
                <input 
                    type="text" 
                    placeholder="Guess my two favourite hockey teams..." 
                    value={teamGuess}
                    onChange={handleGuess}
                    className="team-guess-input"
                    disabled={guessCount >= 5 || isRevealing}
                />
                <button 
                    onClick={checkGuess}
                    className="guess-button"
                    disabled={guessCount >= 5 || isRevealing}
                >
                    {guessCount >= 5 ? "Game Complete" : `Guess ${guessCount + 1}/5`}
                </button>
                {guessResult && <p className="guess-result">{guessResult}</p>}
            </div>
        </>
    );
}

export default TeamGuessingGame;