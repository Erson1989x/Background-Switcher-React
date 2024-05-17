import { useState } from 'react'
import './App.css'
import { resetButton } from './assets/components/functions.js';

function App() {
  const [listOfColors, setListOfColors] = useState(['#AD636C', '#009B72', '#6761A8', '#347E8D', '#798186', '#B4D2BA', '#B57F50', '#8ED081', '#F00000', '#bdc3c7']);
  const [currentColor, setCurrentColor] = useState('#AD636C');
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [index, setIndex] = useState(0);

  const clickMEButton = () => {
    const randomIndex = Math.floor(Math.random() * listOfColors.length);
    setIndex(randomIndex);
    updateColors(randomIndex);
  }

  const clickNextButton = () => {
    const nextIndex = (index + 1) % listOfColors.length;
    setIndex(nextIndex);
    updateColors(nextIndex);
  }

  const clickPreviousButton = () => {
    const prevIndex = (index - 1 + listOfColors.length) % listOfColors.length;
    setIndex(prevIndex);
    updateColors(prevIndex);
  }

  const updateColors = (colorIndex) => {
    const color = listOfColors[colorIndex];
    document.querySelector('.background-switcher-container').style.backgroundColor = color;
    document.querySelector('.color-switcher-text-color').style.color = color;
    document.querySelector('.color-switcher-text-color').textContent = color;

    setCurrentColor(color);
    setNumberOfClicks(numberOfClicks + 1);
  }

  const handleReset = () => {
    resetButton(setCurrentColor, setNumberOfClicks, setIndex);
  }


  return (
    <div className='background-switcher-container'>
      <div className='background-switcher-text-container'>
        <div className='background-switcher-display'> 
        <p>Number of Clicks: {numberOfClicks}</p>
        </div>
        <h2 className='color-switcher-text-background'> Background Color: </h2>
        <h2 className='color-switcher-text-color'> {currentColor} </h2>
      </div>
      <div className='color-switcher-reset-container'>
        <button className='color-switcher-button' onClick={handleReset}> RESET </button>
      </div>
      <div className='color-switcher-button-container'>
        <button className='color-switcher-button'onClick={clickPreviousButton}> PREVIOUS </button>
        <button className='color-switcher-button' onClick={clickMEButton}> CLICK ME </button>
        <button className='color-switcher-button' onClick={clickNextButton}> NEXT </button>
      </div>
    </div>
  )
}

export default App
