import React from "react";
import styled from "styled-components";
import {Button, Form} from "react-bootstrap";
import {FcNext, FcPrevious} from "react-icons/all";

const Fdiv = styled.div`
    display: inline-flex;
    margin-bottom: 2vmin;
    height: 3rem;
`


export default function Filter() {
    return (
        <Fdiv className={"m-4 border-bottom"}>
            <Button variant="outline-info" className={"mb-1 mx-3"}><FcPrevious/></Button>
            <h3 className={"text-dark font-monospace mt-2"}>Week 6</h3>
            <Button variant="outline-info" className={"mb-1 mx-3"}><FcNext/></Button>
            <Form>
                <Fdiv className={"mx-5"}>
                    <Form.Label className={"p-2 text-black-50"}>Class:</Form.Label>
                    <Form.Control as="select" className="form-select mb-2"  size="sm" custom>
                        <option>All</option>
                        <option>Programiranje I</option>
                        <option>DWS</option>
                        <option>Android</option>
                    </Form.Control>
                    <Form.Label className={"p-2 text-black-50"}>Type:</Form.Label>
                    <Form.Control as="select" className="form-select mb-2" size="sm" custom>
                        <option>Any</option>
                        <option>Predavanje</option>
                        <option>Audotorne vježbe</option>
                        <option>Laboratorijske vježbe</option>
                    </Form.Control>
                    <Button variant={"outline-secondary"} className={"mx-3 mb-2"}>Filter</Button>
                </Fdiv>
            </Form>
        </Fdiv>
    );
}