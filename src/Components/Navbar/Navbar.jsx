import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { HiMenu, HiX } from 'react-icons/hi';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () =>{

    const[IsOpen , setIsOpen] = useState(false);
    return(
        // <div className="sticky top-0 shadow-md">
            <div className="nav-content sticky top-0 shadow-md">
                <div className="nav-left">
                    <div className="logo-container">
                        <Link to="/home" className="text-base md:text-2xl">Say-Hello</Link>
                    </div>
                    <div className="search-bar-container">
                    <input type="search" className="search-bar" placeholder="search..."/>
                    </div>
                </div>
                <div className="hidden md:flex gap-4 text-[#8e8e8e]">
                    <Link to="/">Home</Link>
                    <Link to="/requests">Requests</Link>
                    <Link to ="/messages">Messages</Link>
                    <Link to ="/notification">Notifications</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/saved">Saved Posts</Link>
                </div>
                <div className='md:hidden'>
                    <button onClick={ () =>setIsOpen(!IsOpen)}>{IsOpen? <RxHamburgerMenu size={28}/>:<HiMenu size={28}/>}</button>
                </div>

                {IsOpen && (
                    <div className="md:hidden mt-4 space-y-2 text-center text-[#8e8e8e]">
                    <Link to="/" className="block ">Home</Link>
                    <Link to="/requests" className="block ">Requests</Link>
                    <Link to ="/messages" className="block ">Messages</Link>
                    <Link to ="/notification" className="block ">Notifications</Link>
                    <Link to="/profile" className="block ">Profile</Link>
                    <Link to="/saved" className="block ">Saved Posts</Link>
                </div>
                )}
            </div>
        // </div>
    );
}

export default Navbar;