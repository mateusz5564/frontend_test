import React from 'react'
import "./Footer.scss";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <input type="checkbox" id="footer__checkbox" className='footer__checkbox' />
      <div className='footer__content'>
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
        <div className='footer__checkbox-wrapper'>
          <label for="footer__checkbox" className='footer__checkbox-label'>
            <span className='footer__checkbox-label-text'>Pokaz</span>
            <FaChevronUp className='footer__checkbox-label-icon' />
          </label>
        </div>
      </div>

      <div className='footer__options'>
        <ul className='footer__options-list'>
          <li className='footer__options-list-item'>
            <button className='footer__options-button'>
              <FaChevronRight className='footer__options-button-icon' />
              <span className='footer__options-button-text'>Zresetuj ustawienia</span>
            </button>
          </li>
          <li className='footer__options-list-item'>
            <button className='footer__options-button'>
              <FaChevronRight className='footer__options-button-icon' />
              <span className='footer__options-button-text'>Pokaz dane osobowe</span>
            </button>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer