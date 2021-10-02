import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar, Button } from "@material-ui/core";
import '../css/Navbar.css';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import firebase from "firebase";


function Navbar() {
    const user = useSelector(selectUser);
    return (
        <div className="qHeader">
        <div className = "qHeader__logo">
            <img 
            src = "https://img-premium.flaticon.com/png/512/3173/premium/3173808.png?token=exp=1633114279~hmac=fcbdb109e234b325637ce1615df92410"
            alt = ""
            />
        </div> 
        <div className = "qHeader__icons">
            <div className = "qHeader__icon"> <HomeIcon /> </div>
            <div className = "qHeader__icon"> <FeaturedPlayListOutlinedIcon /></div>
            <div className = "qHeader__icon"> <AssignmentTurnedInOutlinedIcon /></div>
            <div className = "qHeader__icon"> <PeopleAltOutlinedIcon /></div>
            <div className = "qHeader__icon">  <NotificationsOutlinedIcon /></div>
        </div>
        <div className = "qHeader__input">
        <SearchIcon/>
        <input type = "text" placeholder ="Search.."/>
        </div>
        <div className = "qHeader__Rem">
            <div className = "qHeader__avatar">
            <Avatar
            onClick={() => auth.signOut()}
            className="Avatar"
            src={
              user.photo
                ? user.photo
                : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
            } /></div>
            <LanguageIcon/>
            <Button> Add Question</Button>
        </div>
    </div>
    )
}

export default Navbar
