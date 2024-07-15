import React from 'react'
import "./Footer.scss";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__css-is-awesome-wrapper">
        <div className="footer__css-is-awesome">
          <span className='footer__css-is-awesome-text'>CSS</span>
          <span className='footer__css-is-awesome-text'>is</span>
          <span className='footer__css-is-awesome-text'>awesome</span>
        </div>
      </div>
      <div className='footer__nabthat-wrapper'>
        <div className='footer__nabthat'>
          <p className='footer__nabthat-text'>Nabthat</p>
        </div>
      </div>
      <div className='footer__button-wrapper'>
        <button className='footer__button'>
          <span className='footer__button-text'>Pokaz</span>
          <FaChevronUp className='footer__button-icon' />
        </button>
      </div>
    </footer>
  )
}

export default Footer