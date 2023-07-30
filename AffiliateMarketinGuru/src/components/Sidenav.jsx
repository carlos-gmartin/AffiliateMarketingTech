import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineHome, AiOutlineContacts, AiOutlineApi, AiOutlineInfo} from 'react-icons/ai';

const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return(
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
        {
            nav ? (
                    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                        <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineHome size={20} />
                            <span className="pl-4">home</span>
                        </a>
                        <a href="#summary" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineInfo size={20} />
                            <span className="pl-4">Summary</span>
                        </a>
                        <a href="#services" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineApi size={20} />
                            <span className="pl-4">Services</span>
                        </a>
                        <a href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineContacts size={20} />
                            <span className="pl-4">Contact</span>
                        </a>
                    </div>
            ) : (
                <div className="md:flex hidden justify-between flex-wrap z-999">
                    <section className="relative ml-auto">
                        <nav className="flex justify-between w-screen">
                                <div className="px-5 xl:px-12 py-0 flex w-full items-center">

                                    <a className="text-3xl font-bold font-heading" href="#">
                                        <img className="h-9" src="logo.png" alt="AffiliateMarketinGuru"/>
                                    </a>
                                    
                                    <ul className="flex md:flex px-4 ml-auto font-semibold font-heading space-x-20">
                                        <li>
                                            <a className="hover:text-gray-200" href="#main">
                                                <span className="pl-4">Home</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="hover:text-gray-200" href="#summary">
                                                <span className="pl-4">Summary</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="hover:text-gray-200" href="#services">
                                                <span className="pl-4">Services</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="hover:text-gray-200" href="#contact">
                                                <span className="pl-4">Contact</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                        </nav>
                    </section>
                </div>
            )}
            </div>
    );
};

export default Sidenav;