import { useState } from 'react'
import './CalculatorTab.css'

function CalculatorTab() {
  const [number1, setNumber1] = useState('20')
  const [number2, setNumber2] = useState('10')
  const result = number1 / number2

  return (
    <div>
      <h2>Division Calculator</h2>
      <div className="calculator-inputs">
        <input 
            type="number" 
            value={number1} 
            onChange={(e) => setNumber1(Number(e.target.value))}
            placeholder="Enter first number"
        />
        <input 
            type="number" 
            value={number2} 
            onChange={(e) => setNumber2(Number(e.target.value))}
            placeholder="Enter second number"
        />
      </div>
      
      {result && <p>Result: {result}</p>}
    </div>
  )
}

export default CalculatorTab 