import React, {useEffect, useState} from "react"; 
import MyHeader from "../components/Header";
import Profile from "../components/Profile";

const pomObj = {
    name: "fake name",
    username: "@faka",
    type: 'Professor',
    img: "https://bootdey.com/img/Content/avatar/avatar7.png"
}


export default function SettingsView() {
    const[status, setStatus] = useState("Active");
    const[username, setUsername] = useState("porba");
    const[arr, setArr] = useState(pomObj);

    function changeState(str) {
        setStatus(str)
    }

    function changeUsername(str){
        setUsername(str)
    }

    return(
        <div className={"main"}>
            <MyHeader name={"Settings"} statusCh={changeState} username={username}/>
            <Profile status={status} data={arr} setUsername={changeUsername}/>
        </div>
    );
}