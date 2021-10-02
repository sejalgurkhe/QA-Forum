import React from 'react'
import '../css/Post.css'
import { Avatar} from "@material-ui/core";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";

function Post() {
    return (
        <div className = "post">
        <div className = "post__info">
            <Avatar/>
            <h3> Username </h3>
            <small> Timestamp</small>
        </div>  
        <div className = "post__body">
          <div className = "post__question">
           <p> Question</p> 
           <button className = "post__btnAnswer" > Answer</button>  
          </div> 
          <div className = "post__answer">
           <p></p>   
          </div>
          <img src = "https://1.bp.blogspot.com/-Wz79cII0wmo/XNNufT0uY2I/AAAAAAAAAE4/QFd_mqBWGrI9W1Nqo2PyZYiCh0v0D-xQACLcBGAs/s1600/html.jpg"
          alt = ""/>  
        </div>
        <div className = 'post__footer'>
           <div className = "post__footerAction">
           <ArrowUpwardOutlinedIcon />
           <ArrowDownwardOutlinedIcon />  
           </div> 
           <RepeatOutlinedIcon />
            <ChatBubbleOutlineOutlinedIcon />
            <div className="post__footerLeft">
                <ShareOutlined />
            <MoreHorizOutlined />
            </div>
        </div>
        </div>
    )
}

export default Post
