import React from 'react'

function FunctionComp() {
  return (
  <div>
       <h1>Hey I'm the Function component </h1>
  </div>
 
  )
}

       
// function FunctionComp() {

//     const [count, setCount] = useState(0);

//   return (
//     <div>
//       COUNT → {count}
//       <button onClick={() => {setCount(count+1)}}> + </button>
      
//       <button onClick={() => {(count > 0) ? setCount(count - 1) : setCount(0)}}> - </button>

//       <button onClick={() => {setCount(0)}}> Reset </button>
      
//     </div>
//   )
// }


export default FunctionComp

