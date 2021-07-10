import React from "react";
import {Button, Form, FormGroup, Modal} from "react-bootstrap";;
import axios from 'axios';

export default function MyModal(props) {

    function addNewRecord(e){
        const formData = new FormData(e.target);
        e.preventDefault();
        const formDataObj = Object.fromEntries(formData.entries())
        let class_id = formDataObj.class_id,
         week = formDataObj.week,
         type = formDataObj.type,
         start = formDataObj.start,
         end = formDataObj.end,
         participants = formDataObj.participants;
        console.log(props.username, class_id, week, type, start, end, participants);
        axios.post('/api/add_record/', {
                username: props.username,
                class_id: class_id,
                week: week,
                type: type,
                start: start, 
                end: end, 
                participants: participants,
        })
        .then(function (response) {
            console.log('response: ', response);
            props.onHide();
            props.renderRecords();
        })
        .catch(function (error) {
            console.log('error: ',error);
        });
    }

    function addNewUser(e) {
        const formData = new FormData(e.target);
        e.preventDefault();
        const formDataObj = Object.fromEntries(formData.entries())
        axios.post('http://127.0.0.1:8000/api/register/new_user', {
                username: formDataObj.username,
                name: formDataObj.name,
                email: formDataObj.email,
                password: 'test123',
                type: formDataObj.type,
        })
        .then(function (response) {
            console.log('response: ', response);
            let pom = props.users;
            pom.push({
                username: formDataObj.username,
                name: formDataObj.name,
                email: formDataObj.email,
                password: 'test123',
                type: formDataObj.type,
            })
            props.setUsers(pom);
        })
        .catch(function (error) {
            console.log('error: ',error);
        });
    }

    if(props.admin){

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add a record
                    </Modal.Title>
                </Modal.Header>
                <Form className={"d-grid"} onSubmit={addNewRecord}>
                    <Modal.Body>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 text-black-50"}>Class:</Form.Label>
                            <Form.Control as="select" name={"class_id"} className="form-select" custom>
                                <option>Programiranje |</option>
                                <option>Mašinsko učenje</option>
                                <option>Razvoj android aplikacija</option>
                                <option>Računarske mreže</option>
                                <option>Razvoj softvera</option>
                                <option>Programiranje ||</option>
                                <option>Web Programiranje |</option>                    
                            </Form.Control>
                        </FormGroup>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 text-black-50"}>Week:</Form.Label>
                            <Form.Control type="number" name={"week"} placeholder="Enter week" min={1} max={15}/>
                        </FormGroup>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 text-black-50"}>Type:</Form.Label>
                            <Form.Control as="select" name={"type"} className="form-select" custom>
                                <option>Lab</option>
                                <option>Lecture</option>
                                <option>Tutorial</option>
                            </Form.Control>
                        </FormGroup>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 text-black-50"}>Start: </Form.Label>
                            <Form.Control type="time" name={"start"}/>
                        </FormGroup>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 text-black-50"}>End: </Form.Label>
                            <Form.Control type="time" name={"end"}/>
                        </FormGroup>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 text-black-50"}>Participants:</Form.Label>
                            <Form.Control type="number" name={"participants"} placeholder="Number of students" min={1}/>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide} variant={"outline-dark"}>Colse</Button>
                        <Button type="submit">Add</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }

    if(props.user)
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add a user
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={addNewUser} className={"d-grid"}>
                <Modal.Body>
                    <FormGroup className={"m-1"}>
                        <Form.Label className={"p-2 w-25 text-black-50"}>Name:</Form.Label>
                        <Form.Control name={'name'} type="text" placeholder="Full name" />
                    </FormGroup>
                    <FormGroup className={"m-1"}>
                        <Form.Label className={"p-2 w-25 text-black-50"}>Username:</Form.Label>
                        <Form.Control name={'username'} type="text" placeholder="Username" />
                    </FormGroup>
                    <FormGroup className={"m-1"}>
                        <Form.Label className={"p-2 w-25 text-black-50"}>Email:</Form.Label>
                        <Form.Control name={'email'} type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup className={"m-1"}>
                        <Form.Label className={"p-2 w-25 text-black-50"}>Title:</Form.Label>
                        <Form.Control name={'type'} as="select" className="form-select" custom>
                            <option>Professor</option>
                            <option>Assistent</option>
                            <option>Dekan</option>
                            <option>Šef odsjeka</option>
                        </Form.Control>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} variant={"outline-dark"}>Colse</Button>
                    <Button type={'submit'} onClick={props.onHide}>Add</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        );

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add a class
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className={"d-grid"}>
                    <FormGroup className={"d-inline-flex m-1"}>
                        <Form.Label className={"p-2 w-50 text-black-50"}>Class name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter class name" />
                    </FormGroup>
                    <FormGroup className={"d-inline-flex m-1"}>
                        <Form.Label className={"p-2 w-50 text-black-50"}>Time of lecture:</Form.Label>
                        <Form.Control type="time" />
                    </FormGroup>
                    <FormGroup className={"d-inline-flex m-1"}>
                        <Form.Label className={"p-2 w-50 text-black-50"}>Time of lab:</Form.Label>
                        <Form.Control type="time" />
                    </FormGroup>
                    <FormGroup className={"d-inline-flex m-1"}>
                        <Form.Label className={"p-2 w-50 text-black-50"}>Professor:</Form.Label>
                        <Form.Control as="select" className="form-select" custom>
                            <option>Ado</option>
                            <option>DWS</option>
                            <option>Android</option>
                        </Form.Control>
                    </FormGroup>
                    <FormGroup className={"d-inline-flex m-1"}>
                        <Form.Label className={"p-2 w-50 text-black-50"}>Assistent:</Form.Label>
                        <Form.Control as="select" className="form-select" custom>
                            <option>Sejo</option>
                            <option>DWS</option>
                            <option>Android</option>
                        </Form.Control>
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant={"outline-dark"}>Colse</Button>
                <Button onClick={props.onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}