import React, { useState ,useEffect} from "react";
import "./Homepage.css";
import userPic from "../../assets/user-pic.jpg";
import { users } from "../../data/data";
import PostCard from "../../Components/PostCard/PostCard";
import CreatePost from "../../Components/CreatePost/CreatePost";


const Homepage = () => {

   const [onExpand, setOnExpand] = useState(false);
   const [userPost , setUserPost] = useState([]);
   const [isLoggedIn , setIsLoggedIn] = useState(false);

  // Check if the user is logged in on page load
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn") === "true"; 
    setIsLoggedIn(storedLoginStatus);  // Update login state from localStorage

    if (storedLoginStatus) {
      // If logged in, load posts from localStorage
      const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
      setUserPost(storedPosts);
    }
  }, []);

    const handleLogin = () => {
    // Simulate login (this will be handled in the Login component now)
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  
  const handleLogout = () => {
    // Log out and clear localStorage
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

   const handleNewPost =(data) =>{
    const newPost = {
      id:Date.now(),
      name:"Priya Gupta",
      desc:data.text,
      userLogo:userPic || null,
      image: data.media || null,
      time:"Just now",
    };

    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];

    const updatedPosts = [newPost, ...storedPosts];
     localStorage.setItem("posts", JSON.stringify(updatedPosts));
     setUserPost(updatedPosts); 
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
