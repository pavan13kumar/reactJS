import {useState} from 'react'

function useCount(initialCount,value) {
    const [count,setCount] = useState(initialCount)
    
    const IncrementCount = ()=>{
     setCount(precount => precount + value)
    }
 
    const DecrementCount = () =>{
     setCount(precount => precount - value)
    }
 
    const ResetCount = () =>{
     setCount(initialCount)
    }

 return[count, IncrementCount, DecrementCount, ResetCount]
}

export default useCount
