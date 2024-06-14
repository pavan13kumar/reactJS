import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
    const handleLogout=()=>{
        navigate('Login')
    }
  return (
    <div>
     <h1>Profile page</h1>
    <button onClick={handleLogout}>Login</button>
    <Outlet/>
    </div>
  )
}

export default Profile
