// useEffect with cleanup 
// Some effects require cleanup to reduce memory leaks.
// Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
// We do this by including a return function at the end of the useEffect Hook

import React, { useState,useEffect } from 'react'


const CleanUp = () => {
    const [display, setDisplay]=useState(true);
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}> Toggle Display={`${display}`} </button>
      {(display) && <HookMouse/> } {/* if the display is set to TRUE then render HookMouse else don't do anything  */}
     
    </div>
  )
}
export default CleanUp



const HookMouse = () => {
    const [X,setX]=useState(0);
    const [Y,setY]=useState(0);

    const logMousePosition=(e)=>{
        console.log("mouse event");
        setX(e.clientX);
        setY(e.clientY); 
    }

    useEffect(()=>{
        console.log("UseEffect called");
        window.addEventListener('mousemove',logMousePosition)

        // even though the display  value is set to false the useEffect method is calling, To prevent this we have to make use of remove EventListener,(remove that return statement and test it)
        return ()=>{
            console.log("Terminate useEffect(EventListener removed)");
            (window.removeEventListener('mousemove', logMousePosition))} 
    },[])//hey useEffect please render only at the initial stage (without any dependency reason we are placing the empty [])


  return (
    <div>
      Hooks Coordinates X-{X} and Y-{Y} 
    </div>
  )
}


