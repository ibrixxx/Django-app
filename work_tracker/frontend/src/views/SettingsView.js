import React, {useEffect, useState} from "react"; 
import MyHeader from "../components/Header";
import Profile from "../components/Profile";
import axios from 'axios';
import {useParams} from "react-router-dom";
import * as ReactDOM from "react-dom";


export default function SettingsView() {
    let {username} = useParams();

    const[status, setStatus] = useState("Active");
    const[myUsername, setUsername] = useState(username);
    const[data, setData] = useState({});


    function changeState(str) {
        setStatus(str)
    }

    function changeUsername(str){
        setUsername(str)
    }

    useEffect(()=>{
        axios.get('/api/load_user/'+username)
        .then(function (response) {
            console.log('response: ', response);
            setStatus(response.data[0].fields.status);
            setUsername(response.data[0].fields.username);
            setData(response.data[0].fields);
            ReactDOM.render(
                <div className={"main"}>
                    <MyHeader name={"Settings"} statusCh={changeState} username={myUsername} status={response.data[0].fields.status}/>
                    <Profile status={response.data[0].fields.status} data={response.data[0].fields} setUsername={changeUsername}/>
                </div>
                , document.getElementById('root5')
            );
        })
        .catch(function (error) {
            console.log('error: ',error);
        })
    }, []);

    useEffect(()=>{
        ReactDOM.render(
            <div className={"main"}>
                <MyHeader name={"Settings"} statusCh={changeState} username={myUsername} status={status}/>
                <Profile status={status} data={data} setUsername={changeUsername}/>
            </div>
            , document.getElementById('root5')
        );
    }, [status, myUsername]);

    return(
        <div className={"main"}>
            <MyHeader name={"Settings"} statusCh={changeState} username={myUsername} status={status}/>
            <h2>Loading...</h2>
        </div>
    );
}