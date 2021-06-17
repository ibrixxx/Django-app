import React from 'react';
import {Card} from "react-bootstrap";

export default function Record(props){

    return (
        <Card border="success" style={{ width: '18rem', marginRight: '4vmin', marginBottom: '5vmin'}}>
            <Card.Header>{props.data.class_name}</Card.Header>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Week {props.data.week_held}</Card.Subtitle>
                <p>{props.data.held_date}</p>
                <h5>Type: {props.data.class_type}</h5>
                <p>{props.data.start} : {props.data.end}</p>
                <h6>Participants: {props.data.participants}</h6>
            </Card.Body>
        </Card>
    );
}

