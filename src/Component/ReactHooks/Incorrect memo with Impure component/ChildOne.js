import React from 'react'
////CASE 1:
// function ChildOne({name}) {
//     console.log("Child Component")
//     const date = new Date();
//   return (
//     <div>
//         Hello {name} This is the hr : min : sec  {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}    
//       <p>Child Component</p>
//     </div>
//   ) 
// }

// export default React.memo(ChildOne)
// export const MemoizedChildOne = React.memo(ChildOne)


////NOTE: while we clicking on the Name button we can notice that the time get's updated but, while clicking on the count button its not, even though the Memo is working fine.


////CASE 2:

// function ChildOne({name, person}) {
//   console.log("child component")
// return (
//   <div>
//     {name}-{person.fname}-{person.lname}
//   </div>
// )
// }

// export default React.memo(ChildOne)


//// NOTE: even you pass the object as a props from the parent component it will result in the incorrect memo type(child component will rerender every time the count changes), because for every Rerender component a new reference will be created for the object and again the child component will Rerender.


//CASE 3:
function ChildOne({name, person}) {
  console.log("child component")
return (
  <div>
    {name}-{person.fname}-{person.lname}

  </div>
)
}

export default React.memo(ChildOne)