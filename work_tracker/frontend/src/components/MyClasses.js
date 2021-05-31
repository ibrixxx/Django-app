import React from "react";
import {Button, Card} from "react-bootstrap";
import {FaEdit, MdDeleteForever} from "react-icons/all";


export default function MyClasses(props) {
    return(
        <div className={"mx-lg-5 p-3 myRecords"}>
            <Card className={'border-info'} style={{ width: '18rem', margin: '1rem'}}>
                <Card.Body>
                    <Card.Title className={'text-info'}>Naziv predmeta</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">termin predavanja</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">termin vjezbi</Card.Subtitle>
                    <Card.Text>Profesor</Card.Text>
                    <Card.Text>Asistent</Card.Text>
                    <div hidden={props.btns}>
                        <Button variant={"danger"} className={"mx-3"}><MdDeleteForever/></Button>
                        <Button variant={"info"} className={"mx-3"}><FaEdit/></Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}