import { useState } from 'react'
import './App.css'
import { resetButton } from './assets/components/functions.js';
import { listOfColors } from './assets/components/listOfColors.js';




function App() {
  // Use state
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [index, setIndex] = useState(0);

 // Click Me Button
  const clickMeButton = () => {
    const randomIndex = Math.floor(Math.random() * listOfColors.length);
    setIndex(randomIndex);
    setNumberOfClicks(numberOfClicks + 1);
  }
// Click Next Button
  const clickNextButton = () => {
    const nextIndex = (index + 1) % listOfColors.length;
    setIndex(nextIndex);
    setNumberOfClicks(numberOfClicks + 1);
  }
// Click Previous Button
  const clickPreviousButton = () => {
    const prevIndex = (index - 1 + listOfColors.length) % listOfColors.length;
    setIndex(prevIndex);
    setNumberOfClicks(numberOfClicks + 1)
  }

// Handle Reset Button
  const handleReset = () => {
    setIndex(0);
    setNumberOfClicks(0);
    resetButton();
  }


  return (
    <div className='background-switcher-container' style ={{backgroundColor: listOfColors[index]}}>
      <div className='background-switcher-text-container'>
        <div className='background-switcher-display'> 
        <p>Number of Clicks: {numberOfClicks}</p>
        </div>
        <h2 className='color-switcher-text-background'> Background Color: </h2>
        <h2 className='color-switcher-text-color' style = {{color: listOfColors[index]}}> {listOfColors[index]} </h2>
      </div>
      <div className='color-switcher-reset-container'>
        <button className='color-switcher-button' onClick={handleReset}> RESET </button>
      </div>
      <div className='color-switcher-button-container'>
        <button className='color-switcher-button'onClick={clickPreviousButton}> PREVIOUS </button>
        <button className='color-switcher-button' onClick={clickMeButton}> CLICK ME </button>
        <button className='color-switcher-button' onClick={clickNextButton}> NEXT </button>
      </div>
    </div>
  )
}

export default App
