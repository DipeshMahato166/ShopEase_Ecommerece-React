import React from 'react'
import img from "../public/1.png"
import Button from './Button'
import { FaRegCirclePlay } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { FaHandPointRight } from "react-icons/fa6";
import { AiOutlineCopyright } from "react-icons/ai";
import Navbar from './Navbar';


const Herosec = () => {
    return (
        <>
        <Navbar/>
            <div className='bg-green-400/20 h-[80vh] pt-40 flex gap-30 items-start pl-30 font-serif '>

                <div className=' border-4 shadow-2xl border-white rounded-tr-[100px] rounded-bl-[100px]   bg-green-400/30 h-fit w-fit'>

                    <img src={img} alt="w" className='h-120  w-100 ' />

                </div>
                <div className='w-160'>
                    <h1 className='uppercase  text-6xl font-extrabold text-slate-600 tracking-widest leading-17.5'>explore your <br />true creative <br />fashion</h1>

                    <p className='pt-20 text-2xl'>Refresh your style on-trend pieces from clothing collection. Any one can dress up</p>

                    <div className='pt-10 flex gap-10'>

                        <Link to='/cart'>
                            <button className='bg-green-400 rounded-tr-xl rounded-bl-xl w-30 h-12 text-white cursor-pointer' >Shop Now</button>
                        </Link>
                        <button className=' flex justify-center items-center'>
                            <span className='scale-200 p-3 cursor-pointer text-green-500'><FaRegCirclePlay /></span>   Watch Demo
                        </button>


                    </div>
                    <h1 className='flex justify-end items-end  pt-5 text-pink-400 text-5xl font-bold' >FASHION </h1>
                    <h1 className='flex justify-end items-end  text-gray-700 text-5xl font-bold' >SALES</h1>
                </div>


            </div>
            <div className='bg-green-400/20 h-[20vh] w-full flex pl-70 pt-15 gap-60 font-serif ' >


                <ul >
                    <li className='font-extrabold text-5xl flex  text-slate-600'> <span className='pr-2 text-green-500'><TbTruckDelivery /></span>65K+</li>
                    <li className='pt-3 flex justify-center items-center'>Product Delivered</li>
                </ul>

                <ul >
                    <li className='font-extrabold text-5xl flex  text-slate-600'> <span className='pr-2 text-green-500'><GrLocation /></span>100+</li>
                    <li className='pt-3 flex justify-center items-center'>Cities and Area</li>
                </ul>
            </div>

            {/* //About us */}
            <div className="font-serif text-slate-700  p-6 bg-green-400/60 " id='about'>
                <h1 className="text-4xl font-bold mb-4">About Us</h1>

                <p className="mb-4">
                    Welcome to ShopEase, your trusted online shopping destination.
                    We provide quality products across multiple categories including
                    electronics, fashion, jewelry, and lifestyle essentials.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
                <p>
                    To provide customers with a reliable, user-friendly, and affordable
                    online shopping experience.
                </p>
                <div className='flex flex-col gap-3 pt-3 '>
                    <h3 className='font-bold'>Why Choose Us?</h3>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex gap-2 justify-start items-center'> <FaHandPointRight />Wide variety of products</li>
                        <li className='flex gap-2 justify-start items-center'><FaHandPointRight />Regular updates with new products</li>
                        <li className='flex gap-2 justify-start items-center'><FaHandPointRight />Secure online shopping</li>
                        <li className='flex gap-2 justify-start items-center'><FaHandPointRight />Fast and easy browsing</li>
                        <li className='flex gap-2 justify-start items-center'><FaHandPointRight />Responsive customer support</li>
                        <p>
                            Thank you for choosing ShopEase. We look forward to serving you and making your online shopping experience enjoyable.</p>
                    </ul>
                </div>

            </div>
            {/* Contact us */}

            <div className=" p-6 bg-[#6d8c6c] font-serif text-white h-60 scroll-smooth" id='contact'>
                <h1 className="text-4xl font-bold ">Contact Us</h1>

                <div className="flex flex-col  text-xl gap-2 pt-3">
                    <p>📧 support@shopease.com</p>
                    <p>📞 +977 98XXXXXXXX</p>
                    <p>📍 Itahari, Nepal</p>
                </div>
                

            <p className='flex justify-center items-center text-white pt-3 '>
                <AiOutlineCopyright /> 2026 Lunar Tech. All Rights Reserved.</p>
                </div>
            

        </>
    )
}

export default Herosec