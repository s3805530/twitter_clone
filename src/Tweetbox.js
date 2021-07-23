import React, {useState} from 'react';
import "./Tweetbox.css";
import {Avatar, Button} from "@material-ui/core";

import db from './Firebase'

function Tweetbox(props) {


    const [text, setText] = useState("")
    console.log(text)

    const submitTweet = (e) => {
        const tweet = {
            image: "https://media.giphy.com/media/t1i8KZ7momVs4/giphy.gif",
            displayName: "Covid queen 👸",
            verified: true,
            username: "rajakirani",
            text,
            avatar: ""
        }

        db.collection("posts").add(tweet).then(r => console.log("successful")).catch(e => alert("Save error.."))

    }

    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox_input">
                    <Avatar
                        src={"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/fccrotbrtiowxa0t4zce/memoji-6?fimg-client-default"}></Avatar>
                    <input value={text} onChange={(e) => {
                        setText(e.target.value)
                    }} placeholder="whats up" type="text"/>
                </div>
                <Button onClick={() => submitTweet()} className="tweetbox_button">Tweet</Button>
            </form>


        </div>
    );
}

export default Tweetbox;