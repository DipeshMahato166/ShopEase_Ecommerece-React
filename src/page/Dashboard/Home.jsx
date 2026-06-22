import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
    const [totalProducts, setTotalProducts]=useState(0)
    const [totalUsers, setTotalUsers]=useState(0)
    const [totalCarts, setTotalCarts]=useState(0)

const fetchData=async()=>{
    try{

        const res= await axios.get("https://fakestoreapi.com/products")
        const userRes=await axios.get("https://fakestoreapi.com/users")
        const cartRes=await axios.get("https://fakestoreapi.com/carts")
        setTotalProducts(res.data.length)
        setTotalUsers(userRes.data.length)
        setTotalCarts(cartRes.data.length)

    }catch(err){
        console.log(err);
        
    }

}

useEffect(()=>{
    fetchData()
},[])


  return (
    <>
    <div className='h-screen p-10 flex font-serif  text-slate-700 gap-10'>
    <div className='h-30 bg-green-400 w-50 rounded-2xl flex flex-col justify-center items-center gap-2 p-2'>
        <span className=' font-bold text-4xl'>{totalProducts}</span>
        <h1>Total Products</h1>
    </div>
    <div className='h-30 bg-green-400 w-50 flex flex-col justify-center items-center gap-2 rounded-2xl p-2'>
         <span className=' font-bold text-4xl'>{totalUsers}</span>
        <h1>Total Users</h1>

    </div>
    <div className='h-30 bg-green-400 w-50 flex flex-col justify-center items-center gap-2 rounded-2xl p-2'>
         <span className=' font-bold text-4xl'>{totalCarts}</span>
        <h1>Total Carts</h1>

    </div>
    </div>
    </>
  )
}

export default Home