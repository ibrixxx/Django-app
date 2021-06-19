import React from "react";
import {Button, Card} from "react-bootstrap";
import {FaEdit, MdDeleteForever} from "react-icons/all";


export default function MyClasses(props) {
    return(
        <div className={"mx-lg-5 p-3 myRecords"}>
            {
                props.data.map( x => {
                    return (<Card className={'border-info'} style={{ width: '18rem', margin: '1rem'}}>
                                <Card.Body>
                                    <Card.Title className={'text-info'}>{x.fields.class_name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Lecture day: {x.fields.class_day} ({x.fields.class_durr_in_hours} h)</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Lab day: {x.fields.lab_day} ({x.fields.lab_durr_in_hours} h)</Card.Subtitle>
                                    <Card.Text>Year: {x.fields.year}</Card.Text>
                                    <Card.Text>Semester: {x.fields.semester}</Card.Text>
                                    <div hidden={props.btns}>
                                        <Button variant={"danger"} className={"mx-3"}><MdDeleteForever/></Button>
                                        <Button variant={"info"} className={"mx-3"}><FaEdit/></Button>
                                    </div>
                                </Card.Body>
                            </Card>);
                })
            }
        </div>
    );
}