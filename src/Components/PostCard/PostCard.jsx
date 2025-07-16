import react from 'react';
import userProfile from "../../assets/user-pic.jpg";
import certificate from "../../assets/certificate.png";
import { IoSendOutline } from "react-icons/io5";
import { RiPriceTagLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";
import "./PostCard.css";

const PostCard =()=>{
    return(
        <div className="card-container">
            <div className="card-content">
                <div className="user-details">
                    <div className="user-pic-container">
                        <img src={userProfile} className="user-pic" alt="" height="40px" width="40px"/>
                    </div>
                    <div className="user-info">
                        <div className="username">Sakshi Arora</div>
                        <div className="user-bio">Marketing Creative Solution | VIT, Chennai</div>
                        <div className="user-timeline">1w</div>
                    </div>
                </div>
                <div className='text-content'>
                    <div className=''>Day 6 of 100DaysOfDSA ....... </div>
                </div>
                <div className="image-content">
                    <img src={certificate} alt="" width="350px" height="auto"/>
                </div>
                <div className='react-stats'>
                    <div className='likes'>
                        John Willams and 6 others
                    </div>
                    <div className='comments'>
                        6 comments
                    </div>
                </div>
                <hr className='horz-line'/>
                <div className='reactions-button'>
                    <button className='btn'><SlLike/><span> Like</span></button>
                    <button className='btn'><FaRegCommentDots/><span>Comment</span></button>
                    <button className='btn'><IoSendOutline/><span>Send</span></button>
                    <button className='btn'><RiPriceTagLine/><span>Save</span></button>
                </div>
            </div>
        </div>
    );
}

export default PostCard;