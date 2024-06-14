import React from 'react'
import { useState } from 'react'


// function UseState() {
//   const [count,setCount]=useState(0);
//     const UpdateHook=()=>{
//       setCount((prevCount)=>prevCount+1)
//       // setCount(count+1);
//       }


//   return (
//     <div>
//       <button onClick={UpdateHook}>You Clicked Me {count} Times</button>
//     </div>
//   )
// }

//NOTE:
//We can pass an arrow function inside this setCount() function. And this arrow function will take an arg which is the prevState value and can be called with any name. 
// It will recognize it as prevCount because setCount function had been destructured with count variable itself.
// for those who are confused about why to use previous state I will just suggest ,write setCount(count+1) again write setCount(count+1)
// so running this it will not increment by 2 ,infact it will incremented by 1 even I have called twice the setCount(), so conclusion is our previous state is not stored,
// now write like this setCount(preState=>preState+1) ,again write it so setCount(prevSate=>preState+1) ,this time it will be increment by 2 on clicking the button and then 4 and so on,so by using previous state we store the initial state just before the last rendering,hope this help




// function UseState() {
//   let [car,setCar]= useState({
//       name:"swift",
//       model:2017,
//       colour:"white",
//       combustion:"petrol"
//   })

//   const updateColour=()=>{
         

//           setCar({...car, colour:"Red"})
          
//   }
// return (
//   <div>
//     Our car is {car.colour} colour {car.name} which is {car.model} model and {car.combustion} combustion
//     {car.weels}
//     <button onClick={updateColour}> {car.colour}</button>
//   </div>
// )
// }


export default UseState

// function UseState() {
//   let[item,setItem]=useState( {
//    fname:"pavan",
//    lname:"kumar",
//    gender:"male"
//   });
  
//  //  const Handler=()=>{setItem(previousState=>{
//  //   return { ...previousState,fname:"manoj" }
//  //  })}
 
//  const Handler =()=>{setItem({...item,fname:"manoj"})}
 
      
//    return (
//      <div>
//      gender  is {item.gender} and name is {item.fname}
//        <button onClick={Handler}>Add data</button>
//       {/* <h1>{result}</h1> */}
 
//    </div>
//  )
//  }
//  =======================================================================================================================
 
//CASE 1A:
// function UseState(){
//   const [data,setData]=useState({
//     fname:"pavan",
//     lname:"kumar",
//     age:22,
//     address:"Chikkaballapur"
//   });
   
//     const result = Object.values(data).map((values)=>values).join(" "); 
//   return(
//   <div>
//    <p > {result} </p> 
//   </div>)
// }


// Object.values() for retriving the obj values.
// Object.keys() for retriving the obj keys.
// Object.entries() for retriving  the both key and values.



//CASE 1B:
// function UseState(){
//   const [data,setData]=useState({
//     fname:"pavan",
//     lname:"kumar",
//     age:22,
//     address:"Chikkaballapur"
//   });
   
     
//   return(
//   <div>
//     {Object.values(data).map((values,index)=> (<p key={index}>{values}</p>))}
//   </div>)
// }

//NOTE:
// Object.values() method to get an array of the values from the data Object(`["pavan",'kumar",22,"chikkaballapur"]`).
//  join(" ") method to join the values with space separtor


//CASE 2A:
// function UseState(){
//   const [data,setData]=useState({
//     fname:"pavan",
//     lname:"kumar",
//     age:22,
//     address:"Chikkaballapur"
//   });
   
//   return(
//   <div>
//     {Object.entries(data).map(([key,value])=>( <p  key={key}>{value}</p>))}
//   </div>)
// }
//NOTE:
// Object.entries(data) is used to convert the 'data' object into  an ARRAY OF KEY VALUE PAIRS.
// map function used to iterate over each key- value pair


//CASE 2B:
//  function UseState(){
//     const [data,setData]=useState({
//       fname:"pavan",
//       lname:"kumar",
//       age:22,
//       address:"Chikkaballapur"
//     });
//      const result= Object.entries(data).map(([key,value])=><li>{key}={value}</li>)
//     return(
//     <div>
//         <div>
//           <p>{result}</p>
//         </div>
//     </div>)
//   }



// CASE 3:
function UseState(){
  const [data,setData]=useState({
    fname:"pavan",
    lname:"kumar",
    age:22,
    address:"Chikkaballapur"
  });
   

  return(
  <div>
    {Object.keys(data).map((key)=>(
      <p key={key}> {data[key]} </p>
    ))}
    
  </div>
  )
}
 
 