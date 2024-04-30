import React from 'react'
import Logo from '../assets/077Logo.jpeg';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo} />
        <div className='logoText'>MUSEUM</div>
      </div>
      <div className='rightSide'>

      </div>
    </div>
  )
}

export default Navbar;
