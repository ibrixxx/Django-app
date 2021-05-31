import React from "react";
import {Button, Form, FormGroup, Modal} from "react-bootstrap";

export default function MyModal(props) {

    if(props.admin)
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
                <Modal.Body>
                    <Form className={"d-grid"}>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 w-25 text-black-50"}>Class:</Form.Label>
                            <Form.Control as="select" className="form-select" custom>
                                <option>Programiranje I</option>
                                <option>DWS</option>
                                <option>Android</option>
                            </Form.Control>
                        </FormGroup>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 w-25 text-black-50"}>Date:</Form.Label>
                            <Form.Control type="date" placeholder="Enter date" />
                        </FormGroup>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 w-25 text-black-50"}>Type:</Form.Label>
                            <Form.Control as="select" className="form-select" custom>
                                <option>Programiranje I</option>
                                <option>DWS</option>
                                <option>Android</option>
                            </Form.Control>
                        </FormGroup>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 w-25 text-black-50"}>Start:</Form.Label>
                            <Form.Control type="time"/>
                        </FormGroup>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 w-25 text-black-50"}>End:</Form.Label>
                            <Form.Control type="time" />
                        </FormGroup>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 w-25 text-black-50"}>Participants:</Form.Label>
                            <Form.Control type="number" placeholder="Number of students" />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} variant={"outline-dark"}>Colse</Button>
                    <Button onClick={props.onHide}>Add</Button>
                </Modal.Footer>
            </Modal>
        );

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
                <Modal.Body>
                    <Form className={"d-grid"}>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 w-25 text-black-50"}>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Full name" />
                        </FormGroup>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 w-25 text-black-50"}>Title:</Form.Label>
                            <Form.Control as="select" className="form-select" custom>
                                <option>Professor</option>
                                <option>Assistent</option>
                                <option>Boss</option>
                                <option>Big Boss</option>
                            </Form.Control>
                        </FormGroup>
                        <FormGroup className={"d-inline-flex m-1"}>
                            <Form.Label className={"p-2 w-25 text-black-50"}>Status:</Form.Label>
                            <Form.Control as="select" className="form-select" custom>
                                <option>Active</option>
                                <option>Vacation</option>
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