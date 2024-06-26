import React from 'react'
import CardBanners from '../components/testbanners';
import noTimeBond from '../assets/NotimeBond.jpg';
import logoAston from '../assets/AstonmartinLogo.jpg';

function Booking() {
  const cards = [
    {
      title: "Tickets",
      text: "Book museum tickets",
      exhibitionArea: "",
      bookNowLink: "/booking/tickets",
      image: noTimeBond,
      backgroundColor: "#088F8F",
    },
    {
      title: "Rent Aston Martin",
      text: "The infamous Aston Martin ",
      exhibitionArea: "", 
      bookNowLink: "/booking/rental",
      image: logoAston,
      backgroundColor: "#002c3d",
    }
  ];
  return(
    <div>
      <div className='mainSection'>
        <div className='exhi-header'>
        <h1>Exhibitions and attractions</h1>
        </div>
        <CardBanners cards={cards} />
        <div style={{ margin: '20px 0' }}></div>
        <div className='section-line'>
        </div>
      </div>
    </div>

  );
}

export default Booking;
