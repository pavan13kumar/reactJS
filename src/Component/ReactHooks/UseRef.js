import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from "react-dom/client";
//NOTE: The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.
// ** useRef() only returns one item. It returns an Object called current.
// function UseRef() {
//     const [inputValue,setInputValue]=useState('');
//     const count =useRef(0);
//     useEffect(()=>{
//         count.current=count.current+1;
//         console.log("useEffect render");
//         console.log("count- ",count.current);
//     },[])
//   return (
//     <div>
      
//       <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
//       <h1>Render  Count :{count.current}</h1>
//     </div>
//   )
// }




//CASE 2: focusing the input field
//NOTE:we can add a ref attribute to an element to access it directly in the DOM.

// CASE 2A: BY ON CLICK
// function UseRef() {
//     const inputElement=useRef();
//     const focus=(()=>{
//         inputElement.current.focus();
//     })
//   return (
//     <div>  
//       <input ref={inputElement} type='text'/>
//       <button onClick={focus}>Focus </button>
//     </div>
//   )
// }


// CASE 2B: BY DEFAULT 
// function UseRef(){

//   const inputRef = useRef();
//   useEffect(() =>{
//       inputRef.current.focus();
//   })
//   return(
//     <>
//     <input ref={inputRef} type='text'></input>
//     </>
//   )
// }

//CASE 3:The useRef Hook can also be used to keep track of previous state values.This is because we are able to persist useRef values between renders.

//   function UseRef() {
//    var previousInputRef= useRef();
//    const [InputValue,setInputValue]=useState("")

//    useEffect(()=>{
//     previousInputRef.current=InputValue; // coping the content of usestate to useRef
//    },[InputValue])

//   return (
//     <div>
//       <input type='text' value={InputValue} onChange={(e)=> setInputValue(e.target.value)}/>
//       <h2>currentValue:{InputValue}</h2>
//       <h2> previousValue:{previousInputRef.current}</h2>
//     </div>
//   )
// }


// case 4: DisAdvantage of useRef Hook
//  function UseRef() {

//   const [timer,setTimer]=useState(0);

//   useEffect(()=>{
//     var Interval=setInterval(() => {
//       setTimer(prevTimer => prevTimer + 1)
//     },1000);
//     return ()=>{
//       clearInterval(Interval)
//     }
//   },[])

//   return (
//     <div>
//       Timer-{timer};
//       <button onClick={() => clearInterval(Interval)}> clear Timer</button>
//       {/* if we try to clear the interval with a event call it would leed to a error the interval is block scope TO overcome this issue we make use of the useRef Hook*/}
//     </div>
//   )
// }

//Solution to above Case(by making use of useRef)
function UseRef() {
 const [timer,setTimer]= useState(0);
 
 const refInterval = useRef();
 const tick=()=>{
    setTimer(prevtimer=>prevtimer+1);
 }

 useEffect(()=>{
  refInterval.current =setInterval(tick,1000)
  return ()=>{
    clearInterval(refInterval.current)
  }

 },[])
  return (
    <div>
      Timer-{timer}
      <button onClick={() => clearInterval(refInterval.current)}>clear Timer</button>
    </div>
  )
}



export default UseRef
