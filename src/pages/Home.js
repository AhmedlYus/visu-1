import React from 'react';
import '../styles/Home.css';
import noTimeBond from '../assets/NotimeBond.jpg';
import spectreBond from '../assets/spectreBond.jpg';
import WelcomeMs from '../components/WelcomeMs';

function Home() {
  return (
    <div>
      <div className='Hero-Section'>
        <div className='HeroImg'>
          <div className='welcomeBox'>
            <WelcomeMs />
            <button className='welcomeButton'>Visit here</button>
          </div>
        </div>
      </div>
      <div className='mainSection'>
        <div className='splitContainer'>
          <div className='leftSide'>
            <h1>Discover the fabulous world of James Bond</h1>
          </div>
          <div className='rightSide'>
            <h3>Tickets - Book Here</h3>
            <h3>Monday - Friday: 10:00 - 16:00</h3>
            <h3>Saturday: 10:00 - 15:00</h3>55
          </div>
        </div>
        <div className="Wrapper"></div>
        <div className='ExhibitionsHeader'>
            <h1>Exhibitions & attractions</h1>
          </div>
        <div className='twoContainer'>
        <div className='NoTimeTo'>
          <div className="text-content">
            <h1>No Time to Die</h1>
            <h3>Bond's final mission</h3>
            <h5>Exhibition</h5>
            <p>Area 5</p>
          </div>
            <img src={noTimeBond} className='imageContainer' alt='Logo' />
          </div>
          <div className='Spectre'>
          <div className="text-content">
            <h1>Spectre</h1>
            <h3>Bond unravels Spectre</h3>
            <h5>Exhibition</h5>
            <p>Area 5</p>
          </div>
          <img src={spectreBond} className='imageContainer' alt='Logo' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
