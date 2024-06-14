// // CASE1:
// import React from 'react'
// function Todos({todos}) {
//     console.log("child render");
//   return (
//     <div>
//       <h2>My Todos</h2>
//       {todos.map((todos,index)=>{
//         return(
//         <p key={index}>{todos}</p> )
//       })}
//     </div>
//   )
// }

// export default Todos

//NOTE:When you click the increment button, the Todos component re-renders.(Look at in console i.e "child render" get's repeated every time when the value is incremented)



// CASE2:To fix the above issue

import React, { useState } from 'react'
import { memo } from 'react';
function Todos({todos}) {
    console.log("child render");
    // console.log(" Todos child component  was rendered at", new Date().toLocaleTimeString());
  
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todos,index)=>{
        return( 
            <p key={index}>{todos}</p> 
        )
      })}
    
    
    </div>
  )
}

export default memo(Todos)