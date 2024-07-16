import React from 'react'
import "./ActionButtonsBlock.scss"
import { useAppContext } from '../../context/AppContext'
import { getOptionToReplace, getOptionToAppend } from './optionGetters'

const ActionButtonsBlock = () => {
  const { optionsRadioValue, textOptions, textBlocks, setTextBlocks } = useAppContext();

  const handleReplace = () => {
    const text = getOptionToReplace(optionsRadioValue, textOptions);
    setTextBlocks([text]);
  }

  const handleAppend = () => {
    const textToAppend = getOptionToAppend(optionsRadioValue, textOptions, textBlocks);

    if (!textToAppend) {
      alert("Ten tekst już jest dodany, nie można dodawać duplikatów!");
      return;
    }

    setTextBlocks(state => {
      var textBlocks = [...state];
      textBlocks.push(textToAppend);
      textBlocks.sort();

      return textBlocks;
    })
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