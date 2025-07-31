import React, { useState } from "react";
import userPic from "../../assets/user-pic.jpg";
import { FaVideo } from "react-icons/fa6";
import { MdInsertPhoto } from "react-icons/md";
import { FaCamera } from "react-icons/fa";

const CreatePost = () => {
  return (
    <>
      <div className="bg-white rounded-xl my-6 p-4 px-5 shadow-sm w-full max-w-2xl mx-auto">
        <div className="flex items-center space-x-4">
            <img
              src={userPic}
              className="w-12 h-12 rounded-full object-cover "
              alt="user"
            />
            <input
              type="text"
              className="flex-1 hover:bg-gray-200 border border-gray-500 outline-none rounded-full p-3 transition"
              placeholder="write a post"
            />
        </div>

        <div className="flex justify-between text-sm text-gray-600 my-2">
            <button className="flex items-center gap-2 space-x-1 hover:bg-gray-100 p-2 rounded-md">
              <span >
                <FaVideo size={28} />
              </span>
                Video
            </button>
            <button className="flex items-center space-x-1 gap-2 hover:bg-gray-100 p-2 rounded-md">
              <span>
                <MdInsertPhoto  size={28} />
              </span>
               Photo
            </button>
            <button className="flex items-center gap-2 space-x-1 hover:bg-gray-100 p-2 rounded-md">
              <span>
                <FaCamera  size={28} />
              </span>
               Activity
            </button>
          </div>
        </div>
    </>
    // {/* <div className="create-container">
    //     <div className="create-content">
    //       <div className="first-row">
    //         <div className="user-container">
    //           <img
    //             src={userPic}
    //             className="user"
    //             alt="user"
    //             height="50px"
    //             width="50px"
    //           />
    //         </div>
    //         <div className="post-bar-container">
    //           <input
    //             type="text"
    //             className="post-space"
    //             placeholder="write a post"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
  );
};

export default CreatePost;
