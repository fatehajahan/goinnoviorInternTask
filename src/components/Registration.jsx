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
    const location = useLocation()
    const navigate = useNavigate()

    const isRegister = location.pathname === '/'
    const isLogin = location.pathname === '/login'

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        if (!userData.name || !userData.email || !userData.password) {
            return toast.error("Please fill all fields")
        }

        axios.post("http://localhost:3000/api/v1/authentication/registration", userData)
            .then((res) => {
                toast.success(res.data.message)
                setTimeout(() => navigate("/login"), 1000)
            })
    }

    return (
        <div className="min-h-screen bg-[linear-gradient(to_bottom,#07B4B0_10%,#07B4B0_5%,#FFFFFF_70%)]
                        px-4 sm:px-8 md:px-20 py-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4">
                <img src={regLogo} alt="Logo" className="w-[120px] sm:w-auto" />

                <div className="flex gap-3">
                    <Link
                        to="/"
                        className={`py-2 w-[100px] sm:w-[115px] rounded-full text-center
                        ${isRegister ? 'bg-white text-[#07B4B0]' : 'text-white border border-white'}`}
                    >
                        Sign Up
                    </Link>

                    <Link
                        to="/login"
                        className={`py-2 w-[100px] sm:w-[115px] rounded-full text-center
                        ${isLogin ? 'bg-white text-[#07B4B0]' : 'text-white border border-white'}`}
                    >
                        Login
                    </Link>
                </div>
            </div>

            {/* Form */}
            <div className="flex flex-col items-center text-center mt-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    Create Account
                </h1>

                <p className="text-white text-sm sm:text-base">
                    Please fill in the details to create your account
                </p>

                <div className="w-full max-w-[428px] flex flex-col gap-3 mt-6">
                    <input
                        onChange={handleChange}
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        className="p-3 rounded-xl bg-white"
                    />

                    <input
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="p-3 rounded-xl bg-white"
                    />

                    <div className="relative">
                        <input
                            onChange={handleChange}
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="p-3 rounded-xl w-full pr-12 bg-white"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="bg-[#07B4B0] p-3 rounded-xl text-white hover:bg-transparent hover:text-black border border-[#07B4B0] transition cursor-pointer"
                    >
                        Sign Up
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-[1px] bg-gray-400"></div>
                        <p>or</p>
                        <div className="flex-1 h-[1px] bg-gray-400"></div>
                    </div>

                    {/* Social Buttons */}
                    <div className="flex justify-between gap-3 py-4">
                        {[facebook, apple, google].map((icon, i) => (
                            <div
                                key={i}
                                className="flex-1 p-3 bg-white rounded-xl shadow cursor-pointer"
                            >
                                <img src={icon} alt="" className="mx-auto w-[28px]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
