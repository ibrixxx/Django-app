import {Button, Form, FormGroup} from "react-bootstrap";
import React from "react";


export default function AddTask({hide, user}) {

    if(user)
        return(
            <div hidden={hide} className={"mx-lg-5 border-bottom p-3"}>
                <Form className={"d-grid"}>
                    <h3 className={"text-secondary fw-bold"}>New homework</h3>
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