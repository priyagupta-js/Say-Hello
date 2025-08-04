import React, { useState } from "react";
import "./Homepage.css";
import { users } from "../../data/data";
import PostCard from "../../Components/PostCard/PostCard";
import CreatePost from "../../Components/CreatePost/CreatePost";


const Homepage = () => {

   const [onExpand, setOnExpand] = useState(false);
  return (

     <>
     {/* collapsed Create Post */}
     {!onExpanded && 
     (
   <CreatePost onExpand={() => setOnExpand(true)}/>
     )}
   

      {/* users-posts */}
      {users.map((post)=>(
        
        <PostCard key={post.id} post= {post} isSavedPage={false}/> ))}

{/* popped -model */}
        {onExpand && (
          <>
          <div className="fixed inset-0 backdrop-blur-sm bg-opacity-30 z-40"> </div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
          <CreatePost />
          </div>
          </>
        )}
     
    </>
    // <div className="relative">
    // {!isExpanded && <CreatePost onExpand = {() => setIsExpanded(true)}/>}
    //   {users.map((post) => (
    //     <PostCard key={post.id} post={post} isSavedPage={false} />
    //   ))}
    //   {
    //     isExpanded && (
    //       <>
    //         <div className="fixed inset-0 backdrop-blur-xs z-40"
    //         onClick={ () => setIsExpanded(false)}
    //         >
    //         </div>

    //         <div className="fixed inset-0 z-50 flex items-center justify-center">
    //         <CreatePost isPopup={true} onClose={() => setIsExpanded(false)} />
    //     </div>
    //     </>
    //     )}
    // </div>
   
  );
};

export default Homepage;
