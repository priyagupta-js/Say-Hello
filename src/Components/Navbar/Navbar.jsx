import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { HiMenu, HiX } from 'react-icons/hi';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () =>{

    const[IsOpen , setIsOpen] = useState(false);
    return(
        // <div className="sticky top-0 shadow-md">
            <div className="nav-content sticky top-0 shadow-md z-50">
                <div className="nav-left">
                    <div className="logo-container">
                        <Link to="/home" className="text-base md:text-2xl">Say-Hello</Link>
                    </div>
                    <div className="search-bar-container">
                    <input type="search" className="search-bar" placeholder="search..."/>
                    </div>
                </div>
                <div className="hidden md:flex gap-4 text-[#8e8e8e]">
                    <Link to="/home" className="hover:text-blue-500 font-bold">Home</Link>
                    <Link to="/requests" className="hover:text-blue-500 font-bold">Requests</Link>
                    <Link to ="/messages" className="hover:text-blue-500 font-bold">Messages</Link>
                    <Link to ="/notify" className="hover:text-blue-500 font-bold" >Notifications</Link>
                    <Link to="/profile" className="hover:text-blue-500 font-bold">Profile</Link>
                    <Link to="/saved" className="hover:text-blue-500 font-bold">Saved Posts</Link>
                </div>
                {/* for smaller screen size (Phone) */}
                <div className='md:hidden'>
                    <button onClick={ () =>setIsOpen(!IsOpen)}>{IsOpen? <RxHamburgerMenu size={28}/>:<HiMenu size={28}/>}</button>
                </div>

                {IsOpen && (
                    <div className="md:hidden mt-4 space-y-2 text-center text-[#8e8e8e]">
                    <Link to="/home" className="block ">Home</Link>
                    <Link to="/requests" className="block ">Requests</Link>
                    <Link to ="/messages" className="block ">Messages</Link>
                    <Link to ="/notify" className="block ">Notifications</Link>
                    <Link to="/profile" className="block ">Profile</Link>
                    <Link to="/saved" className="block ">Saved Posts</Link>
                </div>
                )}
            </div>
        // </div>
    );
}

export default Navbar;