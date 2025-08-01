import React from "react";
import userPic from "../../assets/user-pic.jpg";
import { FaVideo } from "react-icons/fa6";
import { MdInsertPhoto } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const CreatePost = ({ onExpand, isPopup, onClose }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-2xl w-full relative ${
        isPopup ? "max-w-xl p-6 z-50" : "my-6 p-4 px-5 max-w-2xl"
      }`}
    >
      {/* --- Close Button for Popup --- */}
      {isPopup && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <IoClose size={24} />
        </button>
      )}

      {/* --- Top Section: Profile + Privacy Dropdown --- */}
      {isPopup && (
        <div className="flex items-center gap-3 mb-4">
          <img src={userPic} className="w-10 h-10 rounded-full" alt="user" />
          <div>
            <p className="font-semibold">Priya Gupta</p>
          </div>
        </div>
      )}

      {/* --- Text Input (Popup = textarea, Normal = input) --- */}
      {isPopup ? (
        <textarea
          rows={4}
          className="w-full resize-none outline-none text-xl placeholder-gray-500"
          placeholder="Share your thoughts"
        ></textarea>
      ) : (
        <div className="flex items-center space-x-4">
          <img
            src={userPic}
            className="w-12 h-12 rounded-full object-cover"
            alt="user"
          />
          <input
            type="text"
            onFocus={onExpand}
            className="flex-1 hover:bg-gray-200 border border-gray-300 cursor-pointer outline-none rounded-full p-3 transition"
            placeholder="Write a post"
          />
        </div>
      )}

      {/* --- Media Buttons (shared between both modes) --- */}
      <div
        className={`flex gap-4 text-gray-600 mt-4 ${
          isPopup ? "text-lg" : "justify-between text-sm my-2"
        }`}
      >
        <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md">
          <MdInsertPhoto size={24} />
          {isPopup && "Photo"}
        </button>
        <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md">
          <FaVideo size={22} />
          {isPopup && "Video"}
        </button>
        <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md">
          <FaCamera size={22} />
          {isPopup && "Activity"}
        </button>
      </div>

      {/* --- Post Button (popup only) --- */}
      {isPopup && (
        <div className="flex justify-end mt-6">
          <button
            className="bg-gray-300 text-gray-600 px-4 py-2 rounded-full cursor-not-allowed"
            disabled
          >
            Post
          </button>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
