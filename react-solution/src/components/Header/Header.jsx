import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <a href='/' className='header__logo-link'>
        <div className='header__logo'>
          <FaHtml5 className='header__logo-icon' size={"2.5rem"} />
        </div>
      </a>
      <p className='header__text'>Zadanie <span className='header__text-span'>rekrutacyjne</span></p>
    </header>
  )
}

export default Header