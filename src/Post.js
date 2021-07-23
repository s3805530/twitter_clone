import React from 'react';
import {Avatar} from "@material-ui/core";
import {ChatBubbleOutline, FavoriteBorder, Public, Publish, Repeat, VerifiedUser} from "@material-ui/icons";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "./Post.css";



function Post({displayName, username, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar}></Avatar>

            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            {displayName}
                            <span className="post_headerSpecial">
                              {verified ? <VerifiedUserIcon className="post_badge"/> : null} @{username}

                      </span>

                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="post_footer">
                    <ChatBubbleOutline fontSize="small"></ChatBubbleOutline>
                    <Repeat fontSize="small"></Repeat>
                    <FavoriteBorder fontSize="small"></FavoriteBorder>
                    <Publish fontSize="small"></Publish>
                </div>
            </div>
        </div>


    );
}

export default Post;