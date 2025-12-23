import React from 'react'
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const Header = () => {
    return (
        <div className="bg-blue w-full">
            <div className="container">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-y-3">

                    {/* Left Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-x-[30px] text-center sm:text-left">
                        <div className="flex items-center gap-x-[5px]">
                            <IoLocationOutline className="text-white text-lg" />
                            <p className="font-roboto text-[14px] text-white">
                                Kashimpur, Gazipur Sadar / Gazipur
                            </p>
                        </div>

                        <div className="flex items-center gap-x-[5px]">
                            <IoPhonePortraitOutline className="text-white text-lg" />
                            <p className="font-roboto text-[14px] text-white">
                                +880 01713-027875
                            </p>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="bg-white flex gap-x-[15px] justify-center items-center py-[10px] px-[16px] text-red">
                        <FaFacebookF className="cursor-pointer" />
                        <FaTwitter className="cursor-pointer" />
                        <FaInstagram className="cursor-pointer" />
                        <FaYoutube className="cursor-pointer" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
