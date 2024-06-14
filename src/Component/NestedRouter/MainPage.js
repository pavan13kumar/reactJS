import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import FeaturedProducts from './FeaturedProducts'
import NewProducts from './NewProducts'
import OrderSummary from './OrderSummary'
import PageNotFound from './PageNotFound'
import Navbar from './Navbar'
import './Style.css'
import User from './User'
import UserDetails from './UserDetails'
import Profile from './Profile'
import Login from './Login'

const MainPage = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      
      {/* <Route path='/' element={<Home/>}></Route> */}
      <Route index element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>

      <Route path='Products' element={<Products/>}>
        {/* <Route index element={<FeaturedProducts/>} />   (irrespective of clicking on the element the content will be displayed) */}
        <Route path='featured' element={<FeaturedProducts/>}/>
        <Route path='new' element={<NewProducts/>}/>
      </Route>

      <Route path='OrderSummary' element={<OrderSummary/>}> </Route>
      <Route path='User' element={<User/>}>
          {/* ----------------------------------------------------------------------------- */}
          {/* <Route path='User/1' element={<UserDetails/>}/>
          <Route path='User/2' element={<UserDetails/>}/>
          <Route path='User/3' element={<UserDetails/>}/> */}
          {/* IF only user3 thats okay wt if there are 100 users ,at that time use below simplified line of code */}
          {/* -------------------------------------------------------------------------------- */}
          {/* <Route path='User/:userid' element={<UserDetails/>}/>   (Dynamic Routes) */}


          <Route path=':userid' element={<UserDetails/>} />
        
      </Route>
      
      <Route path='Profile' element={<Profile/>}>
      <Route path='login' element={<Login/>}/>
      </Route>
      <Route path='*' element={<PageNotFound/>}/>
      
      
    </Routes>
    </>
  )
}

export default MainPage
