import React from 'react'
import bannerVideo from '../../assets/bannerHero.mp4'
import heroPlayBtn from '../../assets/heroPlayBtn.png'

const Banner = () => {
    return (
        <div className="relative w-full h-[450px] md:h-[700px] overflow-hidden">

            {/* Video */}
            <video
                src={bannerVideo}
                autoPlay
                loop
                muted
                className="w-full h-[700px] object-cover"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
                <div className="container flex flex-col lg:flex-row items-center justify-between gap-y-10">

                    {/* Left Content */}
                    <div className="text-center lg:text-left max-w-full lg:max-w-[700px]">
                        <p className="font-roboto text-[#ffffff65] capitalize mb-2">
                            elevate your brand with
                        </p>

                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-[120%]">
                            High-Quality Garments. Ethically Made.
                        </h1>

                        <p className="text-[#ffffff93] text-base sm:text-lg md:text-xl mb-6">
                            At Zaheen Knitwear Ltd., we pride ourselves on being your reliable partner for apparel production. Our commitment to ethical manufacturing ensures that every garment is crafted with care and integrity.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <button className="bg-red text-white py-3 px-6 border border-red hover:bg-transparent transition cursor-pointer">
                                Get Started
                            </button>

                            <button className="border border-white text-white py-3 px-6 hover:bg-white hover:text-black transition cursor-pointer">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Play Button */}
                    <div className="lg:flex md:flex sm:flex hidden justify-center">
                        <img
                            src={heroPlayBtn}
                            alt="Play Video"
                            className="w-[70px] sm:w-[90px] md:w-[110px] cursor-pointer hover:scale-110 transition duration-300"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner
