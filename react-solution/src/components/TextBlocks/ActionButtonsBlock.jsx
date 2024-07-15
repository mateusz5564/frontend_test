import React from 'react'
import "./ActionButtonsBlock.scss"

const ActionButtonsBlock = () => {
  return (
    <div className='action-buttons-block'>
      <h2 className='action-buttons-block__heading'>Blok drugi</h2>
      <div className='action-buttons-block__buttons'>
        <button className='action-buttons-block__button'>Zastąp</button>
        <button className='action-buttons-block__button'>Doklej</button>
      </div>
    </div>
  )
}

export default ActionButtonsBlock