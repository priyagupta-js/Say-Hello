import React, { useState } from "react";
import "./Homepage.css";
import userPic from "../../assets/user-pic.jpg";
import { users } from "../../data/data";
import PostCard from "../../Components/PostCard/PostCard";
import CreatePost from "../../Components/CreatePost/CreatePost";


const Homepage = () => {

   const [onExpand, setOnExpand] = useState(false);
   const [userPost , setUserPost] = useState([]);

   const handleNewPost =(text) =>{
    const newPost = {
      id:Date.now(),
      name:"Priya Gupta",
      desc:text,
      profile:{userPic},
      time:"Just now",
    };

    setUserPost((prev) => [newPost, ...prev]);
   };
  return (

     <>
     {/* collapsed Create Post */}
     {!onExpand && 
     (
   <CreatePost onExpand={() => setOnExpand(true)}/>
     )}
   

     
{/* popped -model */}
        {onExpand && (
          <>
          <div className="fixed inset-0 backdrop-blur-sm bg-opacity-30 z-40" onClick={()=> setOnExpand(false)}></div>
          {/* modal container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
          <CreatePost isPopup={true} onClose={() => setOnExpand(false)} onSubmit ={handleNewPost}/>
          </div>
          </>
        )}

        {/* dynamic user posts first */}

        {userPost.map((post) =>(
<PostCard key={post.id} post={post} isSavedPage={false}/>
        ))}
        {/* staticPosts */}
         {/* users-posts */}
      {users.map((post)=>(
        
        <PostCard key={post.id} post= {post} isSavedPage={false}/> ))}

    </>
  );
};

export default Homepage;
