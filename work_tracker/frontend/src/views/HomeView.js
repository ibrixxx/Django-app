import React from "react";
import MyHeader from "../components/Header";
import MainCard from "../components/MainCard";

export default function HomeView() {
    return (
        <div className={"main"}>
            <MyHeader name={"Home"}/>
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