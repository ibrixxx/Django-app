import React, {useState} from "react";
import styled from "styled-components";
import {Button, Form} from "react-bootstrap";
import {FcNext, FcPrevious} from "react-icons/all";
import axios from 'axios';
import * as ReactDOM from "react-dom";
import MyHeader from "./Header";
import MyClasses from "./MyClasses";
import ModalBtn from "./ModalBtn";


const Fdiv = styled.div`
    display: inline-flex;
    margin-bottom: 2vmin;
    height: 3rem;
`


export default function ClassFilter({username, admin}) {

    const [week, setWeek] = useState(1);

    function renderFilteredCl(e) {
        const formData = new FormData(e.target);
        e.preventDefault();
        const formDataObj = Object.fromEntries(formData.entries());
        const endpoint = `/api/load_filtered_classes/`;
        console.log(formDataObj.class_name);
        axios.post(endpoint, {
            username: username,
            semester: formDataObj.semester,
            year: week
        })
        .then(function (response) {
            console.log('response: ', response);
            let classes = response.data;
            if(classes.length > 0)
                ReactDOM.render(
                    <div className={"main"}>
                        <MyHeader name={"Classes"}/>
                        <ClassFilter admin={admin} username={username}/>
                        <div hidden={!admin}>
                            <ModalBtn text={"Add new class"} admin={false} />
                        </div>
                        <MyClasses btns={!admin} data={classes}/>
                    </div>
                , document.getElementById("root4"))
            else
                ReactDOM.render(
                    <div className={"main"}>
                        <MyHeader name={"Classes"}/>
                        <ClassFilter admin={admin} username={username}/>
                        <div hidden={!admin}>
                            <ModalBtn text={"Add new class"} admin={false} />
                        </div>
                        <emptyStyle>
                            <p>No classes found.</p>
                        </emptyStyle>
                    </div>
                , document.getElementById("root4"))
        })
        .catch(function (error) {
            console.log('error: ',error);
            ReactDOM.render(
                <emptyStyle>
                    <p>No classes found.</p>
                </emptyStyle>
            , document.getElementById("root2"))
        })
    }

    return (
        <Fdiv className={"mt-4 border-bottom"}>
            <Button onClick={()=>{if(week > 1) setWeek(week - 1)}} variant="outline-info" className={"mb-1 mx-3"}><FcPrevious/></Button>
            <p className={"text-dark font-monospace mt-2"}>Year {week}</p>
            <Button onClick={()=>{if(week < 5) setWeek(week + 1)}} variant="outline-info" className={"mb-1 mx-3"}><FcNext/></Button>
            <Form onSubmit={renderFilteredCl}>
                <Fdiv className={"mx-1"}>
                    <Form.Label className={"p-2 text-black-50"}>Semester:</Form.Label>
                    <Form.Control as="select" name='semester' className="form-select mb-2" size="sm" custom>
                        <option>Winter</option>
                        <option>Summer</option>
                    </Form.Control>
                    <div hidden={!admin}>
                    <Form.Label className={"p-2 text-black-50"}>Class:</Form.Label>
                    <Form.Control as="select" name='class_name' className="form-select mb-2"  size="sm" custom>
                        <option>All</option>
                        <option>Programiranje |</option>
                        <option>Mašinsko učenje</option>
                        <option>Razvoj android aplikacija</option>
                        <option>Računarske mreže</option>
                        <option>Razvoj softvera</option>
                        <option>Programiranje ||</option>
                        <option>Web Programiranje |</option> 
                    </Form.Control>
                    <Form.Label className={"p-2 text-black-50"}>Staff:</Form.Label>
                    <Form.Control as="select" name='staff' className="form-select mb-2" size="sm" custom>
                        <option>Any</option>
                        <option>Predavanje</option>
                        <option>Audotorne vježbe</option>
                        <option>Laboratorijske vježbe</option>
                    </Form.Control>
                    </div>
                    <Button type='submit' variant={"outline-secondary"} className={"mx-3 mb-2"}>Filter</Button>
                </Fdiv>
            </Form>
        </Fdiv>
    );
}