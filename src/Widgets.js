import React from 'react';
import "./Widgets.css"
import SearchIcon from "@material-ui/icons/Search";
import {TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
               <SearchIcon className="widgets_searchIcon"></SearchIcon>
            <input placeholder="Search Twitter" type="text"/>

            </div>

            <div className="widgets_widgetsContainer"></div>
            <h2>whats happening</h2>

            <TwitterTweetEmbed tweetId={"1416061700672040964"}/>
            <TwitterTimelineEmbed
                sourceType={"profile"}
                screenName={"twitter"}
                options={{height:400}}
></TwitterTimelineEmbed>

        </div>
    );
}

export default Widgets;