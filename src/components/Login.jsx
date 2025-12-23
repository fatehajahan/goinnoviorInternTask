import React, { useState } from 'react'

// Assets
import regLogo from '../assets/regLogo.png'
import facebook from '../assets/facebookReg.png'
import apple from '../assets/appleReg.png'
import google from '../assets/googleReg.png'

// Icons
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { login } from '../slices/userSlice'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const location = useLocation()
    const isLogin = location.pathname === '/login'
    const isRegister = location.pathname === '/'

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        axios.post("http://localhost:3000/api/v1/authentication/login", userData)
            .then((res) => {
                toast.success(res.data.message)
                dispatch(login(userData))
                setTimeout(() => navigate("/homePage"), 1500)
            })
            .catch(() => toast.error("Login failed"))
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

            {/* Login Content */}
            <div className="flex flex-col items-center text-center mt-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    Welcome Back!
                </h1>

                <p className="text-white text-sm sm:text-base">
                    We missed you, please provide your credentials
                </p>

                <div className="w-full max-w-[428px] flex flex-col gap-3 mt-6">

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

                    <p className="text-right text-sm cursor-pointer">
                        Forgot Password?
                    </p>

                    <button
                        onClick={handleSubmit}
                        className="bg-[#07B4B0] p-3 rounded-xl text-white border border-[#07B4B0] hover:bg-transparent hover:text-black transition cursor-pointer"
                    >
                        Log In
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-[1px] bg-gray-400"></div>
                        <p>or</p>
                        <div className="flex-1 h-[1px] bg-gray-400"></div>
                    </div>

                    {/* Social Login */}
                    <div className="flex gap-3 py-4">
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

export default Login
