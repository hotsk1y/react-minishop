import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <header className='header'>
    <NavLink className='header__logo' to="/">
      <img className='header__logo-img' src="https://purepng.com/public/uploads/thumbnail//google-st-nvt.png" alt="store-logo" />
      <div className='header__logo-text'>StadiaGaming</div>
    </NavLink>
    <NavLink className="header__basket" to='/total'>
      <img className='header__basket-logo' src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Shopping-Cart-icon.png" alt=""/>
    </NavLink>
  </header>
);

export default Header