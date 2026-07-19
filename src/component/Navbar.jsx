import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import { FaShopify } from "react-icons/fa";




const Navbar = () => {
      const { currentUser, logout } = useContext(AuthContext);
      

  return (
    <div className='fixed top-0 left-0 w-full bg-white z-10'>
    <div className='flex justify-between  items-center p-8  shadow-2xl font-serif pl-30 '> 
        <div className='font-bold text-2xl uppercase'>
            <Link to="/">
            <h1 className='text-green-600 flex items-center'><FaShopify  className='text-black pr-1'/>Shop<span className='text-black'>Ease</span></h1>
            </Link>
        </div>
        <ul className='flex justify-center items-center gap-x-3 cursor-pointer '>

        <Link to="/">
            <li  className=' hover:text-green-400'>Home</li>
        </Link>
        <Link to='/cart'>
            <li className=' hover:text-green-400'> Products</li>
        </Link>
            <a  className=' hover:text-green-400' href="#about">About Us</a>
            {/* <li className=' hover:text-green-400' id='About'>  About Us</li> */}
        
        
            {/* <li className=' hover:text-green-400'>  Contact Us</li> */}
                    <a  className=' hover:text-green-400' href="#contact">Contact Us</a>


        </ul>

         {currentUser ? (
        
        <button className='bg-green-800 text-white p-2 rounded-3xl w-30 text-lg' onClick={logout}>Logout</button>
      ) : (
        <div className=' flex gap-3'>
            <Link to="/login">
            <Button props={{text:"Login", bg:"bg-green-700"}}/>
            </Link>
            <Link to="/signup">
            <Button props={{text:"Sing Up", bg:"bg-green-500"}}/>
            </Link>
        </div>
        )}
    </div>
    </div>
  )
}

export default Navbar