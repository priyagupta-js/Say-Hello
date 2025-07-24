import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="sticky top-0 shadow-md">
            <div className="nav-content">
                <div className="nav-left">
                    <div className="logo-container">
                        <Link to="/" className="logo">Say-Hello</Link>
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
            </div>
        </div>
    );
}

export default Navbar;