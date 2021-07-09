import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import axios from 'axios';
import styled from 'styled-components';
import { LightTheme, DarkTheme } from "../views/SettingsView";
import {CgDarkMode} from "react-icons/all";


const defaultImage = "https://bootdey.com/img/Content/avatar/avatar7.png";

export default function Profile({status, data, setUsername, setTheme, theme}) {
    const[edit, setEdit] = useState(false);
    const[psw, setPsw] = useState(true);
    const[editTxt, setEdTxt] = useState("primary");
    const [exs, setExs] = useState(true);
    const [exs2, setExs2] = useState(true);
    const [exs3, setExs3] = useState(true);
    const [img, setImg] = useState(true);
    const [myUrl, setMyUrl] = useState("");

    const MyDiv = styled.div`
        padding: 2rem;
        height: 100%;
        background-color: ${theme.pageBackground};
        color: ${theme.color};
        transition: all .5s ease;
    `



    function changeNames() {
        if(edit) {
            let name = document.getElementById("mojHE").innerText;
            let usrname = document.getElementById("usrname").innerText;
            usrname = usrname.slice(1, usrname.length)
            setUsername(usrname);
            axios.post('/api/change_username/', {
                name: name,
                new_username: usrname,
                username: data.username
              })
              .then(function (response) {
                console.log(response);
                window.location = "/settings/" + usrname;
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        setEdit(!edit);
        setEdTxt((editTxt === "primary")? "info" : "primary");
    }

    function changePassword(event) {
        let p1, p2 = "x"
        const formData = new FormData(event.target);
        event.preventDefault();
        for (let [key, value] of formData.entries()) {
            if(key.toString() === "p1")
                p1 = value
            else
                p2 = value
        }
        setExs(true)
        setExs2(true)
        setExs3(true)
        if(p1 !== p2){
            setExs2(false)
            return;
        }
        else if(p1 === data.password.toString()){
            setExs3(false);
            return;
        }
        else if(p1.length < 6){
            setExs(false)
            return;
        }
        else{
            setExs(true)
            setExs2(true)
            setExs3(true)
            setPsw(true)
            axios.post('/api/change_password/', {
                password: p1,
                username: data.username
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }

    function changePhoto(event) {
        const formData = new FormData(event.target);
        event.preventDefault();
        let url;
        for (let [key, value] of formData.entries())
            url = value;
        setImg(true);
        setMyUrl(url);
        console.log(url);
        axios.post('/api/change_img/', {
            img: url,
            username: data.username
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return(
        <MyDiv>
            <div className="d-flex flex-column align-items-center text-center">
                <img onClick={() => {setImg(!img)}} src={(myUrl ==="")? data.img:myUrl} alt="Img" className="rounded-circle myPhoto"
                    width="150" height="150"/>
                <div hidden={img} className={'m-3'}>
                    <Form className={'d-flex'} onSubmit={changePhoto}>
                        <Form.Group>
                            <Form.Control name={"myPhoto"} type="url" placeholder="Enter new img url" />
                        </Form.Group>
                        <Button variant={"outline-success"} type={"submit"}>Change</Button>
                    </Form>
                </div>
                <div className="mt-3">
                    <h4 id={"mojHE"} contentEditable={edit} className={edit? "border-bottom text-info":""}>{data.name}</h4>
                    <p id={"usrname"} contentEditable={edit} className={"text-secondary mb-1 " + (edit? "border-bottom text-info":"")}><small>@</small>{data.username}</p>
                    <p className="font-size-sm text-primary">{data.type}</p>
                    <p className={"text-secondary font-size-sm"}>Status: {status}</p>
                    <Button className={"m-3"} variant={editTxt} onClick={changeNames}>{(editTxt==="primary")? "Edit" : "Ok"}</Button>
                    <Button className={"m-3"} variant={"outline-primary"} onClick={() => {setPsw(!psw)}}>Change Password</Button>
                    <div hidden={psw} className={"bg-light"}>
                        <Form onSubmit={changePassword}>
                            <div hidden={exs} className={"alert alert-danger myinfo"} role={"alert"}>
                                <p>Password must be longer than 6 letters!</p>
                            </div>
                            <div hidden={exs2} className={"alert alert-danger myinfo"} role={"alert"}>
                                <p>New Password and Confirm Password don't mach!</p>
                            </div>
                            <div hidden={exs3} className={"alert alert-danger myinfo"} role={"alert"}>
                                <p>New Password is same as the old one!</p>
                            </div>
                            <Form.Group>
                                <Form.Label>New Password</Form.Label>
                                <Form.Control name={"p1"} type="password" placeholder="new password" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className={"mt-2"}>Confirm Password</Form.Label>
                                <Form.Control name={"p2"} type="password" placeholder="retype new password" />
                            </Form.Group>
                            <Button variant="success" className={"mt-2"} type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <CgDarkMode size={'3em'} onClick={
                                () => {
                                    if(theme === DarkTheme)
                                        setTheme(LightTheme)
                                    else
                                        setTheme(DarkTheme)
                                }
                            }/>
                </div>
            </div>
        </MyDiv>
    );
}