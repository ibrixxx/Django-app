import React, {useEffect, useState} from "react"; 
import MyHeader from "../components/Header";
import Profile from "../components/Profile";
import axios from 'axios';
import {useParams} from "react-router-dom";
import * as ReactDOM from "react-dom";
import styled from 'styled-components';


export const LightTheme = {
    pageBackground: "whitesmoke",
    color: "#31343b"
}

export const DarkTheme = {
    pageBackground: "#31343b",
    color: "whitesmoke"
}

const themes = {
    light: LightTheme,
    dark: DarkTheme
}


const MyDiv = styled.div`
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `


export default function SettingsView(props) {
    let {username} = useParams();

    const[status, setStatus] = useState("Active");
    const[myUsername, setUsername] = useState(username);
    const[data, setData] = useState({});
    const[currTheme, setTheme] = useState(themes.light);


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
                        <MyDiv>
                            <MyHeader name={"Settings"} statusCh={changeState} username={myUsername} status={response.data[0].fields.status}/>
                            <Profile setTheme={setTheme} theme={currTheme} status={response.data[0].fields.status} data={response.data[0].fields} setUsername={changeUsername}/>
                        </MyDiv>
                , document.getElementById('root5')
            );
        })
        .catch(function (error) {
            console.log('error: ',error);
        })
    }, []);

    useEffect(()=>{
        ReactDOM.render(
            <MyDiv>
                <MyHeader name={"Settings"} statusCh={changeState} username={myUsername} status={status}/>
                <Profile setTheme={setTheme} theme={currTheme} status={status} data={data} setUsername={changeUsername}/>
            </MyDiv>
            , document.getElementById('root5')
        );
    }, [status, myUsername, currTheme]);

    return(
        <MyDiv >
            <MyHeader name={"Settings"} statusCh={changeState} username={myUsername} status={status}/>
            <h2>Loading...</h2>
        </MyDiv>
    );
}