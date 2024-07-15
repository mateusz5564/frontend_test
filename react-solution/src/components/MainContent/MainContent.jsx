import React from 'react'
import "./MainContent.scss";
import TextBlocks from '../TextBlocks/TextBlocks';

const MainContent = () => {
  return (
    <main className='main'>
      <div className="main__heading">
        <h1 className='main__heading-text'>Nagłówek H1</h1>
        <hr className='main__heading-line' />
      </div>
      <TextBlocks />
    </main>
  )
}

export default MainContent