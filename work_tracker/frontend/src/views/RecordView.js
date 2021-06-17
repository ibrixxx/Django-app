import React from "react";
import {useParams} from "react-router-dom";
import MyHeader from "../components/Header";
import Filter from "../components/Filter";
import ModalBtn from "../components/ModalBtn";
import Record from "../components/Record";
import axios from 'axios';
import * as ReactDOM from "react-dom";

export default function RecordView() {

    let {username} = useParams();


    function renderRecords() {
        axios.get('/api/load_records/'+username)
        .then(function (response) {
            console.log('response: ', response);
            let records = response.data;
            ReactDOM.render(
                <div className={"main"}>
                    <div>
                        <MyHeader name={"Records"} username={username}/>
                        <Filter username={username} renderRecords={renderRecords}/>
                        <ModalBtn text={"Add new record"} admin={true} username={username} renderRecords={renderRecords}/>
                    </div>
                    <div className={"myRecords"}>
                        {
                            records.map(x => {
                                return <Record data={x.fields} />
                            })
                        }
                    </div>
                </div>
                , document.getElementById("root2"))
        })
        .catch(function (error) {
            console.log('error: ',error);
        })
    }

    renderRecords();

    return <h2>Loading...</h2>
}