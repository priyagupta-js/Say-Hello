import PostCard from "../../Components/PostCard/PostCard";
import "../../Components/PostCard/PostCard.css";
import { PostContext } from "../../PostContext";
import "./savedPost.css";
import { useContext, useState } from "react";

const SavePost = () => {
  const {savedPosts,handleSavePosts,handleUnsavePosts} = useContext(PostContext);

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) =>{
    setSearchQuery(e.target.value.toLowerCase());
  } 
  return (
    <div className="save-post-container">
      <div className="save-post-wrapper">
        <div className="header-row">
          <h1 className="heading">Saved Posts</h1>
          <input type="text" className="post-search-btn" placeholder="Search" value= {searchQuery} onChange={handleInputChange} />
        </div>
        <hr className="divider" />

        {savedPosts.length === 0 ? (
          <p className="no-posts">no posts to show</p>
        ) : (
          savedPosts.map((post) => (
            <PostCard 
            key={post.id} 
            post={post} 
            handleUnsavePosts={handleUnsavePosts}
            isSavedPage={true}
             />
          ))
        )}
        <hr className="divider" />
      </div>
    </div>
  );
};

export default SavePost;
