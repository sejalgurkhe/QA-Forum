import React from 'react'
import '../css/Forum.css';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";


function Forum() {
    return (
     <div className='forum'>
        <Navbar/>
        <div className = "quora__content">
            <Sidebar/>
            <Feed/>
        </div>
    </div>
    )
}

export default Forum
