import React from "react";
import {Button, Card} from "react-bootstrap";


export default function MyHomework({hide}) {
    return(
        <div hidden={hide} className={"mx-lg-5 border-bottom p-3 myRecords"}>
            <Card className={'border-success'} style={{ width: '18rem', margin: '1rem'}}>
                <Card.Header className={'bg-success text-light'}>Accepted</Card.Header>
                <Card.Body>
                    <Card.Title> datum </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className={"border-danger"} style={{ width: '18rem', margin: '1rem'}}>
                <Card.Header className={'bg-danger text-light'}>Declined</Card.Header>
                <Card.Body>
                    <Card.Title> datum </Card.Title>
                    <Card.Text>
                        task
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className={'border-secondary'} style={{ width: '18rem', margin: '1rem'}}>
                <Card.Header className={'bg-secondary text-light'}>Waiting</Card.Header>
                <Card.Body>
                    <Card.Title> datum </Card.Title>
                    <Card.Text>
                        task
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}