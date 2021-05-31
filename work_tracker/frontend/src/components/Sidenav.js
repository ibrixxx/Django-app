import React from 'react';
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

    if(admin)
        return (
            <div className={"sidenav"}>
                <img src={logo} className="App-logo" alt="logo" id={"mylogo"} />
                <Nav className="flex-column myNav">
                    <Nav.Link href="/home" className={"text-info"}><h6 id={"link-1"}><AiFillHome/> Home</h6></Nav.Link>
                    <Nav.Link href="/lectures" className={"text-info"}><h6 id={"link-1"}><BiTask/> Held lectures</h6></Nav.Link>
                    <Nav.Link href="/homework" className={"text-info"}><h6 id={"link-1"}><GiNetworkBars/> Homework</h6></Nav.Link>
                    <Nav.Link href="/classes" className={"text-info"}><h6 id={"link-1"}><FaRegListAlt/> Classes</h6></Nav.Link>
                    <Nav.Link href="/users" className={"text-info"}><h6 id={"link-1"}><FiUsers/> Users</h6></Nav.Link>
                    <Nav.Link href="/settings" className={"text-info"}><h6 id={"link-1"}><IoSettingsOutline/> Settings</h6></Nav.Link>
                </Nav>
            </div>
        );

    return (
        <div className={"sidenav"}>
            <img src={logo} className="App-logo" alt="logo" id={"mylogo"} />
            <Nav defaultActiveKey="/home" className="flex-column myNav">
                <Nav.Link href="/home" className={"text-info"}><h6 id={"link-1"}><AiFillHome/> Home</h6></Nav.Link>
                <Nav.Link href="/lectures" className={"text-info"}><h6 id={"link-1"}><BiTask/> Held lectures</h6></Nav.Link>
                <Nav.Link href="/homework" className={"text-info"}><h6 id={"link-1"}><GiNetworkBars/> Homework</h6></Nav.Link>
                <Nav.Link href="/classes" className={"text-info"}><h6 id={"link-1"}><FaRegListAlt/> Classes</h6></Nav.Link>
                <Nav.Link href="/settings" className={"text-info"}><h6 id={"link-1"}><IoSettingsOutline/> Settings</h6></Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    <FiUsers/> Users
                </Nav.Link>
            </Nav>
        </div>
    );

}

export default Sidenav;

