import React, {useState} from "react";
import MyHeader from "../components/Header";
import MyClasses from "../components/MyClasses";
import ClassFilter from "../components/ClassFilter";
import ModalBtn from "../components/ModalBtn";



export default function ClassesView(props) {

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
}