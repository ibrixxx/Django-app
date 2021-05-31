import React from 'react';
import {Card} from "react-bootstrap";
import MyCard from "./MyCard";

export default function MainCard(){

    return (
        <Card border="info" style={{ width: '18rem', marginRight: '4vmin', marginBottom: '1vmin'}}>
            <Card.Header>Dan</Card.Header>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Datum</Card.Subtitle>
                <MyCard/>
                <MyCard/>
                <MyCard/>
            </Card.Body>
        </Card>
    );
}

