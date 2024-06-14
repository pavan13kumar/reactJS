import React, { useState } from 'react'
import axios from 'axios'
import { Route, Router } from 'react-router-dom'
import M from './M'
function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handelSubmit=(event)=>{
    event.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/posts",{email,password})

    .then((res)=>console.log(res)
          ((res.request.status===201) (window.location.assign("/M.js"))) 
         )
    .catch(err => console.log(err))
  }
  return (
    <>
        <form onSubmit={handelSubmit}>
            <div>
                <label>Email: </label>
                <input type='text' placeholder='Enter the email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type='text' placeholder='Enter the password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default Login
