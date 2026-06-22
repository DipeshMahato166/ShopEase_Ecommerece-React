import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Navbar from './component/Navbar'
import Herosec from './component/Herosec'
import Cart from './component/Cart'
import SingleProduct from './component/SingleProduct'
import LoginPage from './page/LoginPage'
import Signup from './page/Signup'
import Slider from './page/Slider'
import DashboardLayout from './Layout/DashboardLayout'
import Product from './page/Dashboard/Product'
import Update from './page/Dashboard/Update'
import User from './page/Dashboard/User'
import Home from './page/Dashboard/Home'


const App = () => {
  return (
    <div >
     
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>

      <Route path='/' element={<Herosec/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='cart/:id' element={<SingleProduct/>} />
      <Route path='login' element={<LoginPage/>} />
      <Route path='signup' element={<Signup/>} />
      <Route path='slider' element={<Slider/>} />
      <Route path='dashboard' element={<DashboardLayout/>} >

      <Route path='product' element={<Product/>} />
      
      <Route path='user' element={<User/>} />
      
      <Route path='home' element={<Home/>} />
      
      </Route>
      <Route path='/product/:id' element={<Update/>} />


      </Routes>
      </BrowserRouter>
    
      
    </div>
  )
}

export default App