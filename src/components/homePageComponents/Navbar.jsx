import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import { useSelector } from "react-redux";
import { IoCartOutline } from 'react-icons/io5'
import { LuUserRound } from "react-icons/lu";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = useSelector((state) => state.userDetails.user);
    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState('Your Account');

    // Fetch all users
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/v1/authentication/allusers");
                if(res.data.success){
                    setUsers(res.data.data || []);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }

        fetchUsers();
    }, []);

    // Match logged-in email with fetched users
    useEffect(() => {
        if(user?.email && users.length > 0){
            const matchedUser = users.find(u => u.email === user.email);
            if(matchedUser){
                setUserName(matchedUser.name); // use name instead of email
            }
        }
    }, [user, users]);

    return (
        <div className='container py-[24px]'>
            <div className='flex items-center justify-between'>

                {/* Logo + Links */}
                <div className='flex items-center gap-x-[24px]'>
                    <img src={logo} alt="Logo" className="h-10" />

                    {/* Desktop Menu */}
                    <ul className='hidden md:flex font-roboto gap-x-[24px] items-center'>
                        <li className='cursor-pointer hover:text-red hover:font-semibold'>Home</li>
                        <li className='cursor-pointer hover:text-red hover:font-semibold'>About Us</li>
                        <li className='cursor-pointer hover:text-red hover:font-semibold'>Our Services</li>
                        <li className='cursor-pointer hover:text-red hover:font-semibold'>Our Products</li>
                        <li className='cursor-pointer hover:text-red hover:font-semibold'>Blogs</li>
                    </ul>
                </div>

                {/* Right Section (Desktop) */}
                <div className='hidden md:flex items-center gap-x-[24px]'>

                    {/* Cart */}
                    <div className='flex items-center gap-x-[10px] cursor-pointer'>
                        <div className="relative inline-flex">
                            <IoCartOutline className="text-[24px]" />
                            <span
                                className="absolute -top-2 -right-2 bg-[#FFCC00] text-black text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-semibold">
                                0
                            </span>
                        </div>
                        <p className='font-roboto font-medium'>Cart</p>
                    </div>

                    {/* User */}
                    <div className='flex items-center gap-x-[10px] cursor-pointer'>
                        <LuUserRound className="text-[24px]" />
                        {userName !== 'Your Account' ? (
                            <p className='font-roboto font-medium'>{userName}</p>
                        ) : (
                            <Link to="/login" className='font-roboto font-medium text-blue-600 hover:underline'>
                                {userName}
                            </Link>
                        )}
                    </div>

                    <button className='bg-red py-[12px] px-[24px] text-white font-semibold cursor-pointer border border-red hover:bg-transparent hover:text-black duration-300 transition text-center'>
                        Contact Us
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className='md:hidden flex items-center'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden mt-4 flex flex-col gap-y-4 font-roboto'>

                    {/* Mobile Links */}
                    <ul className='flex flex-col gap-y-3'>
                        <li className='cursor-pointer hover:text-red hover:font-semibold'>Home</li>
                        <li className='cursor-pointer hover:text-red hover:font-semibold'>About Us</li>
                        <li className='cursor-pointer hover:text-red hover:font-semibold'>Our Services</li>
                        <li className='cursor-pointer hover:text-red hover:font-semibold'>Our Products</li>
                        <li className='cursor-pointer hover:text-red hover:font-semibold'>Blogs</li>
                    </ul>

                    {/* Mobile Right Section */}
                    <div className='flex flex-col gap-y-3 mt-3'>
                        {/* Cart */}
                        <div className='flex items-center gap-x-[10px] cursor-pointer'>
                            <div className="relative inline-flex">
                                <IoCartOutline className="text-[24px]" />
                                <span
                                    className="absolute -top-2 -right-2 bg-[#FFCC00] text-black text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-semibold">
                                    0
                                </span>
                            </div>
                            <p className='font-roboto font-medium'>Cart</p>
                        </div>

                        {/* User */}
                        <div className='flex items-center gap-x-[10px] cursor-pointer'>
                            <LuUserRound className="text-[24px]" />
                            {userName !== 'Your Account' ? (
                                <p className='font-roboto font-medium'>{userName}</p>
                            ) : (
                                <Link to="/login" className='font-roboto font-medium text-blue-600 hover:underline'>
                                    {userName}
                                </Link>
                            )}
                        </div>

                        <button className='bg-red py-[12px] px-[24px] text-white font-semibold cursor-pointer border border-red hover:bg-transparent hover:text-black duration-300 transition text-center'>
                            Contact Us
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;
