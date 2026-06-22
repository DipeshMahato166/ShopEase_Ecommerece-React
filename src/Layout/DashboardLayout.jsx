import React from 'react'
import Slider from '../page/Slider'
import { Outlet, useNavigate } from 'react-router-dom'


const DashboardLayout = () => {
  

   
  return (
    <>
     <div className='h-screen w-full bg-slate-300 grid grid-cols-5'>
        <div className='col-span-1'>
            <Slider/>
            
        </div>
        <div className='col-span-4 overflow-scroll p-10'>
            <Outlet/>      
            
        </div>
     </div>
     </>
  )
}

export default DashboardLayout