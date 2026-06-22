import React, { useState } from 'react'

const Signup = () => {
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: ""
    })

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        console.log(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({
            FirstName: "",
            LastName: "",
            Email: "",
            Password: ""
        })
    }
    return (



        <div className='flex  font-serif justify-center items-center flex-col  pt-35 p-10 h-screen bg-green-400/20'>
            <div className='bg-green-400/40 flex flex-col justify-center items-center  shadow-2xl rounded-2xl h-150'>
                <h1 className='font-bold text-4xl  text-slate-600'>Signup</h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-6 w-fit p-10 ' >

                        <input
                            type="text"
                            placeholder='Enter a First Name....'
                            className='border w-100 h-10 rounded-2xl  p-2'
                            onChange={handleChange}
                            name="FirstName"
                            value={formData.FirstName}
                        />
                        <input
                            type="text"
                            placeholder='Enter a Last Name....'
                            className='border w-100 h-10 rounded-2xl  p-2'
                            onChange={handleChange}
                            name="LastName"
                            value={formData.LastName}
                        />
                        <input
                            type="email"
                            placeholder='Enter a Email....'
                            className='border w-100 h-10 rounded-2xl  p-2'
                            onChange={handleChange}
                            name="Email"
                            value={formData.Email}
                        />
                        <input
                            type="password"
                            placeholder='Enter a Password....'
                            className='border w-100 h-10 rounded-2xl  p-2'
                            onChange={handleChange}
                            name="Password"
                            value={formData.Password}
                        />
                        <button type='submit' className='border rounded-2xl bg-green-600 h-10 text-white  hover:bg-green-700'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup