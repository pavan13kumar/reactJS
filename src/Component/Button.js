import React from 'react';

// Normal BUTTON 
export function Button(){
    const Shoot=()=>{
      // console.log("Button clicked");
      alert ("Simple Button")
    }
    return (
        <>
        {/* <button onClick={Shoot()}>This is simple Button</button> */}   {/*  function call */}
      <button onClick={Shoot}> This is simple Button</button>             {/* function handle */}  
      <ParaButton/>
      </>
      // if the onClick event is like {Shoot()} then the console data will be displayed in the console before we click the button So the function should not be called it must be handel only
      // In case of Class component we must make use of this keyword to handel any functions.
      )
    
  }
  


  // Button with parameter
  export function ParaButton(){
    const PButton=(para)=>{
      alert (para)
    }
    return(
      <button onClick={()=> PButton("Button with parameter")}>THIS IS BUTTON WITH PARAMETER</button>
      )
   }
  
