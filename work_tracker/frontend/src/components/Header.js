import React, {useState} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {BiPowerOff} from "react-icons/all";
import axios from 'axios';


function MyHeader({name, statusCh, username, status}){
    const [myState, setMyState] = useState(status);


    function changeStatus1() {
        axios.post('/api/change_status/', {
            status: "Active",
            username: username
          })
          .then(function (response) {
            console.log(response);
            setMyState("Active");
            if(statusCh != null) statusCh("Active");
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    function changeStatus2() {
        axios.post('/api/change_status/', {
            status: "Busy",
            username: username
          })
          .then(function (response) {
            console.log(response);
            setMyState("Busy");
            if(statusCh != null) statusCh("Busy");
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    function changeStatus3() {
        axios.post('/api/change_status/', {
            status: "Vacation",
            username: username
          })
          .then(function (response) {
            console.log(response);
            setMyState("Vacation");
            if(statusCh != null) statusCh("Vacation");
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand id={"appName"} className={"font-monospace"} href="#home">{name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"  className={"prof"}>
                    <Nav className={"mr-auto " + myState}>
                        <NavDropdown title={username} id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={changeStatus1}>Status: Active</NavDropdown.Item>
                            <NavDropdown.Item onClick={changeStatus2}>Status: Busy</NavDropdown.Item>
                            <NavDropdown.Item onClick={changeStatus3}>Status: Vacation</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login" className={"text-danger"}><BiPowerOff/> Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default MyHeader;

