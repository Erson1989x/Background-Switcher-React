export const resetButton = (setCurrentColor, setNumberOfClicks, setIndex) => {
    setCurrentColor('#AD636C');
    setNumberOfClicks(0);
    setIndex(0);

    const defaultColor = '#AD636C';
    document.querySelector('.background-switcher-container').style.backgroundColor = defaultColor;
    document.querySelector('.color-switcher-text-color').style.color = defaultColor;
    document.querySelector('.color-switcher-text-color').textContent = defaultColor;
  }
