import React from 'react';
import {Card} from "react-bootstrap";
import MyCard from "./MyCard";
import styled from 'styled-components'


const emptyDay = styled.p`
    font-weight = bold;
    color = #a12244;
    text-allign = center;
    border-top = 20vmin;
`

export default function MainCard({title, data, myDate}){

    return (
        <Card border="info" style={{ width: '18rem', marginRight: '4vmin', marginBottom: '1vmin'}}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Date: {myDate}</Card.Subtitle>
                {
                    (data.length != 0)?
                        data.map((x) => {
                            return <MyCard data={x} />
                        })
                    : <emptyDay>No activities for today.</emptyDay>
                }
            </Card.Body>
        </Card>
    );
}

