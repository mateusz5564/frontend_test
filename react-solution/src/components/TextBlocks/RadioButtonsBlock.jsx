import React from 'react'
import "./RadioButtonsBlock.scss"

const RadioButtonsBlock = () => {
  return (
    <div className="radio-buttons-block">
      <h2 className="radio-buttons-block__heading">Blok pierwszy</h2>
      <fieldset className="fieldset">
        <legend className="sr-only">Wybierz co chcesz dodać do bloku z tekstem</legend>

        <div className='fieldset__radio-wrapper'>
          <input className='fieldset__radio-btn' type="radio" name="option" id="first-option" value="first-option" />
          <label className='fieldset__radio-label' htmlFor="first-option">Opcja pierwsza</label>
        </div>

        <div className='fieldset__radio-wrapper'>
          <input className='fieldset__radio-btn' type="radio" name="option" id="second-option" value="second-option" />
          <label className='fieldset__radio-label' htmlFor="second-option">Opcja druga</label>
        </div>

        <div className='fieldset__radio-wrapper'>
          <input className='fieldset__radio-btn' type="radio" name="option" id="third-option" value="third-option" />
          <label className='fieldset__radio-label' htmlFor="third-option">Opcja trzecia</label>
        </div>
      </fieldset>
    </div>
  )
}

export default RadioButtonsBlock