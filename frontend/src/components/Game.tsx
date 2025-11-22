import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HowToPlayModal from './HowToPlayModal';

const Game: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [guess, setGuess] = useState('');
  const [guessesLeft, setGuessesLeft] = useState(5);
  const [timer, setTimer] = useState('01:08');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        const [min, sec] = prev.split(':').map(Number);
        const totalSec = min * 60 + sec - 1;
        if (totalSec <= 0) return '00:00';
        const newMin = Math.floor(totalSec / 60);
        const newSec = totalSec % 60;
        return `${newMin.toString().padStart(2, '0')}:${newSec.toString().padStart(2, '0')}`;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleGuess = (): void => {
    if (guess.trim()) {
      setGuessesLeft((prev) => prev - 1);
      setGuess('');
    }
  };

  return (
    <>
      <div className="game-container">
        <header className="game-header">
          <div className="header-left" onClick={() => navigate('/')}>
            GuessIt!
          </div>
          <div className="header-center">GuessIt! Streak 🏆</div>
          <div className="header-right" onClick={() => setShowModal(true)}>
            How to Play
          </div>
        </header>

        <div className="game-content">
          <div className="hint-card">
            <h3>Hint</h3>
            <p>This is a telugu movie</p>
          </div>

          <div className="input-section">
            <input
              type="text"
              placeholder="Enter the movie name here"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="guess-input"
            />
            <button onClick={handleGuess} className="guess-button">
              Guess
            </button>
          </div>

          <div className="game-info">
            <div className="timer">{timer}</div>
            <div className="guesses-left">{guessesLeft} Guesses Left</div>
          </div>
        </div>
      </div>

      {showModal && <HowToPlayModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Game;
