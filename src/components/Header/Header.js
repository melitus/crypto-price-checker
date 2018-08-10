import React from 'react';
import { Link } from 'react-router-dom';

// import Search from '../Search/Search';
import logo from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={logo} alt="logo" className="Header-logo" />
      </Link>

      
    </div>
  );
}

export default Header;