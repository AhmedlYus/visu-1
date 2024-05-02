import React from 'react';
import '../styles/TwoxBanners.css'; 

const TwoxBanners = ({ title1, subtitle1, area1, imageSrc1, buttonColor1, title2, subtitle2, area2, imageSrc2 }) => {
  return (
    <div className='bannerContainer'>
      {/* First banner */}
      <div className='BannerItem'>
        <div className="bannerContent">
          <h1>{title1}</h1>
          <h3>{subtitle1}</h3>
          <h5>Exhibition</h5>
          <p>Area {area1}</p>
          <div className="circularButton" style={{ backgroundColor: buttonColor1 }}>Book now</div>
        </div>
        <img src={imageSrc1} className='bannerImage' alt='Logo' />
      </div>
      
      <div className='BannerItem2'>
        <div className="bannerContent2">
          <h1>{title2}</h1>
          <h3>{subtitle2}</h3>
          <h5>Exhibition</h5>
          <p>Area {area2}</p>
          <div className="circularButton2"></div>
        </div>
        <img src={imageSrc2} className='bannerImage' alt='Logo' />
      </div>
    </div>
  );
}

export default TwoxBanners;
