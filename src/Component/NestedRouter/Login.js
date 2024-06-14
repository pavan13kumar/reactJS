import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user,setuser]=useState();
    const navigate= useNavigate();
    const handleLogin=()=>{
        navigate('/')   // navigate to the home page
    }
  return (
    <div>
      <label>UserName: </label>
      <input type='text' value={user} placeholder='Enter the user name' onChange={(e)=> setuser(e.target.value)}/>
      
      
      <button onClick={handleLogin}> Logout</button>
    </div>
  )
}

export default Login
