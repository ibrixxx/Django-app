import React from "react";
import {Button, Card} from "react-bootstrap";
import {GiCancel, GiConfirmed} from "react-icons/all";


export default function CheckTask({hide}) {
    return(
        <div hidden={hide} className={"mx-lg-5 border-bottom p-3 myRecords"}>
            <Card style={{ width: '18rem', margin: '1rem'}}>
                <Card.Body>
                    <Card.Title>Osoba</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Datum</Card.Subtitle>
                    <Card.Text>
                        Sta radi
                    </Card.Text>
                    <Button variant={"danger"} className={"mx-3"}><GiCancel/></Button>
                    <Button variant={"success"} className={"mx-3"}><GiConfirmed/></Button>
                </Card.Body>
            </Card>
        </div>
    );
}