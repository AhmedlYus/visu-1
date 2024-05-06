import React from 'react';
import '../styles/Home.css';
import noTimeBond from '../assets/NotimeBond.jpg';
import spectreBond from '../assets/spectreBond.jpg'; 
import HeroSection from '../pages/HomeHero';
import TwoxBanners from '../components/TwoxBanners'; 
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


const Home = () => {
  const cards = [
    {
      title: "No time to die",
      text: "Bonds final mission",
      exhibitionArea: "Area 5",
      bookNowLink: "#",
      image: noTimeBond,
      backgroundColor: "#1f5260",
    },
    {
      title: "Spectre",
      text: "Bond unravels spectre",
      exhibitionArea: "Area 5", 
      bookNowLink: "#",
      image: spectreBond,
      backgroundColor: "#002c3d",
    }
  ];

  const museumCards = [
    {
      image: Bar007,
      title: "Plan your visit",
      description: "Book your trip to the 077 museum and experience lasting joy",
      bookNowLink: '#',
    },
    {
      image: MuseumMap2,
      title: "Museum Map",
      description:
        "Take a look at our museum map and where to find our exhibitions",
      bookNowLink: '#',
    },
    {
      image: AstonMartin2,
      title: "Rent Aston Martin",
      description:
        "The Aston martin Vantage from Casino royale 2008 is now for rental! book a luxurious trip with the Bond icon.",
        bookNowLink: '#',
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
        <div style={{ margin: '20px 0' }}></div>
        <div className='section-line'>
        </div>
        <div className='visit-header'>
        <h1>Visit the Museum</h1>
        </div>
        <VisitCards museumCards={museumCards}/>

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
