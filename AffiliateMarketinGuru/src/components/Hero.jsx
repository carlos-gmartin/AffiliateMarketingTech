import React from "react";

const Hero = () => {
    return (
        <div className='hero-container'>
            <image className="background-hero" />
            <h1>SOLVING ISSUES</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <button className='btns hover:bg-[#77F2A1] hover:outline-color-[#1F2B37] text-[#1F2B37] font-semibold hover:text-[#1F2B37] py-2 px-4 border border-[#1F2B37] hover:border-transparent rounded'>Book your tech call now!</button>
            </div>
        </div>
    )
}
export default Hero