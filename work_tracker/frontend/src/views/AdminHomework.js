import React, {useState} from "react";
import styled from "styled-components";
import MyHeader from "../components/Header";
import MyCard from "../components/MyCard";
import {Button, Form, FormGroup, InputGroup} from "react-bootstrap";
import AddTask from "../components/AddTask";
import CheckTask from "../components/CheckTask";

const Adiv = styled.div`
  margin-left: 9%;
  margin-right: 9%;
  display: flex;
  flex-wrap: wrap;
`


export default function AdminHomework() {
    const [add, setAdd] = useState(true);
    const [see, setSee] = useState(true);

    return (
        <div className={"main"}>
            <MyHeader name={"Homework"}/>
            <div className={"m-3"}>
                <Button variant={"outline-success"} className={"mx-3"} onClick={()=>{setAdd(!add)}}>Add new homework</Button>
                <Button variant={"outline-info"} className={"mx-3"} onClick={()=>{setSee(!see)}}>See requests</Button>
            </div>
            <AddTask hide={add} user={false}/>
            <CheckTask hide={see}/>
            <Adiv>
                <MyCard/>
                <MyCard/>
                <MyCard/>
                <MyCard/>
                <MyCard/>
            </Adiv>

        </div>
    );
}