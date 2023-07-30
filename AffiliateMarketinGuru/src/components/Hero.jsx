import React from "react";

const Hero = () =>{
    return(
        <div className='hero-container'>
        <image className="background-hero"/>
        <h1>SOLVING ISSUES</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <button className='btns bg-transparent hover:bg-[#C3AED6] text-[#8675A9] font-semibold hover:text-white py-2 px-4 border border-[#8675A9] hover:border-transparent rounded'>Book your tech call now!</button>
        </div>
        
        </div>
    )
}
export default Hero