import React, { useState } from 'react';
import './index.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Homepage from './Pages/Homepage/Homepage';
import SavePost from './Pages/SavePost/SavePost';
import Profile from './Pages/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';

function App() {

  // global state 
  const[savedPosts, setSavedPosts] = useState([]);

  const handleSavePosts= (post)=> {

    const isAlreadySaved = savedPosts.some((p) => p.id == post.id);

    if(!isAlreadySaved){
      setSavedPosts((savedPosts)=>[...savedPosts , post]);
    }

  };
  return (
    <>
<Router>
  <Navbar/>
  <Layout>
        <Routes>
          <Route path='/' element={<Homepage handleSavePosts={handleSavePosts}/>} />
          <Route path='/saved' element={<SavePost savedPosts={savedPosts} />} />
          <Route path='/profile' element= {<Profile />} />

        </Routes>
        </Layout>
    </Router>
    </>
  )
}

export default App
