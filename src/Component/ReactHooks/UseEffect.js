import React, {  useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// useEffect accepts two arguments. The second argument is optional.
// useEffect(<function>, <dependency>)


// const UseEffect = () => {

//     const [count,setCount]=useState(0);

//     const Increment=()=>{
//         setCount(prevcount=>(prevcount+1));
//     }

//     useEffect(()=>{
//         document.title=(`Clicked ${count} times`)
//     })

//   return (
//     <div>
//       <button onClick={Increment}>Clicked {count} times</button>
//     </div>
//   )
// }



//Note: Refer useEffect in W3Schools
//useEffect method does'nt have a control i.e it calls every time when the component render(as soon as count value changes)


const UseEffect = () => {

  const [count,setCount]=useState(0);

  useEffect(()=>{
      let timer=setTimeout(()=>{
          setCount((prevcount)=>prevcount+1);
      });   

      return ()=>clearTimeout(timer)

  },[]);

return (
  <div>
    <h1>I've rendered {count} times!</h1>
     {/* <button onClick={()=>setCount(count+1)}>clicked {count} times</button> */}
    
  </div>
)
}


// const UseEffect = () => {
//   const [count,setCount]=useState(0);
//   const [name,setName]=useState("")
  

//   useEffect(()=>{
//     console.log(" useEffect Updating the Document title");
//     document.title=(`Clicked ${count} times`)
//   },[count]) // Hey useEffect method plz execute when ever the value of the count changes(remove thet [count] and see the console )

  
//   return (
//     <div>
//       <input type='text' onChange={(e)=>setName(e.target.value)}></input>
//       <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
//     </div>
//   )
// }



export default UseEffect
