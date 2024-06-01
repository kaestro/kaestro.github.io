import React from 'react';
import '../styles/buttons.css';

const HomeButton: React.FC = () => {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <button id="go-home" onClick={handleClick} className='home-button-container'>
      Home
    </button>
  );
};

export default HomeButton;