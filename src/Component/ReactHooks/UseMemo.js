import React, { useState } from 'react'


// In React, useMemo and useCallback are both hooks that help optimize your components by memoizing values and functions. They are especially useful when you want to prevent unnecessary recalculations or re-rendering of components.

////CASE 1: Simple incrementing function
// function UseMemo() {

// const [counterOne,setCounterOne] = useState(0);
// const [counterTwo,setCounterTwo] = useState(0);

// const IncrementCounterOne = () =>{
//     setCounterOne(prevcount=>prevcount+1)
// }

// const IncrementCounterTwo = () =>{
//     setCounterTwo(prevcount=>prevcount+1)
// }

//     const isEven=()=>{
//         let i=0;
//         while(i<2000000000){
//             i+=1;
//         }
//         // delay in changing the state bcz of the while loop
//         return (counterOne %2 ==0)
//     }
//   return (
//     <>
//     <div>
//       <button onClick={IncrementCounterOne}>CounterOne → {counterOne}</button> 
//       <span>{isEven() ? "Even" :"Odd"}</span>
//     </div><br/>
//     <div>
//       <button onClick={IncrementCounterTwo}>CounterTwo → {counterTwo}</button>
//     </div>
//     </>
//   )
// }

// NOTE: In the above example we are trying to update the counterOne value with some delay with the while loop that's okay but, the thing is counterTwo also taking some amount of time for updating, that should not


////CASE 2: In the case1 the while loop is affecting the counterTwo also, to resolve this we are using the useMemo Hook with a dependency of counterOne
import { useMemo } from 'react';
function UseMemo() {

    const [counterOne,setCounterOne] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);
    
    const IncrementCounterOne = () =>{
        setCounterOne(prevcount=>prevcount+1)
    }
    
    const IncrementCounterTwo = () =>{
        setCounterTwo(prevcount=>prevcount+1)
    }
    
    const isEven = useMemo(()=>{
        let i=0;
        while(i<2000000000){
            i+=1;
        }
        return (counterOne % 2 ==0)
    },[counterOne])
   
      return (
        <>
        <div>
          <button onClick={IncrementCounterOne}>CounterOne → {counterOne}</button> 
          <span>{isEven ? "Even" :"Odd"}</span> {/* since isEven is not a function we removed parantheses, isEven is a return value of the useMemo function */}
        </div><br/>
        <div>
          <button onClick={IncrementCounterTwo}>CounterTwo → {counterTwo}</button>
        </div>
        </>
      )
    }


    //NOTE: So now the counterOne has some delay and counterTwo will not
    
export default UseMemo
