import React, {useEffect, useState} from 'react';
import "./Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";

import db from './Firebase'

function Feed(props) {


    const sample2 = {
        image: "https://media.giphy.com/media/t1i8KZ7momVs4/giphy.gif",
        displayName: "2222 Covid queen 👸",
        verified: true,
        username: "rajakirani",
        text: "Kataa Laga",
        avatar: ""
    }

    const [posts, setPosts] = useState([])

    useEffect( () => {



        db.collection("posts").onSnapshot(snapshot => {
            const docs = snapshot.docs;

            const posts = docs.map(doc => {
                const post = doc.data()
                return {
                    ...post,
                    key: doc.id
                }
            })

            setPosts(posts)


        })








    }, [])


    return (
        <div className="feed">

            {/*header*/}
            <div className="feed_header">

                <h2>Home</h2>

            </div>

            {/*Tweetbox*/}
            <Tweetbox/>

            {/*post*/}

            {
                posts.map(post =>
                    <Post  {...post} />
                )
            }


            {/*post*/}
            {/*post*/}
            {/*post*/}


        </div>
    );
}

export default Feed;