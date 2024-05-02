import React from 'react';
import '../styles/Home.css';
import noTimeBond from '../assets/NotimeBond.jpg';
import spectreBond from '../assets/spectreBond.jpg'; 
import HeroSection from '../pages/HomeHero';
import TwoxBanners from '../components/TwoxBanners'; 
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import SignupBanner from '../components/SignupBanner';
import CardBanners from '../components/testbanners';

const Home = () => {
  const cards = [
    {
      title: "No time to die",
      text: "Bonds final mission",
      exhibitionArea: "Area 5",
      bookNowLink: "#",
      image: noTimeBond,
    },
    {
      title: "Spectre",
      text: "Bond unravels spectre",
      exhibitionArea: "Area 5", 
      bookNowLink: "#",
      image: spectreBond, 
    }
  ];
  return (
    <div>
      <HeroSection />
      <div className='mainSection'>
        <div className='start-info'>
          <div className='discover'>
            <h1>Discover the fabulous world of James Bond</h1>
          </div>
          <div className='open-info'> 
            <div>
              <h3> <BookOnlineIcon/> Tickets - Book Here</h3>
            </div>
            <div>
              <h3>Monday - Friday: 10:00 - 16:00</h3>
            </div>
            <div>
              <h3>Saturday: 10:00 - 15:00</h3>
            </div>
          </div>
        </div>
        <div className='section-line'>
        </div>
        <div className='exhi-header'>
        <h1>Exhibitions and attractions</h1>
        </div>
        <CardBanners cards={cards} />
        <div className='section-line'>
        </div>
        <div className='visit-header'>
        <h1>Visit the Museum</h1>
        </div>
        COMPONENT

        <SignupBanner/>
        <div className='visit-header'>
        <h1>Collections</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
