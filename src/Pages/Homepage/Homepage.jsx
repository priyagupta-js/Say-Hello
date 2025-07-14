import './Homepage.css';
import PostCard from "../../Components/PostCard";

const Homepage = () =>{

    return (
<div>
<div className="create-container">
    <div className="create-content">
        <div className="first-row">
            <div className="user">
                user
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