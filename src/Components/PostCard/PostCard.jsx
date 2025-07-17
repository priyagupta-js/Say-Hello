import react from 'react';

import "./PostCard.css";
import ReactBtns from '../Button/ReactBtns';

const PostCard =({post})=>{
    return(
        <div className="card-container">
            <div className="card-content">
                <div className="user-details">
                    <div className="user-pic-container">
                        <img src={post.logoImg} className="user-pic" alt="" height="40px" width="40px"/>
                    </div>
                    <div className="user-info">
                        <div className="username">{post.name}</div>
                        <div className="user-bio">{post.bio}</div>
                        <div className="user-timeline">{post.time}</div>
                    </div>
                </div>
                <div className='text-content'>
                    <div className=''>{post.text}</div>
                </div>
                <div className="image-content">
                    <img src={post.image} alt="" width="350px" height="auto"/>
                </div>
                <div className='react-stats'>
                    <div className='likes'>
                        John Willams and 6 others
                    </div>
                    <div className='comments'>
                        {`${post.comments} comments`}
                    </div>
                </div>
                <hr className='horz-line'/>
                <ReactBtns />
            </div>
        </div>
    );
}

export default PostCard;