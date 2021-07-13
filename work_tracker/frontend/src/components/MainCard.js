import React, {useState, useEffect} from 'react';
import {Card, Button} from "react-bootstrap";
import MyCard from "./MyCard";
import styled from 'styled-components';
import MyModal from './MyModal';
import * as ReactDOM from "react-dom";


const emptyDay = styled.p`
    font-weight = bold;
    color = #a12244;
    text-allign = center;
    border-top = 20vmin;
`

export default function MainCard({title, data, myDate, clickable, id}){
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        ReactDOM.render(
            <Card border="info" style={{ width: '18rem', marginRight: '4vmin', marginBottom: '1vmin'}}>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Date: {myDate}</Card.Subtitle>
                    {
                        (data.length != 0)?
                            data.map((x, i) => {
                                return <div>
                                <MyCard key={i} data={x} clickable={clickable} setModal={setModalShow}/>
                                    <MyModal 
                                        admin={false}
                                        user={false}
                                        show={modalShow}
                                        class_view={true}
                                        name={x.class_name}
                                        key={i}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                            })
                        : <emptyDay>No activities for today.</emptyDay>
                    }
                </Card.Body>
            </Card>
            , document.getElementById("li"+id))
    }, [modalShow])

    return (
        <Card border="info" style={{ width: '18rem', marginRight: '4vmin', marginBottom: '1vmin'}}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Date: {myDate}</Card.Subtitle>
                {
                    (data.length != 0)?
                        data.map((x, i) => {
                            return <div>
                            <MyCard key={i} data={x} clickable={clickable} setModal={setModalShow}/>
                                <MyModal 
                                    admin={false}
                                    user={false}
                                    show={modalShow}
                                    class_view={true}
                                    name={x.class_name}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        })
                    : <emptyDay>No activities for today.</emptyDay>
                }
            </Card.Body>
        </Card>
    );
}

