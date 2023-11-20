import { useState } from 'react';

const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '.', '0', '+',
];

export default function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => setInput((prevInput) => prevInput + value);

  const handleBackspace = () => setInput((prevInput) => prevInput.slice(0, -1));

  const handleClear = () => setInput('');
  
  const handlePercentage = () => setInput((prevInput) => (parseFloat(prevInput) / 100).toString());

  const handleNegate = () => setInput((prevInput) => (parseFloat(prevInput) * -1).toString());

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className='calculator-app'>
      <div className='container'>
        <input defaultValue={input} autoFocus />
        <div className='grid'>
          <button onClick={handleBackspace}>C</button>
            <button onClick={handleClear}>AC</button>
            <button onClick={handlePercentage}>%</button>
            <button onClick={handleNegate}>+/-</button>
            {buttons.map((value) => (
              <button key={value} onClick={() => handleClick(value)}>
                {value}
              </button>
            ))}
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}
