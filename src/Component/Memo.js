import React, { useState } from 'react'
import Todos from './Todos';


function Memo() {
    const [count, setcount]=useState(0);
    const [todos,settodos]=useState(["todo 1", "todo 2"]);
    
    const increment=()=>{
        setcount((c) => c + 1);
        // setcount(count+1);
    }
    console.log("parent component")
  return (
    <div>
      <Todos todos={todos} />
      <hr/>
      <div>
        Count:{count};
        <button onClick={increment} >+</button>
      </div>
    </div>
  )
}

export default Memo

