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


    const renderUsers = (data) => {
        ReactDOM.render(
            <div className={"main"}>
                <MyHeader name={"Users"}/>
                <UserFilter renderUsers={renderUsers} allUsers={getAllUsers}/>
                <ModalBtn text={"Add new user"} user={true} setUsers={setUsers} users={users}/>
                <Adiv>
                    {data.map((currentUser) => {
                        const data = {
                            name: currentUser.fields.name,
                            type: currentUser.fields.type,
                            img: currentUser.fields.img
                        }   
                        if(currentUser.fields.status === 'Active')
                            return <MyCard user={true} stats={"bg-success"} data={data} />
                        else if(currentUser.fields.status === 'Busy')
                            return <MyCard user={true} stats={"bg-danger"} data={data} />
                        else 
                            return <MyCard user={true} stats={"bg-primary"} data={data} />
                    })}
                </Adiv>
            </div>
            , document.getElementById('root6')
        );
    }


    const getAllUsers = () => {
        axios.get('/api/load_all_users')
        .then(function (response) {
            console.log('response: ', response);
            setUsers(response.data)
            const data = response.data;
            renderUsers(data);
        })
        .catch(function (error) {
            console.log('error: ',error);
        })
    }


    useEffect(()=>{
        getAllUsers();
    }, []);



    return (
        <div className={"main"}>
            <MyHeader name={"Users"}/>
            <h2>Loading...</h2>
        </div>
    );
}