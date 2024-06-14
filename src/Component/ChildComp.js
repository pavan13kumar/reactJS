import React from 'react'

function ChildComp(props) {
  return (
    <div>
      <button onClick={props.greetHandler}> GreetParent</button>
    </div>
  )
}

//  PASSING THE PARAMETER
// function ChildComp(props) {
//     return (
//       <div>
//           <button onClick={()=>props.greetHandler("Child")}> GreetParent</button>
//       </div>
//     )
//   }

export default ChildComp;
