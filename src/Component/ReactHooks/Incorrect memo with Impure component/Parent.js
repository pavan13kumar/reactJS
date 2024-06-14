import React, {useState } from 'react'
import ChildOne from './ChildOne';

// /CASE1: 
// function Parent() {

//     const [state, setState]=useState(0);
//     const [name, setName] = useState('dell')
//     console.log("parent coponent")
 
//     return (
//       <div>
//       <button onClick={() => {setState(state+1)}}>COunt--{state}</button>
//       <button onClick={() => setName("HP")}>{`Name-${name}`}</button>
//       <ChildOne  name={name}></ChildOne>
//     </div>  
//   )
// }

////CASE 2: By passing an object  to child component 
// function Parent() {
//   const [state, setState] = useState(0)
//   const [name, setName] = useState("dell")
//   const persons ={
//       fname:"jhon",
//       lname: "dev"
//   }

//   console.log("parent Component")
// return (
//   <div>
//     <button onClick={() => {setState(state +1)}}>Count→ {state}</button>
//     <button onClick={() => setName("HP")}>Change Name</button>
//     <ChildOne name={name} person={persons}/>
//   </div>
// )
// }


////CASE 3: resolving the above case problem when passing an OBJECT as a props for child component
import { useMemo } from 'react';

function Parent() {
  const [state, setState] = useState(0)
  const [name, setName] = useState("dell")
  const persons ={
      fname:"jhon",
      lname: "dev"
  }

  const memoizedPerson = useMemo(() => persons,[])
  console.log("parent Component")
return (
  <div>
    <button onClick={() => {setState(state +1)}}>Count→ {state}</button>
    <button onClick={() => setName("HP")}>Change Name</button>
    <ChildOne name={name} person={memoizedPerson}/>
  </div>
)
}
export default Parent


////NOTE: Now only the parent component will Rerenders every time, when ever the count value is updated.

////CASE 3: resolving the above case problem when passing an FUNCTION as a props for child component

// import { useMemo } from 'react';

// function Parent() {
//   const [state, setState] = useState(0)
//   const [name, setName] = useState("dell")
 
//   const handelClick = () => {}
//   const memoizedPerson = useCallback(handelClick, [])
//   console.log("parent Component")
// return (
//   <div>
//     <button onClick={() => {setState(state +1)}}>Count→ {state}</button>
//     <button onClick={() => setName("HP")}>Change Name</button>
//     <ChildOne name={name} person={memoizedPerson}/>
//   </div>
// )
// }
// export default Parent
