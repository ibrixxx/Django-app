import React, {useState} from "react";
import styled from "styled-components";
import {Button, Form} from "react-bootstrap";
import {FcNext, FcPrevious} from "react-icons/all";
import axios from 'axios';
import * as ReactDOM from "react-dom";

const Fdiv = styled.div`
    display: inline-flex;
    margin-bottom: 2vmin;
    height: 3rem;
`


export default function UserFilter({renderUsers, allUsers}) {
    const [sem, setSem] = useState(1);
    const [filtered, setFiltered] = useState(false);

    const getFiltered = (e) => {
        const formData = new FormData(e.target);
        e.preventDefault();
        const formDataObj = Object.fromEntries(formData.entries());
        const endpoint = `/api/load_filtered_users/`;
        axios.post(endpoint, {
            class_name: formDataObj.class,
            status: formDataObj.status,
        })
        .then(function (response) {
            console.log('response: ', response);
            renderUsers(response.data);
            setFiltered(true);
        })
        .catch(function (error) {
            console.log('error: ',error);
            
        })
    }

    const getFilteredSemester = () => {
        const endpoint = `/api/load_filtered_users_by_semester/`;
        axios.post(endpoint, {
            semester: sem
        })
        .then(function (response) {
            console.log('response: ', response);
            renderUsers(response.data);
            setFiltered(true);
        })
        .catch(function (error) {
            console.log('error: ',error);
            
        })
    }

    return (
        <Fdiv className={"mt-4 border-bottom"}>
            <Button onClick={()=>{if(sem > 1) setSem(sem - 1)}} variant="outline-info" className={"mb-1 mx-3"}><FcPrevious/></Button>
            <p className={"text-dark font-monospace mt-2"}>Semester {sem}</p>
            <Button onClick={()=>{if(sem < 10) setSem(sem + 1)}} variant="outline-info" className={"mb-1 mx-3"}><FcNext/></Button>
            <Button onClick={getFilteredSemester} variant={"outline-secondary"} className={"mx-3 mb-2"}>Filter semester</Button>
            <Form onSubmit={getFiltered}>
                <Fdiv className={"mx-1"}>
                    <Form.Label className={"p-2 text-black-50"}>Class:</Form.Label>
                    <Form.Control name={"class"} as="select" className="form-select mb-2"  size="sm" custom>
                        <option>All</option>
                        <option>Programiranje |</option>
                        <option>Mašinsko učenje</option>
                        <option>Razvoj android aplikacija</option>
                        <option>Računarske mreže</option>
                        <option>Razvoj softvera</option>
                        <option>Programiranje ||</option>
                        <option>Web Programiranje |</option> 
                    </Form.Control>
                    <Form.Label className={"p-2 text-black-50"}>Status:</Form.Label>
                    <Form.Control name={"status"} as="select" className="form-select mb-2" size="sm" custom>
                        <option>Active</option>
                        <option>Vacccation</option>
                        <option>Busy</option>
                    </Form.Control>
                    <Button type="submit" variant={"outline-secondary"} className={"mx-3 mb-2"}>Filter</Button>
                </Fdiv>
            </Form>
            {(filtered)? <Button size="sm" onClick={() => {setSem(1); setFiltered(false); allUsers();}} variant={"danger"} className={"mx-3 mb-2"}>Remove filters</Button>:<></>}
        </Fdiv>
    );
}