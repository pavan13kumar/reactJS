import React, { useReducer } from 'react'


//»»»CASE 1:
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return (state + 1)

    case 'decrement':
      return (state - 1)

    case 'reset':
      return (initialState)

    default:
      return (state)
  }
}

//  // Initial state(simple variable)
let initialState = 0;

function UseReduce() {

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p> Count - {count}</p>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}


//»»» CASE 2: by making the action  Has a object
// // Reducer function
// const counterReducer = (state, action)=>{
//   console.log(state, action)
//   switch (action.type) {
//     case "INCREMENT":
//       return{count: state.count+1};

//     case "DECREMENT":
//         return{count: state.count-1};

//     case "RESET":
//         return {count: initialState.count};

//     default:
//       return {state}
//   }
// }

// // Initial state (object)
// let initialState ={count:0}

// function UseReduce() {

//   // Using useReducer with the reducer function and initial state
//   const [state,dispatch] = useReducer(counterReducer, initialState);
//   return (
//     <div>
//       <p> Count: {state.count}</p>
//       <button onClick={()=> dispatch({ type: "INCREMENT"})}> Increment</button>
//       <button onClick={()=> dispatch({ type: "DECREMENT"})}> Decrement</button>
//       <button onClick={()=> dispatch({ type: "RESET"})}> Reset</button>
//     </div>
//   )
// }


// »»» CASE 3: Adv of using has an object (we can add an aditional property(value property added) )
// Reducer function
// const counterReducer = (state, action)=>{
//   switch (action.type) {
//     case "INCREMENT":
//       return{count: state.count + action.value};

//     case "DECREMENT":
//         return{count: state.count- action.value};

//     case "RESET":
//         return {count: initialState.count};

//     default:
//       return {state}
//   }
// }


// // Initial state
// let initialState ={count:0}

// function UseReduce() {

//   // Using useReducer with the reducer function and initial state
//   const [state,dispatch] = useReducer(counterReducer, initialState);
//   console.log(state,dispatch)
//   return (
//     <div>
//       <p> Count: {state.count}</p>
//       <button onClick={()=> dispatch({ type: "INCREMENT", value: 1})}> Increment</button>
//       <button onClick={()=> dispatch({ type: "DECREMENT", value: 1})}> Decrement</button>
//       <button onClick={()=> dispatch({ type: "RESET", value: 0})}> Reset</button>
//       <button onClick={()=> dispatch({ type: "INCREMENT", value: 5})}> Increment by 5</button>
//       <button onClick={()=> dispatch({ type: "DECREMENT", value: 5})}> Decrement by 5</button>
//     </div>
//   )
// }


// // »»» CASE 4: using state as an object 
// // Reducer function
// const counterReducer = (state, action)=>{
//   // console.log(state,action)
//   switch (action.type) {
//     case "INCREMENT":
//       return{...state, FirstCounter: state.FirstCounter + action.value};

//     case "DECREMENT":
//       return{...state, FirstCounter: state.FirstCounter - action.value};

//     case "INCREMENT2":
//       return{...state, SecondCounte: state.SecondCounte + action.value};

//     case "DECREMENT2":
//       return{...state, SecondCounte: state.SecondCounte - action.value};      

//     case "RESET":
//       return initialState;

//     default:
//       return {state}
//   }
// }

// // Initial state
// let initialState ={
//   FirstCounter:0,
//   SecondCounte:5
// }

// function UseReduce() {

//   // Using useReducer with the reducer function and initial state
//   const [count,dispatch] = useReducer(counterReducer, initialState);

//   // console.log(count, initialState, dispatch)
//   return (
//     <div>
//       <div> First Counter: {count.FirstCounter}</div> 
//       <div> Second Counte: {count.SecondCounte} </div>  

//       <button onClick={()=> dispatch({ type: "INCREMENT", value: 1})}> Increment</button>
//       <button onClick={()=> dispatch({ type: "DECREMENT", value: 1})}> Decrement</button>
//       <button onClick={()=> dispatch({ type: "INCREMENT", value: 5})}> Increment by 5</button>
//       <button onClick={()=> dispatch({ type: "DECREMENT", value: 5})}> Decrement by 5</button>
//       <div>
//       <button onClick={()=> dispatch({ type: "INCREMENT2", value: 1})}> Increment Counter2</button>
//       <button onClick={()=> dispatch({ type: "DECREMENT2", value: 1})}> Decrement Counter2</button>
//       <button onClick={()=> dispatch({ type: "RESET"})}> Reset</button>
//       </div>
//     </div>
//   )
// }



// // »»»CASE 5:  using multiple useReduce  methods
// const reducer = (state,action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;

//     case "decrement":
//       return state - 1;

//     case "reset":
//       return initialState;

//     default:
//       return state;
//   }
// }

// //  Initial state(simple variable)
// let initialState= 0;

// function UseReduce() {

//   const [count, dispatch] = useReducer(reducer, initialState);
//   //we can use same peice of code for multiple useReducer 
//   const [counterTwo, dispatchTwo] = useReducer(reducer, initialState);   // just the return types of the reducer has been changed

//   return (
//     <div>
//       <p> CounterONE - {count}</p>
//       <button onClick={() => dispatch('increment')}>Increment</button>
//       <button onClick={() => dispatch('decrement')}>Decrement</button>
//       <button onClick={()=> dispatch('reset')}>Reset</button>
//       <hr/>
//       <div>
//       <p> CounterTWO - {counterTwo}</p>
//       <button onClick={() => dispatchTwo('increment')}>Increment</button>
//       <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
//       <button onClick={()=> dispatchTwo('reset')}>Reset</button>
//       </div>

//     </div>
//   )
// }

export default UseReduce


//NOTE:
// const [state, dispatch] = useReducer(reducer, initialArg);

// state: This is the current state that is managed by the reducer function.
// dispatch: This is a function that allows you to send actions to the reducer to update the state.
// reducer: A function that specifies how the state should be updated based on the dispatched actions. It takes the current state and an action as arguments and returns the new state.
// initialArg: This is an optional argument that represents the initial state. You can pass an initial state value or a function that computes the initial state lazily.


//NOTE 2: uses
// useState- state management
// useEffect - side effects
// useContext - context Api
// useReduce - reduce

