import { IoSendOutline } from "react-icons/io5";
import { RiPriceTagLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";

const ReactBtns = () => {
  return (
    <div className="reactions-button">
      <button className="btn">
        <SlLike />
        <span> Like</span>
      </button>
      <button className="btn">
        <FaRegCommentDots />
        <span>Comment</span>
      </button>
      <button className="btn">
        <IoSendOutline />
        <span>Send</span>
      </button>
      <button className="btn">
        <RiPriceTagLine />
        <span>Save</span>
      </button>
    </div>
  );
};

export default ReactBtns;