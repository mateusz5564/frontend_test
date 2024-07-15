import React from 'react'
import "./TextBlocks.scss"
import RadioButtonsBlock from './RadioButtonsBlock'
import ActionButtonsBlock from './ActionButtonsBlock'
import TextContentBlock from './TextContentBlock'

const TextBlocks = () => {
  return (
    <section className='text-blocks'>
      <RadioButtonsBlock />
      <ActionButtonsBlock />
      <TextContentBlock />
    </section>
  )
}

export default TextBlocks