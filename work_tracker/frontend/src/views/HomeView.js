import React from "react";
import {useParams} from "react-router-dom";
import MyHeader from "../components/Header";
import MainCard from "../components/MainCard";
import axios from 'axios';
import * as ReactDOM from "react-dom";

export default function HomeView() {

    let {username} = useParams();
    let homework = []
    let classes = []
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let pom = [];
    let myMap = new Map();
    let date = new Array(4);


    axios.get('/api/load_home/'+username)
    .then(function (response) {
        console.log('response: ', response);
        homework = response.data;
        axios.get('/api/load_classes/'+username)
        .then(function (response) {
            console.log('response: ', response);
            classes = response.data;
            console.log(homework, classes);
            setNextDays();
        })
        .catch(function (error) {
            console.log('error: ',error);
        })
    })
    .catch(function (error) {
        console.log('error: ',error);
    })
    function getDatey() {
        let [month, datey, year] = new Date().toLocaleDateString("en-US").split("/");
        return [month, datey, year].join('/');
    }

    function incDate(date) {
        var day = new Date(date);
        day.setDate(day.getDate()+1);
        let [month, datey, year] = day.toLocaleDateString("en-US").split("/");
        return [month, datey, year].join('/');
    }

    function setNextDays() {
        let d = new Date();
        let i = d.getDay();
        for(let k=0; k<days.length; k++){
            myMap.set(days[k], []);
        }
        for(let j=0; j<classes.length; j++){
            myMap.get(classes[j].fields.class_day).push(classes[j].fields)
        }
        let myDate = getDatey();
        for(let x = 0; x<days.length; x++){
            if(i >= days.length)
                i = i % days.length;
            pom.push(i);
            date[i] = myDate;
            myDate = incDate(myDate);
            i++;
        }
        console.log("sas; ",myMap.get(days[4]));
        ReactDOM.render(
        <div className={"main"}>
            <MyHeader name={"Home"} username={username}/>
            <h3 className={"text-info m-4 border-bottom font-monospace"}>Next seven days</h3>
            <ul className={"scrollmenu m-4"}>
                {
                    pom.map((x) => {
                        return <li className={"cards"}> <MainCard myDate={date[x]} title={days[x]} data={myMap.get(days[x])}/> </li>
                    })
                }
            </ul>
        </div>
        , document.getElementById("root"))
    }
    

    return <h2>Loading...</h2>
}