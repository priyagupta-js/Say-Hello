import './Homepage.css';
import {users} from "../../data/data";
import PostCard from "../../Components/PostCard/PostCard";
import userPic from "../../assets/user-pic.jpg";
const Homepage = () =>{

    return (
<div>
<div className="create-container">
    <div className="create-content">
        <div className="first-row">
            <div className="user-container">
                <img src={userPic} className="user" alt='user' height="50px" width="50px"/>
            </div>
            <div className="post-bar-container">
                <input type="text" className="post-space" placeholder="write a post"/>
            </div>
        </div>
    </div>
    </div>
    {users.map((post) =>(
        <PostCard key={post.id} post={post} isSavedPage={false}/>
        
    ))}
    
</div>


    );

}

export default Homepage;