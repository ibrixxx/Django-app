import React, {useState, useEffect} from "react";
import MyHeader from "../components/Header";
import ModalBtn from "../components/ModalBtn";
import UserFilter from "../components/UserFilter";
import styled from "styled-components";
import MyCard from "../components/MyCard";
import axios from 'axios';
import {useParams} from "react-router-dom";
import * as ReactDOM from "react-dom";

const Adiv = styled.div`
  margin-left: 9%;
  margin-right: 9%;
  display: flex;
  flex-wrap: wrap;
`


export default function UsersView() {
    const[users, setUsers] = useState([]);


    useEffect(()=>{
        axios.get('/api/load_all_users')
        .then(function (response) {
            console.log('response: ', response);
            setUsers(response.data)
            const data = response.data;
            ReactDOM.render(
                <div className={"main"}>
                    <MyHeader name={"Users"}/>
                    <UserFilter />
                    <ModalBtn text={"Add new user"} user={true} setUsers={setUsers} users={users}/>
                    <Adiv>
                        {data.map((currentUser) => {
                            if(currentUser.fields.status === 'Active')
                                return <MyCard user={true} stats={"bg-success"} name={currentUser.fields.name} type={currentUser.fields.type}/>
                            else if(currentUser.fields.status === 'Busy')
                                return <MyCard user={true} stats={"bg-danger"} name={currentUser.fields.name} type={currentUser.fields.type}/>
                            else 
                                return <MyCard user={true} stats={"bg-primary"} name={currentUser.fields.name} type={currentUser.fields.type}/>
                        })}
                    </Adiv>
                </div>
                , document.getElementById('root6')
            );
        })
        .catch(function (error) {
            console.log('error: ',error);
        })
    }, [users]);

    return (
        <div className={"main"}>
            <MyHeader name={"Users"}/>
            <h2>Loading...</h2>
        </div>
    );
}