import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

// Assets
import regLogo from '../assets/regLogo.png'
import facebook from '../assets/facebookReg.png'
import apple from '../assets/appleReg.png'
import google from '../assets/googleReg.png'

// Icons
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false)
    // Get current route
    const location = useLocation()
    const navigate = useNavigate()
    // Active route checks
    const isRegister = location.pathname === '/'
    const isLogin = location.pathname === '/login'

    // backend connect
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        setUserData({
            ...userData, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        if (!userData.name || !userData.email || !userData.password) {
            return toast.error("please give your information")
        }
        axios.post("http://localhost:3000/api/v1/authentication/registration", userData)
        .then((res)=>{
            toast.success(res.data.message)
            setTimeout(()=>{
                navigate("/login")
            })
        })
    }
    return (
        <div className="min-h-screen bg-[linear-gradient(to_bottom,#07B4B0_10%,#07B4B0_5%,#FFFFFF_70%)] p-20">

            {/* Top Header Section */}
            <div className="py-5 flex justify-between items-center">
                <img src={regLogo} alt="Logo" />

                {/* Auth Buttons */}
                <div className="flex gap-x-[10px]">

                    {/* Sign Up */}
                    <Link
                        to="/"
                        className={`font-roboto py-[10px] w-[115px] rounded-full cursor-pointer text-center
                            ${isRegister
                                ? 'bg-white text-[#07B4B0]'
                                : 'text-white border border-white'
                            }`}
                    >
                        Sign Up
                    </Link>

                    {/* Login */}
                    <Link
                        to="/login"
                        className={`font-roboto py-[10px] w-[115px] rounded-full cursor-pointer text-center
                            ${isLogin
                                ? 'bg-white text-[#07B4B0]'
                                : 'text-white border border-white'
                            }`}
                    >
                        Login
                    </Link>

                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[32px] font-bold font-roboto text-white">
                    Create Account
                </h1>

                <p className="font-roboto text-white">
                    Please fill in the details to create your account
                </p>

                <div className="flex flex-col gap-y-[12px] w-[428px] pt-[20px]">
                    <input onChange={handleChange} name='name' type="text" placeholder="Full Name" className="bg-white p-3 rounded-xl placeholder:text-[12px]" />
                    <input onChange={handleChange} name='email' type="text" placeholder="Email" className="bg-white p-3 rounded-xl placeholder:text-[12px]" />

                    <div className="relative">
                        <input  onChange={handleChange} name='password'
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="bg-white p-3 rounded-xl placeholder:text-[12px] w-full pr-12"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <button onClick={handleSubmit} className="bg-[#07B4B0] p-3 w-full rounded-xl font-roboto text-white cursor-pointer hover:bg-transparent hover:text-black border border-[#07B4B0] duration-500 transition">
                        Sign Up
                    </button>

                    <div className="flex items-center justify-between">
                        <div className="bg-[#0004] w-[40%] h-[1px]"></div>
                        <p className="font-roboto">or</p>
                        <div className="bg-[#0004] w-[40%] h-[1px]"></div>
                    </div>

                    <div className="flex justify-between items-center py-[20px]">
                        <div className="w-[134px] p-4 bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.15)] cursor-pointer">
                            <img src={facebook} alt="" className="mx-auto" />
                        </div>
                        <div className="w-[134px] p-4 bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.15)] cursor-pointer">
                            <img src={apple} alt="" className="mx-auto" />
                        </div>
                        <div className="w-[134px] p-4 bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.15)] cursor-pointer">
                            <img src={google} alt="" className="mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
