import React from 'react'
import './StyleSheet.css'
import logo from './misc_new_database_93640.jpg'

//CASE 1: Adding the style with only one className
// function CssStyleSheet(props) {
//     let  condition=props.cond? "primary": "" 
//   return (
    
//     <div className={condition} >
//       <h1> Styling in React</h1>
//       <h2> * CSS Stylesheet</h2>
//       <h2> * Inline styling </h2>
//       <h2> * CSS Modules</h2>
//     </div>
//   )
// }


//CASE 2: Adding the styling with multiple className 

function CssStyleSheet(props) {
    let  condition=props.cond? "primary": "" 
  return (
    
    <div className={`${condition} font background`  } >  
      <h1> Styling in React</h1>
      <h2> * CSS Stylesheet</h2>
      <h2> * Inline styling </h2>
      <h2> * CSS Modules</h2>
      <img src={logo} alt ="logo "/>
    </div>

  )
}

 // sence the condition is a variable value  and has other classes so we use ${}
 // multiple className is seperated by the space between them
export default CssStyleSheet
