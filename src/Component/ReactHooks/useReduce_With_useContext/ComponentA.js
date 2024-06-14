import React,{useContext} from 'react'
import {CountContext} from './Main'


function ComponentA() {
   const countContext =useContext(CountContext);
   console.log(countContext)  
  return (
    <div>
      Component A
         <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
         <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
         <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
