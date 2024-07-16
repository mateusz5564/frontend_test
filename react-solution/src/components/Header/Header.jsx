import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import './Header.scss';
import { useAppContext } from '../../context/AppContext';

const Header = () => {
  var { personalData } = useAppContext();

  return (
    <header className='header'>
      <a href='/' alt="home page" className='header__logo-link'>
        <div className='header__logo'>
          <FaHtml5 className='header__logo-icon' size={"2.5rem"} />
        </div>
      </a>
      <p className='header__text'>
        Zadanie <span className='header__text-span'>rekrutacyjne</span>
        <span className='header__text-personal-data'>{personalData}</span>
      </p>
    </header>
  )
}

export default Header