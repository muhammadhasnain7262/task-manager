import React from 'react';
import  './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <nav> Get Ready to Complete Your Goal  </nav>
      <div className='header'>
        <Link to='Home'>Home</Link>
        <Link to='About'>About</Link>
        <Link to='Contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Header;