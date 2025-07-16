import './Homepage.css';
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
                <input type="text" className="post-space"placeholder="write a post"/>
            </div>
        </div>
    </div>
    </div>
    <PostCard />
</div>


    );

}

export default Homepage;