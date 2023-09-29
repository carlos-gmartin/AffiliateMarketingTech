import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineHome, AiOutlineContacts, AiOutlineApi} from 'react-icons/ai';
import {Outlet, Link } from "react-router-dom";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return(
        <>
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
        {
            nav ? (
                    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">

                        <Link to="/">
                             <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineHome size={40} />
                            <span className="pl-4">home</span>
                            </a>
                        </Link>
                        
                        <Link to="services">
                            <a href="#services" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineApi size={40} />
                            <span className="pl-4">Services</span>
                            </a>
                        </Link>
                        
                        <Link to="contact">
                            <a href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineContacts size={40} />
                            <span className="pl-4">Contact</span>
                        </a>
                        </Link>
                    </div>
            ) : (
                <div className="md:flex hidden justify-between flex-wrap z-999">
                    <section className="relative ml-auto">
                        <nav className="flex justify-between w-screen">
                                <div className="px-5 xl:px-12 py-0 flex w-full items-center">
                                    
                                    <Link to="/">
                                    <a className="text-3xl font-bold font-heading" href="#main">
                                        <img className="h-9" src="logo.png" alt="AffiliateMarketingTech"/>
                                    </a>
                                    </Link>
                                    
                                    <ul className="flex md:flex px-4 ml-auto font-semibold font-heading space-x-20">

                                        <li>
                                            <Link to="/">
                                            <a href="#main">
                                                <span className="pl-4">Home</span>
                                            </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="services">
                                            <a href="#services">
                                                <span className="pl-4">Services</span>
                                            </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="contact">
                                            <a href="#contact">
                                                <span className="pl-4">Contact</span>
                                            </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                        </nav>
                    </section>
                </div>
            )}
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;