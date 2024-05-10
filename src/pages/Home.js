import React from 'react';
import '../styles/Home.css';
import noTimeBond from '../assets/NotimeBond.jpg';
import spectreBond from '../assets/spectreBond.jpg'; 
import HeroSection from '../pages/HomeHero';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import SignupBanner from '../components/SignupBanner';
import CardBanners from '../components/testbanners';
import VisitCards from '../components/VisitCards';
import AstonMartin2 from '../assets/astonMartin2.jpg';
import MuseumMap2 from '../assets/007musem-map2.jpg';
import Bar007 from '../assets/bollingerbar1.jpg';
import Collections from '../components/Collections';
import hovercraft from '../assets/bond_warwick_hover.jpg';
import oscarStatue from '../assets/oscar_statue007.jpg';
import watches from '../assets/omega_spectre_007museum.jpg';
import casinoroyale2008 from '../assets/CasinoRoyale007.jpg';



const Home = () => {
  const cards = [
    {
      title: "No time to die",
      text: "Bonds final mission",
      exhibitionArea: "Area 5",
      bookNowLink: "/Notime",
      image: noTimeBond,
      backgroundColor: "#1f5260",
    },
  ];
  const cards2 = [
    {
      title: "Spectre",
      text: "Bond unravels spectre",
      bookNowLink: "#",
      image: spectreBond,
      backgroundColor: "#002c3d",
    },
  ];
  const cards3 = [
    {
      title: "Casino Royale",
      text: "Rent the spectacular beast",
      bookNowLink: "#",
      image: casinoroyale2008,
      backgroundColor: "#002c3d",
    },
  ];
  
  const collectionCards = [
    {
      image: oscarStatue,
      title: "Oscar Award",
      description: "Oscar statue on display",
      bookNowLink: '#',
    },
    {
      image: watches,
      title: "Watch Collections",
      description:
        "view all the James Bond watch collections in the museum",
      bookNowLink: '#',
    },
    {
      image: hovercraft,
      title: "Vehicle Collections",
      description:
        "Everything from set cars to aircraft and hoverboats",
        bookNowLink: '#',
    },
  ];
  return (
    <div>
      <HeroSection />
      <div className='mainSection'>
        <div className='exhi-header'>
        <h1>Exhibitions and attractions</h1>
        </div>
        <CardBanners cards={cards} />
        <div style={{ margin: '20px 0' }}></div>
        <CardBanners cards={cards2} />
        <div style={{ margin: '20px 0' }}></div>
        <CardBanners cards={cards3} />
        <div style={{ margin: '20px 0' }}></div>
        <div className='section-line'>
        </div>

        <SignupBanner/>
        <div className='visit-header'>
        <h1>Collections</h1>
        </div>
        <Collections collectionCards ={collectionCards}/>
      </div>
    </div>
  );
}

export default Home;
