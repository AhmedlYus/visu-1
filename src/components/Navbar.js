import React, {useState} from 'react';
import Logo from '../assets/077Logo.jpeg';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/navbar.css"; 
import { Button } from '@mui/material';

function Navbar() {
const [OpenMenu, setOpenMenu] = useState(false)
const toggle = () =>{
  setOpenMenu(!OpenMenu)
}

  return (
    <div className='navbar'>
      <div className='leftSide'>
        <Link to="/" className="logoLink" id={OpenMenu ? "open" : "close"}>
        <div className='logo'>
          <img src={Logo} alt='Logo' />
          <div className='logoText'>MUSEUM</div>
        </div>
        </Link>
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/exhibitions">Exhibition</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About us</Link>
        <Button onClick={toggle}>
        <ReorderIcon />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
