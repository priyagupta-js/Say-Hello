import React from "react";
import userPic from "../../assets/user-pic.jpg";
import { FaVideo } from "react-icons/fa6";
import { MdInsertPhoto } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AiFillClockCircle } from "react-icons/ai";
import { useState } from "react";

const CreatePost = ({ onExpand, isPopup, onClose ,onSubmit}) => {

  const[postText, setPostText] = useState("");
  const[selected, setSelected] = useState("");


  const handlePost = () =>{
    if(postText.trim() === "") return;

    onSubmit({
      text: postText.trim(),
      image : selected
   });

    setPostText("");
    setSelected(null);
    if (onClose) onClose();
  };

  const handleImagePost =(e) =>{
const file =e.target.files[0];
if(file)
{
  // to preview the image
  const imgUrl = URL.createObjectURL(file);
  setSelected(imgUrl);
}
  };


  return (
    // when isPopup is true then style the Modal otherwise the normal input
        <div className={`bg-white rounded-xl shadow-2xl w-full relative ${isPopup? "max-w-xl p-6" : "p-4 my-6 max-w-2xl"
        }`}
        >
      {/* close button for modal */}
      {isPopup && (
        <button onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <IoClose size={24}/>
        </button>
      )}

      {/* Top=section: Profile + textarea */}

          <div className="flex items-center gap-3 mb-4">
            <img
              src={userPic}
              className="w-11 h-11 rounded-full object-cover"
              alt="user"
            />
            </div>
            
            {/* textarea */}

            {isPopup ? (
              <textarea
              type="text"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="Share your thoughts!"
            rows="6"
            className="w-full text-lg resize-none outline-none"
            
          />
            ):(
              <input
              type="text"
              onFocus={onExpand}
              className="flex-1 hover:bg-gray-200 border border-gray-300 cursor-pointer outline-none rounded-full p-3 transition w-full"
              placeholder="Write a post"
            />
            )}

            {selected && (
              <div className="mt-4">
                <img 
                src={selected}
                alt="Preview"
                className="w-full max-h-80 object-contain rounded"
                />
              </div>
            )}
            {/* media buttons */}
          <div className="flex gap-2 mt-4">
            <button className="p-2 rounded hover:bg-gray-100"> 
              <FaVideo size={24} />
            </button>
             <label className="p-2 rounded hover:bg-gray-100 cursor-pointer flex items-center gap-1">
              <MdInsertPhoto size={24} />
               <input type="file"
              accept="image"
              onChange={handleImagePost}
              className="hidden"/>
              </label>
            <button className="p-2 rounded hover:bg-gray-100">
              <FaCamera size={24} />
            </button>
          </div>
          {/* post button */}
          {isPopup && (
            <div className="flex justify-end mt-6">
            <button
            disabled={postText.trim() ===""}
            onClick={handlePost}
            className={`px-4 py-1.5 text-sm rounded-full font-medium ${postText.trim() ==="" ? "bg-gray-300 cursor-not-allowed":"bg-blue-600 text-white hover:bg-blue-700" }`}
            >Post</button>
          </div>
      )}
      </div>
  );
};

export default CreatePost;
