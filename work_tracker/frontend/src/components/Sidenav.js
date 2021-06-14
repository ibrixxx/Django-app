import React from 'react';
import {useParams} from "react-router-dom";
import {Nav} from "react-bootstrap";
import logo from "../../static/images/logo.svg"

import {
    AiFillHome,
    BiTask,
    FaRegListAlt,
    FiUsers,
    GiNetworkBars,
    IoSettingsOutline
} from "react-icons/all";

function Sidenav({admin}){

    let {username} = useParams();

    if(admin)
        return (
            <div className={"sidenav"}>
                <img src={logo} className="App-logo" alt="logo" id={"mylogo"} />
                <Nav className="flex-column myNav">
                    <Nav.Link href="/a/home" className={"text-info"}><h6 ><AiFillHome/> Home</h6></Nav.Link>
                    <Nav.Link href="/a/lectures" className={"text-info"}><h6 ><BiTask/> Held lectures</h6></Nav.Link>
                    <Nav.Link href="/a/homework" className={"text-info"}><h6 ><GiNetworkBars/> Homework</h6></Nav.Link>
                    <Nav.Link href="/a/classes" className={"text-info"}><h6 ><FaRegListAlt/> Classes</h6></Nav.Link>
                    <Nav.Link href="/a/users" className={"text-info"}><h6 ><FiUsers/> Users</h6></Nav.Link>
                    <Nav.Link href="/a/settings" className={"text-info"}><h6 ><IoSettingsOutline/> Settings</h6></Nav.Link>
                </Nav>
            </div>
        );

    return (
        <div className={"sidenav"}>
            <img src={logo} className="App-logo" alt="logo" id={"mylogo"} />
            <Nav defaultActiveKey="/home" className="flex-column myNav">
                <Nav.Link href={"/home/" + username}className={"text-info"}><h6 ><AiFillHome/> Home</h6></Nav.Link>
                <Nav.Link href={"/lectures/" + username} className={"text-info"}><h6 ><BiTask/> Held lectures</h6></Nav.Link>
                <Nav.Link href={"/homework/" + username} className={"text-info"}><h6 ><GiNetworkBars/> Homework</h6></Nav.Link>
                <Nav.Link href={"/classes/" + username} className={"text-info"}><h6 ><FaRegListAlt/> Classes</h6></Nav.Link>
                <Nav.Link href={"/settings/" + username} className={"text-info"}><h6 ><IoSettingsOutline/> Settings</h6></Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    <FiUsers/> Users
                </Nav.Link>
            </Nav>
        </div>
    );

}

export default Sidenav;

