import PostCard from "../../Components/PostCard/PostCard";
import "../../Components/PostCard/PostCard.css";
import { PostContext } from "../../PostContext";
import "./savedPost.css";
import { useContext, useState } from "react";

const SavePost = () => {
  const {savedPosts,handleUnsavePosts} = useContext(PostContext);

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) =>{
    setSearchQuery(e.target.value.toLowerCase());
  } 
  
  const filterPosts = savedPosts.filter((post) =>{
    const lowerQuery = searchQuery.trim().toLowerCase();
    const postText = post.text?.toLowerCase() || "";

    const Hashtags = post.text?.match(/#[\w]+/g) || [];

    const lowerHashtags = Hashtags.map((tag) => tag.toLowerCase());

    const matchtext = postText.includes(lowerQuery);
    const matchHashtags = lowerHashtags.some((tags)=> tags.includes(lowerHashtags));

    return matchtext || matchHashtags;
  
  });
  return (
    <div className="save-post-container">
      <div className="save-post-wrapper">
        <div className="header-row">
          <h1 className="heading">Saved Posts</h1>
          <input type="text" className="post-search-btn" placeholder="Search" value= {searchQuery} onChange={handleInputChange} />
        </div>
        <hr className="divider" />

        {filterPosts.length === 0 ? (
          <p className="no-posts">no matching posts found</p>
        ) : (
          filterPosts.map((post) => (
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
