import React, { useState } from "react";
import "./Homepage.css";
import { users } from "../../data/data";
import PostCard from "../../Components/PostCard/PostCard";
import CreatePost from "../../Components/CreatePost/CreatePost";


const Homepage = () => {

  const [isExpanded , setIsExpanded] = useState(false);
  return (
    <div className="relative">
    {!isExpanded && <CreatePost onExpand = {() => setIsExpanded(true)}/>}
      {users.map((post) => (
        <PostCard key={post.id} post={post} isSavedPage={false} />
      ))}
      {
        isExpanded && (
          <>
            <div className="fixed inset-0 backdrop-blur-xs z-40"
            onClick={ () => setIsExpanded(false)}
            >
            </div>

            <div className="fixed inset-0 z-50 flex items-center justify-center">
            <CreatePost isPopup={true} onClose={() => setIsExpanded(false)} />
        </div>
        </>
        )}
    </div>
  );
};

export default Homepage;
