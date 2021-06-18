import {Button, Form, FormGroup} from "react-bootstrap";
import React from "react";
import axios from 'axios';

export default function AddTask({hide, user, username, renderTasks}) {

    function addTask(e) {
        const formData = new FormData(e.target);
        e.preventDefault();
        const formDataObj = Object.fromEntries(formData.entries())
        axios.post('/api/add_task/', {
            username: username,
            date: formDataObj.date,
            type: formDataObj.type
        })
        .then(function (response) {
            console.log('response: ', response);
            renderTasks();
        })
        .catch(function (error) {
            console.log('error: ',error);
        });
    }

    if(user)
        return(
            <div hidden={hide} className={"mx-lg-5 border-bottom p-3"}>
                <Form onSubmit={addTask}>
                    <h3 className={"text-secondary fw-bold"}>New task</h3>
                    <div className={'d-flex align-items-center'}>
                    <div className={'w-50'}>
                        <FormGroup className={"d-inline-flex m-2"}>
                            <Form.Label className={"p-2 text-black-50"}>Deadline:</Form.Label>
                            <Form.Control type="date" name='date' placeholder="Enter date" required/>
                        </FormGroup>
                    </div>
                    <div className={'w-50'}>
                        <FormGroup className={"d-inline-flex m-2"}>
                            <Form.Label className={"p-2 text-black-50"}>Type:</Form.Label>
                            <Form.Control as="select" name={"type"} className="form-select" required>
                                <option>Test prep</option>
                                <option>Test review</option>
                                <option>Science work</option>
                                <option>Tution</option>
                                <option>Doctoral work</option>
                                <option>Other</option>
                            </Form.Control>
                        </FormGroup>
                    </div>
                    </div>
                    <Button type={'submit'} variant={"success"}>Add</Button>
                </Form>
            </div>
        );

    return(
        <div hidden={hide} className={"mx-lg-5 border-bottom p-3"}>
            <Form className={"d-grid"}>
                <h3 className={"text-secondary fw-bold"}>New homework</h3>
                <FormGroup className={"d-inline-flex m-1"}>
                    <Form.Label className={"p-2 text-black-50"}>Teacher:</Form.Label>
                    <Form.Control as="select" className="form-select mb-2"  size="sm" custom>
                        <option>osoblje</option>
                        <option>Sejo</option>
                        <option>Eldo</option>
                        <option>Hura</option>
                    </Form.Control>
                </FormGroup>
                <FormGroup className={"d-inline-flex m-2"}>
                    <Form.Label className={"p-2 text-black-50"}>Date:</Form.Label>
                    <Form.Control type="date" placeholder="Enter date" />
                </FormGroup>
                <div className={"d-md-grid m-1 form-check"}>
                    <Form.Label className={"p-2 text-black-50"}>Type:</Form.Label>
                    <label className="form-check-label text-info">Test prep
                        <input className="form-check-input" type="checkbox" />
                    </label>
                    <label className="form-check-label text-info">Test check
                        <input className="form-check-input" type="checkbox" />
                    </label>
                    <label className="form-check-label text-info">Science work
                        <input className="form-check-input" type="checkbox" />
                    </label>
                    <label className="form-check-label text-info">Tution
                        <input className="form-check-input" type="checkbox" />
                    </label>
                    <label className="form-check-label text-info" >Doctoral work
                        <input className="form-check-input" type="checkbox" />
                    </label>
                    <label className="form-check-label text-info">Other
                        <input className="form-check-input" type="checkbox" />
                    </label>
                </div>
                <Button variant={"success"}>Add</Button>
            </Form>
        </div>
    );
}