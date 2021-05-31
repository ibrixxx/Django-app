import React from "react";
import styled from "styled-components";
import {Button, Form} from "react-bootstrap";
import {FcNext, FcPrevious} from "react-icons/all";

const Fdiv = styled.div`
    display: inline-flex;
    margin-bottom: 2vmin;
    height: 3rem;
`


export default function UserFilter() {
    return (
        <Fdiv className={"mt-4 border-bottom"}>
            <Button variant="outline-info" className={"mb-1 mx-3"}><FcPrevious/></Button>
            <p className={"text-dark font-monospace mt-2"}>Semester 4</p>
            <Button variant="outline-info" className={"mb-1 mx-3"}><FcNext/></Button>
            <Form>
                <Fdiv className={"mx-1"}>
                    <Form.Label className={"p-2 text-black-50"}>Class:</Form.Label>
                    <Form.Control as="select" className="form-select mb-2"  size="sm" custom>
                        <option>All</option>
                        <option>Programiranje I</option>
                        <option>DWS</option>
                        <option>Android</option>
                    </Form.Control>
                    <Form.Label className={"p-2 text-black-50"}>Status:</Form.Label>
                    <Form.Control as="select" className="form-select mb-2" size="sm" custom>
                        <option>Active</option>
                        <option>Vacccation</option>
                        <option>Busy</option>
                    </Form.Control>
                    <Button variant={"outline-secondary"} className={"mx-3 mb-2"}>Filter</Button>
                </Fdiv>
            </Form>
        </Fdiv>
    );
}