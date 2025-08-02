import React, { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./Pages/Homepage/Homepage";
import Messages from "./Pages/messages/Message";
import Notification from "./Pages/Notification/Notification";
import Request from "./Pages/Request/Requests";
import SavePost from "./Pages/SavePost/SavePost";
import Profile from "./Pages/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import { PostProvider } from "./PostContext";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/signup/signup";

function App() {
  // const handleSavePosts = (post) => {
  //   const isAlreadySaved = savedPosts.some((p) => p.id === post.id);

  //   if (!isAlreadySaved) {
  //     setSavedPosts((savedPosts) => [...savedPosts, post]);
  //   }
  // };

  // const handleUnsavePosts = (post) => {
  //   const updatedPosts = savedPosts.filter((p) => p.id !== post.id);
  //   setSavedPosts(updatedPosts);
  // };
  return (
    <>
      <PostProvider>
        <Router>
          <Navbar />
          <Layout>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/home" element={<Homepage />} />
              <Route path="/requests" element={<Request />} />
              <Route path="/messages" element={<Messages />}/>
              <Route path="/notify" element={<Notification />}/>
              <Route path="/saved" element={<SavePost />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Layout>
        </Router>
      </PostProvider>
    </>
  );
}

export default App;
