import React, {  useState } from "react";
import "./PostCard.css";
// import ReactBtns from "../Button/ReactBtns";
import { IoSendOutline } from "react-icons/io5";
import { RiPriceTagLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const PostCard = ({ post ,handleSavePosts}) => {

    const [isSave, setIsSave] = useState(false);

    const HandleSave = () =>
    {
        if(isSave)
        {
          toast.info('Post unsaved.');
        }
        else{
          handleSavePosts(post);
          toast.success('Post saved.');
        }
        setIsSave(!isSave);
    };

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="user-details">
          <div className="user-pic-container">
            <img
              src={post.logoImg}
              className="user-pic"
              alt="user-picture"
              height="40px"
              width="40px"
            />
          </div>
          <div className="user-info">
            <div className="username">{post.name}</div>
            <div className="user-bio">{post.bio}</div>
            <div className="user-timeline">{post.time}</div>
          </div>
        </div>
        <div className="text-content">
          <div className="">{post.text}</div>
        </div>
        <div className="image-content">
          <img src={post.image} alt="" width="350px" height="auto" />
        </div>
        <div className="react-stats">
          <div className="likes">John Willams and 6 others</div>
          <div className="comments">{`${post.comments} comments`}</div>
        </div>
        <hr className="horz-line" />
        {/* <ReactBtns /> */}

        <div className="reactions-button">
          <button className="btn">
            <SlLike />
            <span> Like</span>
          </button>
          <button className="btn">
            <FaRegCommentDots />
            <span>Comment</span>
          </button>
          <button className="btn">
            <IoSendOutline />
            <span>Send</span>
          </button>
          <button className="btn" onClick={HandleSave}>
            <RiPriceTagLine />
            <span>{isSave? "Unsave": "Save"}</span>
          </button>
          {/* {showPopup && (
            <div className="popup"><IoCheckmarkCircleSharp/>{showMessage}</div>
          )} */}
          

        </div>
      </div>
      <ToastContainer position="bottom-left" autoClose={2000} />
    </div>
  );
};

export default PostCard;
