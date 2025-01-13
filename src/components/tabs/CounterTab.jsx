import { useState } from 'react'

function CounterTab() {
  const [count, setCount] = useState(1)

  return (
    <div className="counter-tab">
        {count && (
            <div className="controls">
                <button onClick={() => setCount(prev => prev - 1)}>-</button>
                <span className="count">Count: {count}</span>
                <button onClick={() => setCount(prev => prev + 1)}>+</button>
            </div>
        )}
    </div>
  )
}

export default CounterTab 