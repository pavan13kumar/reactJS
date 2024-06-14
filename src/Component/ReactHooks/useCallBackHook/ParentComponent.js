import React, { useState} from 'react'
import Title from './Title'
import Button from './Button';
import Count from './Count';


//NOTE: What is useCallback? → is a hook taht will return a memorized version of the callback function that only changes if one of the dependencies has changed.
//      Why useCallback ? → it is usefull when passing callback to optimized child component that rely on reference equality to prevent unnecessary renders.

// In React, useMemo and useCallback are both hooks that help optimize your components by memoizing values and functions. They are especially useful when you want to prevent unnecessary recalculations or re-rendering of components.

////CASE 1: Just a simple concept of rendering the different components
// function ParentComponent() {

//     const [age, setAge] = useState(25);
//     const [salary, setSalary] = useState(50000)
//     const IncrementAge = ()=>{
//         setAge(age+1);
//     }

//     const IncrementSalary = ()=> {
//         setSalary(salary + 1000)
//     }
//   return (
//     <div>
//       <Title/>
//       <Count text="age" count={age}/>
//       <Button handelClick={IncrementAge}>Increment Age</Button>
//       <Count text="salary" count={salary}/>
//       <Button handelClick={IncrementSalary}>Increment Salary</Button>
      
//     </div>  
//   )
// }

// NOTE: observe the console, all the log's are started rerendering the components once we click on any button but, the thing is to be like only the repected one should log whenever the button clicks, means if we click on ↑Salary it should log only the Rendering salary
// and Rendering button - Increment Salary , to achive this make use of memo (title,button,count)

////CASE 2: Optimising the above concept by making use of useCallback 

// function ParentComponent() {

//   const [age, setAge] = useState(25);
//   const [salary, setSalary] = useState(50000)

//   const IncrementAge = ()=>{
//     setAge(age+1);
// }

//   const IncrementSalary =()=> {
//     setSalary(salary + 1000)
// }

// return (
//   <div>
//     <Title/>
//     <Count text="age" count={age}/>
//     <Button handelClick={IncrementAge}>Increment Age</Button>
//     <Count text="salary" count={salary}/>
//     <Button handelClick={IncrementSalary}>Increment Salary</Button>
    
//   </div>  
// )
// }


//Note: even though we use memo at the Title, count, button components it is throwing the logs of age for clicking the ↑Salary, to make much more optimise make use of useCallback Hook


import { useCallback } from 'react';
function ParentComponent() {

  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000)

      const IncrementAge = useCallback(()=>{
        setAge(age+1);
    },[age])

      const IncrementSalary = useCallback(()=> {
        setSalary(salary + 1000)
    },[salary])

return (
  <div>
    <Title/>
    <Count text="age" count={age}/>
    <Button handelClick={IncrementAge}>Increment Age</Button>
    <Count text="salary" count={salary}/>
    <Button handelClick={IncrementSalary}>Increment Salary</Button>
  
  </div>  
)
}


export default ParentComponent


//NOTE: The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. 
// useCallback is used to prevent the re-rendering the components unless its props changes.