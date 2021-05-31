import React, {useState} from "react";
import MyHeader from "../components/Header";
import ModalBtn from "../components/ModalBtn";
import UserFilter from "../components/UserFilter";
import styled from "styled-components";
import MyCard from "../components/MyCard";

const Adiv = styled.div`
  margin-left: 9%;
  margin-right: 9%;
  display: flex;
  flex-wrap: wrap;
`


export default function UsersView() {

    return (
        <div className={"main"}>
            <MyHeader name={"Users"}/>
            <UserFilter />
            <ModalBtn text={"Add new user"} user={true}/>
            <Adiv>
                <MyCard user={true} stats={"bg-success"}/>
                <MyCard user={true} stats={"bg-primary"}/>
                <MyCard user={true} stats={"bg-danger"}/>
                <MyCard user={true} stats={"bg-primary"}/>
                <MyCard user={true} stats={"bg-success"}/>
            </Adiv>
        </div>
    );
}