import React from 'react';

interface HowToPlayModalProps {
  onClose: () => void;
}

const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>How to Play GuessIt!</h2>
        <div className="modal-body">
          <p>1. A new telugu movie to guess every day with challenging hints</p>
          <p>2. Try to guess with as few hints as possible</p>
          <p>3. Share your results with friends</p>
        </div>
        <button className="modal-button" onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default HowToPlayModal;
