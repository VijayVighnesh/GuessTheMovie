import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handlePlayClick = (): void => {
    navigate('/play');
  };

  return (
    <div className="container">
      <h1 className="title">Guess It!</h1>
      <p className="subtitle">
        Guess Today's Mystery Telugu movie in 5 chances
      </p>

      <div className="info-card">
        <p className="info-text">
          A new telugu movie to guess every day with challenging hints
        </p>
        <p className="info-text">
          Try to guess the movie with as few hints as possible
        </p>
        <p className="info-text">Share your results with friends</p>
      </div>

      <button className="play-button" onClick={handlePlayClick}>
        ▶ Play Now
      </button>

      <p className="stats">1000 users have won today's GuessIt!</p>

      <div className="footer">
        <p>© 2025 GuessIt! | Telugu Movie Mystery Game</p>
        <p>Privacy Policy • Terms of Use • Disclaimer</p>
        <p>About Us • Contact Us • Blog • Instagram</p>
      </div>
    </div>
  );
};

export default Home;
