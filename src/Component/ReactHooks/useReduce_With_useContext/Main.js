import React,{createContext, useReducer}from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'


export const CountContext = React.createContext();

const reducer = (state,action) => {
  switch (action) {
    case 'increment':
      return(state+1)

    case 'decrement':
      return(state-1)
    
    case 'reset':
      return(initialState)
    
    default:
      return(state)
  }
}

//  Initial state(simple variable)
let initialState= 0;

function Main() { 
  //useReducer
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div>
      <p>Count »»» {count} </p>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </div>
    </CountContext.Provider>
  )
}

export default Main
