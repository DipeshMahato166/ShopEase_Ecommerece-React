import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Update = () => {
    const navigate=useNavigate()
    const [formData, setformData] = useState({

        title: "",
        price: "",
        category: "",
        description: "",
        image: ""
    })
    const handleChange = (e) => {
        // console.log(e.target.value)
     
        setformData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

    }
    console.log(formData);
    const { id } = useParams()
    const API = "https://fakestoreapi.com/products/"

    //fetch data
    const fetchProduct = async () => {
        console.log("ferch trigered")
        const res = await axios.get(`${API}/${id}`)
        console.log(res.data)
        setformData(res.data)
    }


    const handleEdit = async (e) => {
        e.preventDefault()
        try {

            const res = await axios.put(`${API}${id}`, formData)
            console.log(res)
            if (res.status === 200) {
                //clear form
                navigate("/dashboard/product")
                alert(`Product of id :${id} is updated successfully!`)
            }
        } catch (err) {
            console.log(err);

        }

    }

    useEffect(
        ()=>{fetchProduct()}, []
    )

    return (
        <div className='flex  justify-center items-center flex-col p-10 h-screen'>
            <div className='border flex flex-col justify-center items-center  shadow-2xl rounded-2xl h-150'>
                <h1 className='font-bold text-4xl'>Upaddate Product</h1>
                <form onSubmit={handleEdit}>
                    <div className='flex flex-col gap-6 w-fit p-10 ' >

                        <input
                            type="text"
                            placeholder='Enter a title....'
                            className='border w-100 h-10 rounded-2xl  p-2'
                            onChange={handleChange}
                            name="title"
                            value={formData.title}

                        />

                        <input
                            type="number"
                            placeholder='Enter a price....'
                            className='border w-100 h-10 rounded-2xl  p-2'
                            onChange={handleChange}
                            name="price"
                            value={formData.price}
                        />

                        <input
                            type="text"
                            placeholder='Enter a category... '
                            className='border w-100 h-10 rounded-2xl  p-2'
                            onChange={handleChange}
                            name="category"
                            value={formData.category}
                        />

                        <input
                            type="text"
                            placeholder='Enter a Description... '
                            className='border w-100 h-10 rounded-2xl  p-2'
                            onChange={handleChange}
                            name="description"
                            value={formData.description}
                        />
                        {/* <input
                            type="file"
                            placeholder='Upload an image... '
                            className='border w-100 h-10 rounded-2xl  p-2'
                            onChange={handleChange}
                            name="image"
                            value={formData.image}
                        /> */}

                        <button type='submit' className='border rounded-2xl bg-green-400 h-10 text-white '>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update