import React, { useEffect, useState } from 'react'
import UseEffect from './UseEffect';

function HookMouse  () {
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
    },[])//hey useEffect please render only at the initial stage (without any dependency reason we are placing the empty [])


  return (
    <div>
      Hooks Coordinates X-{X} and Y-{Y}
    </div>
  )
}

export default HookMouse


// NOTE: by using the [] at the useEffect method we are doing the same like component didmount in class component