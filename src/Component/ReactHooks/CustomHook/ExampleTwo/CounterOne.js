import React from 'react'
import useCount from './useCount'
function CounterOne() {
    const [count, IncrementCount, DecrementCount, ResetCount] = useCount(0,1)
  return (
    <div>
        <h2>CounterOne → {count}</h2>
      
      <div>
      <button onClick={IncrementCount}>↑Count</button>
      <button onClick={DecrementCount}>↓Count</button>
      <button onClick={ResetCount}>Reset</button>
      </div>

    </div>
  )
}

export default CounterOne
