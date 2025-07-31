import React , {createContext, useState} from "react";


// create the context
export const PostContext = createContext();

// create the provider component
export const PostProvider = ({children}) =>{
    const [savedPosts , setSavedPosts] = useState([]);


// save post logic

const handleSavePosts = (post) =>{
    const isAlreadySaved = savedPosts.some((p) => p.id === post.id);
    if(!isAlreadySaved)
    {
        setSavedPosts((savedPosts) => [...savedPosts , post]);
    }
};

const handleUnsavePosts = (post) =>{
    const updatedPosts = savedPosts.filter((p) => p.id!==post.id);
    setSavedPosts(updatedPosts);
};

// share everything using value
return(
<PostContext.Provider value={{savedPosts , handleSavePosts , handleUnsavePosts}}>{children}</PostContext.Provider>

);
};