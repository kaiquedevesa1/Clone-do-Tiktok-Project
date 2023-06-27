import React, {useState} from "react";
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";

function VideoSidebar({likes, messages, shares}) {
  

    const[liked, setLiked] = useState(false)

    function handdleLiked(){
       setLiked(!liked)
    }
  

  return (
    <div className="videoSidebar">
      <div 
          className="videSidebar_options"
          onClick={handdleLiked}
      >
          {liked ? <FavoriteIcon fontSize="medium"/> : <FavoriteBorderIcon fontSize="medium" />}

          <p>{ liked ? likes + 1 : likes}</p>
      </div>
        <div className="videSidebar_options">
          <ChatIcon fontSize="medium" />
          <p> {messages} </p>
      </div>
      <div className="videSidebar_options">
            <ShareIcon fontSize="medium" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
