import React, { useState } from "react";

function TeamGuessingGame() {
    const [teamGuess, setTeamGuess] = useState('');
    const [teamOneChecked, setTeamOneChecked] = useState(false);
    const [teamTwoChecked, setTeamTwoChecked] = useState(false);
    const [guessCount, setGuessCount] = useState(0);
    const [guessResult, setGuessResult] = useState('');
    const [isRevealing, setIsRevealing] = useState(false);

    const hintsTeamOne = [
        "Team One: Original six team",
        "Team One: #1 overall pick in 2023",
        "Team One: Based in the Windy City" 
    ];
    const hintsTeamTwo = [
        "Team Two: 2023 Stanley Cup Champions",
        "Team Two: Recent expansion team originally nicknamed \"The Misfits\"",
        "Team Two: Plays in the desert"
    ];
    
    const handleGuess = (e) => {
        setTeamGuess(e.target.value);
    };

    const checkGuess = () => {
        if (guessCount >= 5 || (teamOneChecked && teamTwoChecked)) {
            return;
        }

        const newGuessCount = guessCount + 1;
        const guess = teamGuess.toLowerCase().trim();
        let newResult = '';
        let guessedTeamOneThisTurn = false;
        let guessedTeamTwoThisTurn = false;

        // Check for Team One (Chicago Blackhawks)
        if (!teamOneChecked && (guess.includes('chicago') || guess.includes('blackhawks'))) {
            setTeamOneChecked(true);
            newResult = 'You guessed the Chicago Blackhawks correctly!';
            guessedTeamOneThisTurn = true;
        }
        
        // Check for Team Two (Vegas Golden Knights)
        if (!teamTwoChecked && (guess.includes('vegas') || guess.includes('golden knights') || guess.includes('knights'))) {
            if (guessedTeamOneThisTurn) { // If Chicago was also guessed in the same input
                newResult += ' And you also guessed the Vegas Golden Knights correctly!';
            } else {
                newResult = 'You guessed the Vegas Golden Knights correctly!';
            }
            setTeamTwoChecked(true);
            guessedTeamTwoThisTurn = true;
        }

        // Determine the next hint or game state message
        if (teamOneChecked && teamTwoChecked) {
            newResult = "Congratulations! You've guessed both teams!";
        } else if (guessedTeamOneThisTurn && !teamTwoChecked) { // Guessed Chicago, still need Vegas
            const hintIndex = Math.floor(newGuessCount / 2) % hintsTeamTwo.length;
            // Append to existing "Correct!" message for Chicago
            newResult += ` Now try for Team Two. Hint: ${hintsTeamTwo[hintIndex]}`;
        } else if (guessedTeamTwoThisTurn && !teamOneChecked) { // Guessed Vegas, still need Chicago
            const hintIndex = Math.floor(newGuessCount / 2) % hintsTeamOne.length;
            // Append to existing "Correct!" message for Vegas
            newResult += ` Now try for Team One. Hint: ${hintsTeamOne[hintIndex]}`;
        } else if (!guessedTeamOneThisTurn && !guessedTeamTwoThisTurn) { // No correct guess this turn
            if (teamOneChecked && !teamTwoChecked) { // Chicago already guessed, hint for Vegas
                const hintIndex = Math.floor(newGuessCount / 2) % hintsTeamTwo.length;
                newResult = `You already found the Blackhawks! Keep trying for Team Two. Hint: ${hintsTeamTwo[hintIndex]}`;
            } else if (!teamOneChecked && teamTwoChecked) { // Vegas already guessed, hint for Chicago
                const hintIndex = Math.floor(newGuessCount / 2) % hintsTeamOne.length;
                newResult = `You already found the Golden Knights! Keep trying for Team One. Hint: ${hintsTeamOne[hintIndex]}`;
            } else { // Neither team guessed yet, and this guess was wrong
                newResult = "That's not correct. Try again!";
                if (newGuessCount % 2 === 1) { 
                    const hintIndex = Math.floor(newGuessCount / 2) % hintsTeamOne.length;
                    newResult += ` Hint: ${hintsTeamOne[hintIndex]}`;
                } else { 
                    const hintIndex = Math.floor(newGuessCount / 2 -1) % hintsTeamTwo.length;
                    newResult += ` Hint: ${hintsTeamTwo[hintIndex]}`;
                }
            }
        }


        setGuessCount(newGuessCount);
        setGuessResult(newResult);
        setTeamGuess('');

        if (newGuessCount >= 5 && (!teamOneChecked || !teamTwoChecked)) {
            setIsRevealing(true);
            // Ensure previous result for the turn is shown before game over message
            setGuessResult(currentResult => currentResult + (currentResult ? " " : "") + "Game Over! Revealing teams in 5 seconds...");
            
            setTimeout(() => {
                setTeamOneChecked(true);
                setTeamTwoChecked(true);
                setGuessResult('Game Over! The teams are Chicago Blackhawks and Vegas Golden Knights!');
                setIsRevealing(false);
            }, 5000);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            checkGuess();
        }
    };

    const gameWon = teamOneChecked && teamTwoChecked;
    const gameOver = guessCount >= 5 || gameWon;

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
                    placeholder="Guess my two favourite NHL teams..." 
                    value={teamGuess}
                    onChange={handleGuess}
                    onKeyPress={handleKeyPress}
                    className="team-guess-input"
                    disabled={gameOver || isRevealing}
                />
                <button 
                    onClick={checkGuess}
                    className="guess-button"
                    disabled={gameOver || isRevealing}
                >
                    {gameOver && !gameWon && !isRevealing ? "Game Over" : gameWon ? "You Won!" : `Guess ${guessCount + 1} of 5`}
                </button>
                {guessResult && <p className="guess-result">{guessResult}</p>}
            </div>
        </>
    );
}

export default TeamGuessingGame;