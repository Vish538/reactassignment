import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [theme, setTheme] = useState('dark'); // Default theme is dark
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else if (value === '←') {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className={`calculator ${theme}`}>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? (
          <span role="img" aria-label="light-mode-button">
            🌞
          </span>
        ) : (
          <span role="img" aria-label="dark-mode-button">
            🌜
          </span>
        )}
      </div>
      <div className="calculator-display">
        <div className="overlay">
          {result !== '' ? result : display}
        </div>
      </div>
      <div className="calculator-buttons">
        <div className="button-column">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button className="operation-button" onClick={() => handleButtonClick('/')}>/</button>
          <button onClick={() => handleButtonClick('C')}>C</button> {/* Clear */}
        </div>
        <div className="button-column">
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button className="operation-button" onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="button-column">
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button className="operation-button" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="button-column">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('←')}>←</button> {/* Backspace */}
          <button className="operation-button" onClick={() => handleButtonClick('+')}>+</button>
          <button className="operation-button" onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
