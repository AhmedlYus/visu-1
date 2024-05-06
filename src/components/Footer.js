import React from 'react'
import '../styles/Footer.css';
import Logofooter from '../assets/077Logo.jpeg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
    return (
      <div className='footer'>
        <div className='Logo-main'>
          <div className='logo-footer'>
            <img src={Logofooter} alt='Logo' />
            <div className='logoText-footer'>MUSEUM</div>
          </div>
          <div className='links-to'>
            <a href="#">Home</a>
            <a href="#">Exhibitions</a>
            <a href="#">Booking</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
          </div>
          <div className='socials'>
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    );
  }

export default Footer
