import React from 'react'
import '../css/Feed.css'
import QaBox from "./QaBox";
import Post from "./Post";

function Feed() {
    return (
        <div className=" feed">
        <QaBox/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        </div>
    )
}

export default Feed
