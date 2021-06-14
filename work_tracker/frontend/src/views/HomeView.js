import React from "react";
import {useParams} from "react-router-dom";
import MyHeader from "../components/Header";
import MainCard from "../components/MainCard";
import axios from 'axios';

export default function HomeView() {

    let {username} = useParams();

    axios.get('/api/load_home/'+username)
    .then(function (response) {
        console.log('response: ', response);
    })
    .catch(function (error) {
        console.log('error: ',error);
    })
    
    return (
        <div className={"main"}>
            <MyHeader name={"Home"} username={username}/>
            <h3 className={"text-info m-4 border-bottom font-monospace"}>Next seven days</h3>
            <ul className={"scrollmenu m-4"}>
                <li className={"cards"}> <MainCard/> </li>
                <li className={"cards"}> <MainCard/> </li>
                <li className={"cards"}> <MainCard/> </li>
                <li className={"cards"}> <MainCard/> </li>
                <li className={"cards"}> <MainCard/> </li>
                <li className={"cards"}> <MainCard/> </li>
                <li className={"cards"}> <MainCard/> </li>
            </ul>
        </div>
    );
}