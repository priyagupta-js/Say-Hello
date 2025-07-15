import "./PostCard.css";

const PostCard =()=>{
    return(
        <div className="card-container">
            <div className="card-content">
                <div className="user-details">
                    <div className="user-pic">
                        <img src="/" alt=""/>
                    </div>
                    <div className="user-info">
                        <div className="username">name</div>
                        <div className="user-bio">FullStack MERN developers</div>
                        <div className="user-timeline">1w</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;