import React from "react";
import "./Homepage.css";
import { users } from "../../data/data";
import PostCard from "../../Components/PostCard/PostCard";
import CreatePost from "../../Components/CreatePost/CreatePost";


const Homepage = () => {
  return (
    <div>
        <CreatePost />
      {users.map((post) => (
        <PostCard key={post.id} post={post} isSavedPage={false} />
      ))}
    </div>
  );
};

export default Homepage;
