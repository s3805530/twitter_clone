import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExploreIcon from '@material-ui/icons/Explore';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MailOutlineIcon from '@material-ui/icons/Mail';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {Twitter} from "@material-ui/icons";
import {Button} from "@material-ui/core";

function Sidebar() {
    return (
        <div className={"sidebar"}>

<Twitter className={"sidebar_twitterIcon"}/>
            <SidebarOption Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={MailOutlineIcon} text="Message"/>
            <SidebarOption Icon={NotificationsIcon} text="Notification"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark"/>
            <SidebarOption Icon={ListAltIcon} text="Lists"/>
            <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>

<Button variant="outlined" className={"sidebar_tweet"} fullWidth>
    Tweet
</Button>

        </div>
    );
}

export default Sidebar;