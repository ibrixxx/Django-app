import React from "react";
import {Button, Card} from "react-bootstrap";


export default function MyHomework({hide, data}) {
    return(
        <div hidden={hide} className={"mx-lg-5 border-bottom p-3 myRecords"}>
            {
                data.map( (x) => {
                    if(x.fields.accepted === 'yes'){
                        return (
                        <Card className={'border-success'} style={{ width: '18rem', margin: '1rem'}}>
                            <Card.Header className={'bg-success text-light'}>Accepted</Card.Header>
                            <Card.Body>
                                <Card.Title>Deadline: {x.fields.end}</Card.Title>
                                <Card.Text>
                                    Type: {x.fields.class_type}
                                </Card.Text>
                            </Card.Body>
                        </Card>);
                    }
                    else if(x.fields.accepted === 'no'){
                        return (
                            <Card className={"border-danger"} style={{ width: '18rem', margin: '1rem'}}>
                                <Card.Header className={'bg-danger text-light'}>Declined</Card.Header>
                                <Card.Body>
                                    <Card.Title>Deadline: {x.fields.end}</Card.Title>
                                    <Card.Text>
                                        Type: {x.fields.class_type}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    }
                    else{
                        return (
                            <Card className={'border-secondary'} style={{ width: '18rem', margin: '1rem'}}>
                                <Card.Header className={'bg-secondary text-light'}>Waiting</Card.Header>
                                <Card.Body>
                                    <Card.Title>Deadline: {x.fields.end}</Card.Title>
                                    <Card.Text>
                                        Type: {x.fields.class_type}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    }
                    
                })
            }
        </div>
    );
}