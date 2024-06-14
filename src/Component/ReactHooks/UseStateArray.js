import React, { useEffect, useState } from 'react'

// const UseStateArray = () => {
//   const [data,setData]=useState([{id:0,value:5}])
        
//   const AddItem=()=>{
//     setData([...data, {
//       id:data.length,
//       value:Math.floor(Math.random()*10)
//     }])
//   }

//   return (
//     <>
//       <button onClick={AddItem}> add</button>
//        { data.map((item) => <li key={item.id}>{item.value}</li>)}
//     </>
//   )
// }

// export default UseStateArray
 


function UseStateArray() {
  let [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("useEffect runned count", {count})
  },[count])
  return (
    <div>
      useEffect count -{count}
      <button onClick={()=> setCount(count+1)}>update count{count}</button>
    </div>
  )
}

export default UseStateArray
