import React from 'react';
import {Card} from "react-bootstrap";

export default function Record(){

    return (
        <Card border="success" style={{ width: '18rem', marginRight: '4vmin', marginBottom: '5vmin'}}>
            <Card.Header>Class</Card.Header>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Datum</Card.Subtitle>
                <h5>Type</h5>
                <h5>From : To</h5>
                <h5>Participants</h5>
            </Card.Body>
        </Card>
    );
}

