import React, { useState } from 'react'
import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

    const { login } = useContext(AuthContext);
     const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        // console.log(`${e.target.name}: ${e.target.value}`)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        const res = await login(loginData);
        setLoginData({
            username: "",
            password: ""
        })
        navigate("/dashboard")
    }
    console.log(loginData);


    return (
        <div className="h-screen grid place-items-center bg-green-400/20 font-serif">
            <form
                onSubmit={handleSubmit}
                className="w-100 p-8 h-100 bg-green-400/40 shadow-2xl flex flex-col justify-center items-center gap-10 rounded-2xl "
            >
                <h1 className='font-extrabold text-4xl flex justify-center items-center  text-slate-600'>Login </h1>
                <input
                    onChange={handleChange}
                    className="p-2 w-full rounded-2xl border h-10"
                    type="text"
                    placeholder="Enter Email..."
                    name="username"
                    value={loginData.email}
                    required
                />
                <input
                    onChange={handleChange}
                    className="p-2 w-full rounded-2xl border h-10"
                    type="password"
                    placeholder="Enter Password..."
                    name="password"
                    value={loginData.password}
                    required
                />
                <button
                    className="p-2 px-4 border w-full h-10 rounded-2xl text-white  bg-green-600 cursor-pointer hover:bg-green-700"
                    type="submit">Submit

                </button>


            </form>
        </div>
    )
}

export default LoginPage;