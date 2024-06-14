import React from 'react';
// PROPS
// function Props (props) {
//   return(
//     <>
//    {props.name}  is my car, its colour is {props.colour}
//    {props.children}
//    </>
//   )
// }

// OR WITH ARROW FUNCTION and DESTRUCTURING METHOD
//  const Props =({name,colour,children})=> {
//   return(
//   <>  
//     {name}  is my car, its colour is {colour}
//     {children}
//   </>
//   )
// }



//OR WITH OTHER TYPE DESTRUCTURING METHOD

 const Props=(props)=> {
    const {name,colour}=props  
    return (
      <>
        {name}  is my car, its colour is {colour}
        {props.children}
      </>
    )
  }
  
  export default Props
  

  //NOTE: 
  // ⁕ if the props is of type string then  the syntax look like <Props name="pavan" />
  // ⁕ if the props is of type variable the the syntax look like <Props name={variable_name}/>
  // ⁕ semilarlly for the object type <Props name={obj_name}/>
  
  