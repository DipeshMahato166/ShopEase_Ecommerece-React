import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { FaGift } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { SiSimpleanalytics } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Home from './Dashboard/Home';




const Slider = () => {
    return (
        <>
            <div className='bg-green-400 h-screen  text-gray-800 font-serif flex '>
                <div>
                <Link to="/">
                <h1 className='font-bold text-2xl p-5 flex items-center gap-2 justify-start'><FaShopify />SHOPEASE</h1>
                </Link>
                <hr />
                <div className='flex flex-col gap-8 items-start  pt-10 pl-10 w-40'>
                    <Link to={'/dashboard/home'}>
                    <p className='flex items-center gap-2 text-xl  w-50 hover:bg-green-900 hover:rounded hover:text-white  h-10 pl-1'> <LuLayoutDashboard />Dashboard</p>
                    </Link>
                    <Link to={'/dashboard/product'}> 
                    <p className='flex items-center gap-2 text-xl  w-50 hover:bg-green-900 hover:rounded  hover:text-white  h-10  pl-1'><FaGift />Products </p>
                    </Link>

                    <Link to={'/dashboard/user'}>
                    <p className='flex items-center gap-2 text-xl  w-50 hover:bg-green-900 hover:rounded  hover:text-white h-10 pl-1'><FiUsers />Users</p>
                    </Link>
                    <p className='flex items-center gap-2 text-xl  w-50 hover:bg-green-900 hover:rounded   hover:text-white h-10 pl-1'><FaShoppingCart />Order</p>
                    <p className='flex items-center gap-2 text-xl  w-50 hover:bg-green-900 hover:rounded   hover:text-white h-10 pl-1'><SiSimpleanalytics />Analytics</p>
                </div>
                </div>
                <div className='pl-27'>

                {/* <Home/> */}
                </div>
            </div>
        </>
    )
}

export default Slider 