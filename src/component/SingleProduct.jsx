import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'



const SingleProduct = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true);

  const { id } = useParams()


  const getData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      console.log(res)
      setData(res.data)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    getData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold font-serif text-slate-600">Loading...</h1>
      </div>
    );
  }

  return (


<>
<Navbar/>
    <div className="max-w-full px-40 pt-27  bg-green-400/20 h-screen">
      <img
        src={data.image}
        className="w-full h-100 object-contain"
      />

      <div className="mt-4">
        <h2 className="text-lg font-semibold">
          {data.title}

        </h2>

        <p className="inline-block mt-2 px-3 py-1 bg-gray-200 rounded-full text-sm">
          {data.category}

        </p>

        <p className="text-gray-600 mt-3 text-sm">
          {data.description}

        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-green-600">
            ${data.price}

          </span>

          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
</>


  )
}

export default SingleProduct