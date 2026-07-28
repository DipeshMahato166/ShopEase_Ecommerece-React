import React from 'react'
import Navbar from "../component/Navbar"
import { Outlet } from 'react-router-dom'
import Contact from "../component/Contact"

const HomeLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Contact/>
    </div>
  )
}

export default HomeLayout