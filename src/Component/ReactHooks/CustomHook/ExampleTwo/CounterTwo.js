import React from 'react'
import useCount from './useCount'
function Countertwo() {
    const [count, IncrementCount, DecrementCount, ResetCount] = useCount(10, 10) // (initialValue, value to be incremented)
  return (
    <div>
      <h2>CounterTwo → {count}</h2>
      <div>
      <button onClick={IncrementCount}>↑Count</button>
      <button onClick={DecrementCount}>↓Count</button>
      <button onClick={ResetCount}>Reset</button>
      </div>

    </div>
  )
}

export default Countertwo
