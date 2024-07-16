import React from 'react'
import "./ActionButtonsBlock.scss"
import { useAppContext } from '../../context/AppContext'

const ActionButtonsBlock = () => {
  const { optionsRadioValue, textOptions, setTextBlocks } = useAppContext();

  const handleReplace = () => {
    const text = getOptionToReplace(optionsRadioValue, textOptions);
    setTextBlocks([text]);
  }

  const handleAppend = () => {
    console.log(optionsRadioValue);
    // 1. get option that not exists yet, if it is not possible show alert
    // 2. append it to textbock and order asc
  }

  const getOptionToReplace = (radioValue, textOptions) => {
    switch (radioValue) {
      case "first":
        return textOptions[0];

      case "second":
        return textOptions[1];

      case "random":
        const index = Math.floor(Math.random() * textOptions.length - 2) + 2;
        return textOptions[index];

      default:
        throw new Error("Unhandled option");
    }
  }

  return (
    <div className='action-buttons-block'>
      <h2 className='action-buttons-block__heading'>Blok drugi</h2>
      <div className='action-buttons-block__buttons'>
        <button className='action-buttons-block__button' onClick={handleReplace}>Zastąp</button>
        <button className='action-buttons-block__button' onClick={handleAppend}>Doklej</button>
      </div>
    </div>
  )
}

export default ActionButtonsBlock