import React from 'react';
import '../styles/buttons.css';

const ScrollTopButton: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button type="button" id="go-top" className="scroll-top" aria-label="top" onClick={handleClick}></button>
  );
};

const ScrollBottomButton: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <button type="button" id="go-bottom" className="scroll-bottom" aria-label="bottom" onClick={handleClick}></button>
  );
};

export { ScrollBottomButton, ScrollTopButton };
