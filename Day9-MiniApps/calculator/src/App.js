import { useState } from 'react';
import './App.css';

import Button from './components/CalBtn';
import InputField from './components/InputField';

function App() {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression(prevExpression => prevExpression + value);
  };

  const handleEvaluate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
    ,'Del'
  ];


  return (
    <div className="App">
      <h2 className='text-center'>Calculator</h2>
      <div className='container text-center my-5'>
        <InputField value={expression} />
        <div className='my-3'>
          {buttons.map((button, index) => (
            
            <Button key={index} label={button} onClick={() => {
              if (button === '=') {
                handleEvaluate();
              } else if (button === 'C') {
                handleClear();
              } 
              else if (button === 'Del') {
                setExpression(expression.slice(0,-1));
              }
              else {
                handleButtonClick(button);
              }
            }} />

          ))}
        </div>
      </div>
    </div>
  );
}

export default App;