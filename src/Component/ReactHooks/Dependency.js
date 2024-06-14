import React, { useEffect, useState } from 'react'

const IntervalHookCounter = () => {
   const [count,setCount]= useState(0);

   const tick=()=>{
    // setCount(prevcount=>prevcount+1);
    
    setCount(count +1);
   }


   useEffect(()=>{
    console.log("useEffect called");
    const interval=setInterval(tick,1000)
    return()=>{
        clearInterval(interval)
    }
   }
      // ,[] // on use of precount
   ,[count]

   )
    
  return (
    <div>
      <h1 style={{textAlign:"center"}}>{count}</h1>
    </div>
  )
}

export default IntervalHookCounter


//NOTE:
// setTimeout(function, milliseconds ) Executes a function, after waiting a specified number of milliseconds. 
// setInterval(function, milliseconds ) Same as setTimeout(), but repeats the execution of the function once in a period of time.