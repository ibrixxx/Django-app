import React, {useState} from "react";
import styled from "styled-components";
import {Button, Form} from "react-bootstrap";
import {FcNext, FcPrevious} from "react-icons/all";
import MyHeader from "./Header";
import ModalBtn from "./ModalBtn";
import Record from "./Record";
import axios from 'axios';
import * as ReactDOM from "react-dom";

const Fdiv = styled.div`
    display: inline-flex;
    margin-bottom: 2vmin;
    height: 3rem;
`

const emptyStyle = styled.p`
    color: blue;
    text-allign: center;
    margin-top: 5rem;
`


export default function Filter({username, renderRecords}) {
    const [week, setWeek] = useState(1);

    function renderFilteredRecords(e) {
        const formData = new FormData(e.target);
        e.preventDefault();
        const formDataObj = Object.fromEntries(formData.entries());
        let type = formDataObj.type, class_name = formDataObj.class_id;
        const endpoint = `/api/load_filtered_records/`;
        axios.post(endpoint, {
            username: username,
            class_name: class_name,
            type: type,
            week: week
        })
        .then(function (response) {
            console.log('response: ', response);
            let records = response.data;
            if(records.length > 0)
                ReactDOM.render(
                    <div className={"main"}>
                        <div>
                            <MyHeader name={"Records"} username={username}/>
                            <Filter/>
                            <ModalBtn text={"Add new record"} admin={true} username={username} renderRecords={renderRecords}/>
                        </div>
                        <div className={"myRecords"}>
                            {
                                records.map(x => {
                                    return <Record data={x.fields} />
                                })
                            }
                        </div>
                    </div>
                    , document.getElementById("root2"))
            else
                ReactDOM.render(
                <div className={"main"}>
                    <div>
                        <MyHeader name={"Records"} username={username}/>
                        <Filter/>
                        <ModalBtn text={"Add new record"} admin={true} username={username} renderRecords={renderRecords}/>
                    </div>
                    <emptyStyle>
                        No records found.
                    </emptyStyle>
                </div>
                , document.getElementById("root2"))
        })
        .catch(function (error) {
            console.log('error: ',error);
            ReactDOM.render(
                <emptyStyle>
                    <p>No records found.</p>
                </emptyStyle>
            , document.getElementById("root2"))
        })
    }


    return (
        <Fdiv className={"m-4 border-bottom"}>
            <Button onClick={()=>{if(week > 1) setWeek(week - 1)}} variant="outline-info" className={"mb-1 mx-3"}><FcPrevious/></Button>
            <h3 className={"text-dark font-monospace mt-2"}>Week {week}</h3>
            <Button onClick={()=>{if(week < 15) setWeek(week + 1)}} variant="outline-info" className={"mb-1 mx-3"}><FcNext/></Button>
            <Form onSubmit={renderFilteredRecords}>
                <Fdiv className={"mx-5"}>
                    <Form.Label className={"p-2 text-black-50"}>Class:</Form.Label>
                    <Form.Control as="select" name={"class_id"} className="form-select mb-2"  size="sm" custom>
                        <option>Programiranje |</option>
                        <option>Mašinsko učenje</option>
                        <option>Razvoj android aplikacija</option>
                        <option>Računarske mreže</option>
                        <option>Razvoj softvera</option>
                        <option>Programiranje ||</option>
                        <option>Web Programiranje |</option> 
                    </Form.Control>
                    <Form.Label className={"p-2 text-black-50"}>Type:</Form.Label>
                    <Form.Control as="select" name={"type"} className="form-select mb-2" size="sm" custom>
                        <option>Lab</option>
                        <option>Lecture</option>
                        <option>Tutorial</option>
                    </Form.Control>
                    <Button type={'submit'} variant={"outline-secondary"} className={"mx-3 mb-2"}>Filter</Button>
                </Fdiv>
            </Form>
        </Fdiv>
    );
}