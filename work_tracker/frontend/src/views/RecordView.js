import React from "react";
import MyHeader from "../components/Header";
import Filter from "../components/Filter";
import ModalBtn from "../components/ModalBtn";
import Record from "../components/Record";

export default function RecordView() {
    return (
        <div className={"main"}>
            <div>
                <MyHeader name={"Records"}/>
                <Filter/>
                <ModalBtn text={"Add new record"} admin={true}/>
            </div>
            <div className={"myRecords"}>
                <Record/>
                <Record/>
                <Record/>
                <Record/>
                <Record/>
                <Record/>
                <Record/>
                <Record/>
                <Record/>
            </div>
        </div>
    );
}