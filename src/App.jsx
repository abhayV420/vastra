// import React, {useState} from 'react'
// import {Routes,Route} from "react-router-dom"
// import{createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import Collection from "./pages/Collection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import PlaceOrder from "./pages/PlaceOrder"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SmallSearchBar from './components/SmallSearchBar'
import { useContext } from 'react'
import { ShopContext } from './context/ShopContext'



const App = () => {

  const {location} = useContext(ShopContext)
  
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer position='bottom-center'/>
      <Navbar/>
      {
        location.pathname === '/collection' ? <SmallSearchBar/> : null
      }
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/product/:productId' element={<Product/>} />
      </Routes>
      <Footer/>

    </div>
    
  )
}

export default App



