import React from 'react'
import styles from './Success.module.css' // we are importing the CSS module stylesheet as styles , but you can use other name aslo. 
import  './Error.css'
function Module() {
  return (
    <div>
      <h1 className={styles.success}>Success </h1>     { /*   locally scoped*/}
      <h1 className='error' >Error</h1>                { /* Globally scoped (keep this line in any other file it will work)*/ } 
    </div>
  )
}
//You can gain access to the styling in the styles import (line 7) by referencing it as a JavaScript object. That is why we use styles.success at line 7.
export default Module


//NOTE:
//A CSS module stylesheet is similar to a normal stylesheet the difference being, all the class names are scoped locally. 
//This means that we can use the same class name in multiple files. A CSS module file is scoped to that component only.