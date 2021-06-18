import React, {useState} from "react";
import {useParams} from "react-router-dom";
import MyHeader from "../components/Header";
import {Button} from "react-bootstrap";
import AddTask from "../components/AddTask";
import MyHomework from "../components/MyHomework";
import axios from 'axios';
import * as ReactDOM from "react-dom";


export default function HomeworkView() {
    const [add, setAdd] = useState(true);
    let {username} = useParams();

    function renderTasks() {
        axios.get('/api/load_tasks/'+username)
        .then(function (response) {
            console.log('response: ', response);
            ReactDOM.render(
                <div className={"main"}>
                    <MyHeader name={"Homework"}/>
                    <h3 className={"text-info m-4 border-bottom font-monospace"}>My tasks</h3>
                    <MyHomework data={response.data}/>
                    <div className={"m-3"}>
                        <Button variant={"outline-success"} className={"mx-3"} onClick={()=>{setAdd(!add)}}>Request new homework</Button>
                    </div>
                    <AddTask hide={add} user={true} username={username} renderTasks={renderTasks}/>
                </div>
                , document.getElementById("root3")
            )
        })
        .catch(function (error) {
            console.log('error: ',error);
        })
    }

    renderTasks();

    return (
        <h2>Loading...</h2>
    );
}