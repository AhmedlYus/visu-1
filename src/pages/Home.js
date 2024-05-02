import React from 'react';
import '../styles/Home.css';
import noTimeBond from '../assets/NotimeBond.jpg';
import spectreBond from '../assets/spectreBond.jpg'; // Import the image for Spectre
import HeroSection from '../pages/HomeHero';
import TwoxBanners from '../components/TwoxBanners'; // Import the TwoxBanners component

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='mainSection'>
        <div className='splitContainer'>
          <div className='leftSide'>
            <div>
              <h1>Discover the fabulous world of James Bond</h1>
            </div>
            <div>
              <h1>Exhibitions & attractions</h1>
            </div>
            <TwoxBanners 
  title1="No Time to Die" 
  subtitle1="Bond's final mission" 
  area1="5" 
  imageSrc1={noTimeBond}
  buttonColor1="#ff0000"
  title2="Spectre" 
  subtitle2="Bond unravels spectre" 
  area2="6" 
  imageSrc2={spectreBond}
/>


            <div>
              <h1>Visit the Museum</h1>
            </div>
            <div>
              <h1>Collections</h1>
            </div>
          </div>
          {/* Right Side */}
          <div className='rightSide'>
            <div>
              <h3>Tickets - Book Here</h3>
              <h3>Monday - Friday: 10:00 - 16:00</h3>
              <h3>Saturday: 10:00 - 15:00</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
