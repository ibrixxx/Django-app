import React, {useState} from "react";
import MyHeader from "../components/Header";
import MyClasses from "../components/MyClasses";
import ClassFilter from "../components/ClassFilter";
import ModalBtn from "../components/ModalBtn";
import axios from 'axios';
import * as ReactDOM from "react-dom";
import {useParams} from "react-router-dom";


export default function ClassesView(props) {
    let {username} = useParams();

    function loadClasses() {
        axios.get('/api/load_classes/'+username)
        .then(function (response) {
            console.log('response: ', response);
            let classes = response.data;
            ReactDOM.render(
                <div className={"main"}>
                    <MyHeader name={"Classes"} username={username}/>
                    <ClassFilter admin={props.admin} username={username}/>
                    <div hidden={!props.admin}>
                        <ModalBtn text={"Add new class"} admin={false} />
                    </div>
                    <MyClasses btns={!props.admin} data={classes}/>
                </div>
                , document.getElementById("root4")
            )
        })
        .catch(function (error) {
            console.log('error: ',error);
        })
    }

    if(props.admin)
        return (
            <div className={"main"}>
                <MyHeader name={"Classes"}/>
                <ClassFilter />
                <div hidden={!props.admin}>
                    <ModalBtn text={"Add new class"} admin={false} />
                </div>
                <MyClasses btns={!props.admin}/>
            </div>
        );
    else{
        loadClasses();
    }
    
    return <h2>Loading...</h2>
}