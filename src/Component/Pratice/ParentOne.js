import React, { useState } from 'react'
import ChildOne from './ChildOne'

function ParentOne() {
    const [state, setState] = useState(0)
    const [name, setName] = useState("dell")
    const persons ={
        fname:"jhon",
        lname: "dev"
    }

    console.log("parent Component")

  return (
    <>
    <div>
      <button onClick={() => {setState(state +1)}}>Count→ {state}</button>
      <button onClick={() => (name == "dell")? setName("HP") : setName("dell")}>Change Name</button>
     
    </div>
    <div>
      <ChildOne name={name} person={persons}/>
    </div>
    </>
  )
}

export default ParentOne


//NOTE: The child components Rerenders everyTime when ever the state value updated, this is because of the every time component renders a new reference is created for the persons object
