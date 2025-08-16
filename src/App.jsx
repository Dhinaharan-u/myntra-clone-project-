import React from 'react'
import {createBrowserRouter,BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './myntra project/navbar'
import Men from './myntra project/routing pages/men'

import Home from './myntra project/routing pages/home'

import Error from './myntra project/routing pages/error'
import Wishlist from './myntra project/routing pages/wishlist'
import Profile from './myntra project/routing pages/Profile'
import Cart from './myntra project/routing pages/cart'
import store from './myntra project/redux/store'
 const App = () => {

  
  return (
    <>
    <Navbar/>
   
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/men'element={<Men/>}/>
      <Route path='/*'element={<Error/>}/>
       <Route path='/wishlist'element={<Wishlist/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
    </Routes>
   
    
    
    </>
  )
}
export default App
// http://localhost:3001/Slider
// http://localhost:3001/products
// http://localhost:3001/shopCategory
// http://localhost:3001/icons