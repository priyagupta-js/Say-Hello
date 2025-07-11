import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="nav-container">
            <div className="nav-content">
                <div className="nav-left">
                    <div className="logo">
                        <Link to="/">Say-Hello</Link>
                    </div>
                    <div className="search-bar">
                    <input type="search"/>
                    </div>
                </div>
                <div className="nav-right">
                    <Link to="/">Home</Link>
                    <Link to="/request">Request</Link>
                    <Link to ="/message">Messages</Link>
                    <Link to ="/notification">Notifications</Link>
                    <Link to="/profile">Profile</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;