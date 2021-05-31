import React, {useState} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {BiPowerOff} from "react-icons/all";

function MyHeader({name, statusCh, username}){
    const [myState, setMyState] = useState("Active");


    function changeStatus1() {
        setMyState("Active");
        if(statusCh) statusCh("Active");
    }

    function changeStatus2() {
        setMyState("Busy");
        if(statusCh) statusCh("Busy");
    }

    function changeStatus3() {
        setMyState("Vacation");
        if(statusCh) statusCh("Vacation");
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand id={"appName"} className={"font-monospace"} href="#home">{name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"  className={"prof"}>
                    <Nav className={"mr-auto Active " + myState}>
                        <NavDropdown title={username} id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={changeStatus1}>Status: Active</NavDropdown.Item>
                            <NavDropdown.Item onClick={changeStatus2}>Status: Busy</NavDropdown.Item>
                            <NavDropdown.Item onClick={changeStatus3}>Status: Vacation</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" className={"text-danger"}><BiPowerOff/> Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default MyHeader;

