import React from 'react'
import "./TextContentBlock.scss"
import { useAppContext } from '../../context/AppContext';

const TextContentBlock = () => {
  const { textBlocks } = useAppContext();

  return (
    <div className='text-content-block'>
      <h2 className='text-content-block__heading'>Blok z długą nazwą, która sama się przytnie</h2>
      <p className='text-content-block__content'>
        {textBlocks && textBlocks.map(text => (
          <span>
            {text}
          </span>
        ))}
      </p>
    </div>
  )
}

export default TextContentBlock