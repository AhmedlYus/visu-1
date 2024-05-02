import React from 'react';
import '../styles/HeroSection.css';
import WelcomeMs from '../components/WelcomeMs';

const HeroSection = () => {
  return (
    <div className='Hero-Section'>
      <div className='HeroImg'>
        <div className='welcomeBox'>
          <WelcomeMs />
          <button className='welcomeButton'>Visit here</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
