import React, { useState, useContext } from "react";
import "./PostCard.css";
import { IoSendOutline } from "react-icons/io5";
import { RiPriceTagLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PostContext } from "../../PostContext";

const PostCard = ({ post, isSavedPage }) => {
  const { handleSavePosts, handleUnsavePosts, savedPosts } =
    useContext(PostContext);

  const isAlreadySaved = savedPosts.some((p) => p.id === post.id);
  const [isSave, setIsSave] = useState(isAlreadySaved);
  const [expanded, setExpanded] = useState(false);
  const charLimit = 50;

  // toggle for more/less
  const toggleContent = () => setExpanded(!expanded);

  // const fulltext = post.text || "";
  // extract hashtags (using regEx)

  // const hashtags = fulltext.match(/#[\w]+/g) || [];
  const displayContent = expanded ? post.text : post.text.slice(0, charLimit);

  // saved Post
  const HandleSave = () => {
    if (isSavedPage || isSave) {
      handleUnsavePosts(post);
      toast.info("Post unsaved.");
      setIsSave(false);
    } else {
      handleSavePosts(post);
      toast.success("Post saved.");
      setIsSave(true);
    }
  };

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="user-details">
          <div className="user-pic-container">
            <img
              src={post.userLogo}
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
          {displayContent}
          {post.text.length > charLimit && (
            <button onClick={toggleContent} className="toggle-btn">
              {expanded ? "show less" : "...show more"}
            </button>
          )}
          {/* {showFullContent || post.text.length < charLimit ? (
            contentLines.map((line, index) => {
              <p key={index}>
                {line}
                <br />
              </p>
            })
          ) : (
            <p>
              {truncatedText}...
              <button onClick={toggleContent} className="more-less-btn">
                show more
              </button>
            </p>
          )} */}
          {/* {showFullContent && post.text.length > charLimit && (
            <button onClick={toggleContent} className="more-less-btn">
              show less
            </button>
          )} */}
        </div>
        <div className="image-content">
          <img
            src={post.image}
            alt="users"
            className="post-image"
          />
        </div>
        <div className="react-stats">
          <div className="likes">❤️6</div>
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
            <span>{isSave || isSavedPage ? "Unsave" : "Save"}</span>
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
