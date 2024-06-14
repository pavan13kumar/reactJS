import React, { useState } from 'react'


//CASE 1: passing the props through multiple components
// function UseContextHook() {
//     const [user,setUser]=useState("Hello Welcome");
//   return (
//     <div>
//       <h1>{user}</h1>
//       <Component2 props={user}/>
//     </div>
//   )
// }


// function Component2({props}) {
//   return (
//     <div>
//       <h2>Component2</h2>
//         <Component3 props={props}/>
//     </div>
//   )
// }


// function Component3({props}) {
//     return (
//       <div>
//         <h2>Component3</h2>
//         <Component4 props={props}/>
//       </div>
//     )
//   }

  
// function Component4({props}) {
//     return (
//       <div>
//         <h2>Component4</h2>
//         <Component5 props={props}/>
//       </div>
//     )
//   }

  
// function Component5({props}) {
//     return (
//       <div>
//               <h1>{`${props} Again!`}</h1>
            
//       </div>
//     )
//   }


  
  //CASE 2: using the useContext Hook
  //import the createcontext hook then initialise it ,wrap the component with  initialised createcontext hook + .Provider having the value={}and use the createContext in the child component with a parameter of createContext 

//   import { createContext } from 'react';
//   import { useContext } from 'react';
//   const UserContext=createContext();

//   function UseContextHook() {
//     const [user,setUser]=useState("Hello Welcome");
//   return (
//     <UserContext.Provider value={user}>
//     <div> 
//       <h1>{user}</h1>
//       <Component2/>
//     </div>
//     </UserContext.Provider>
//   )
// }


// function Component2({props}) {
//   return (
//     <div>
//       <h2>Component2</h2>
//       <Component3/>
//     </div>
//   )
// }


// function Component3({props}) {
//     return (
//       <div>
//         <h2>Component3</h2>
//         <Component4/>
//       </div>
//     )
//   }

  
// function Component4({props}) {
//     return (
//       <div>
//         <h2>Component4</h2>
//         <Component5/>
//       </div>
//     )
//   }

  
// function Component5() {
//    const user= useContext(UserContext)
//     return (
//       <div>
//           <h1>{user} Again!</h1>
//       </div>
//     )
//   }



//CASE 3: creating the multiple useContext 
  import { createContext } from 'react';
  import { useContext } from 'react';
  const UserContext1=createContext();
  const UserContext2=createContext();

  function UseContextHook() {
    const [user1,setUser1]=useState("Hello Welcome");
    const [user2,setUser2]=useState("This is 2nd Context");
    
  return (
    <UserContext1.Provider value={user1}>
      <UserContext2.Provider value={user2}>
    <div>
      <h1>{user1}</h1>
      <Component2/>
    </div>
    </UserContext2.Provider>
    </UserContext1.Provider>
  )
}


function Component2() {
  return (
    <div>
      <h2>Component2</h2>
      <Component3/>
    </div>
  )
}


function Component3() {
    return (
      <div>
        <h2>Component3</h2>
        <Component4/>
      </div>
    )
  }

  
function Component4() {
    return (
      <div>
        <h2>Component4</h2>
        <Component5/>
      </div>
    )
  }

  
function Component5() {
   const user1= useContext(UserContext1)
   const user2 = useContext(UserContext2)
    return (
      <div>
          <h1>{user1} Again!</h1>
          <h1>{user2}</h1>
      </div>
    )
  }
export default UseContextHook   

