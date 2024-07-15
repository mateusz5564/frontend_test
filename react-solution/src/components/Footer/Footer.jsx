import React from 'react'
import "./Footer.scss";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__css-is-awesome">
        <span className='footer__css-is-awesome-text'>CSS</span>
        <span className='footer__css-is-awesome-text'>is</span>
        <span className='footer__css-is-awesome-text'>awesome</span>
      </div>
      <button className='footer__button'>
        <span className='footer__button-text'>Pokaz</span>
        <FaChevronUp className='footer__button-icon' />
      </button>
    </footer>
  )
}

export default Footer