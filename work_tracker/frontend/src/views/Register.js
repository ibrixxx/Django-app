import React, {useState} from 'react';
import logo from "../../static/images/logo.svg";
import {Form, FormGroup} from "react-bootstrap";
import axios from 'axios';

function Register(){
    const [exs, setExs] = useState(true);

    function createNewUser(event) {
        const formData = new FormData(event.target);
        event.preventDefault();
        let name, username, email, psw, psw2, type;
        for (let [key, value] of formData.entries()) {
            switch(key.toString()){
                case "inputName":
                    name = value;
                    break;
                case "inputNick":
                    username = value;
                    break;
                case "inputEmail":
                    email = value
                    break;
                case "pswrd":
                    psw = value;
                    break;
                case "pswrd2":
                    psw2 = value;
                    break;
                case "typeValue":
                    type = value;
                    break;
            }
        }
        /*const requestOptions = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                name: name,
                email: email,
                password: psw,
                type: type,
            }),
        };
        fetch("/api/register/new_user", requestOptions).then((response) =>
            response.json()
        );*/
        if(username == 'admin' || username == 'Admin')
            setExs(true);
        else
            axios.post('http://127.0.0.1:8000/api/register/new_user', {
                    username: username,
                    name: name,
                    email: email,
                    password: psw,
                    type: type,
            })
            .then(function (response) {
                console.log('response: ', response);
                window.location = "/login";
            })
            .catch(function (error) {
                console.log('error: ',error);
                setExs(true);
            });
        console.log(username, email, psw2, psw, name, type);
    }

    return (
        <div className={"App-header"}>
            <div className={"text-center"}>
                <img src={logo} className="App-logo" alt="logo" height={"15vmin"}/>
                <main className={"form-signin"}>
                    <h3 className={"mb-3 fw-normal"}>Please sign in</h3>
                    <div hidden={exs} className={"alert alert-primary myinfo"} role={"alert"}>
                        <p>User already exsists!</p>
                    </div>
                    <form onSubmit={createNewUser}>
                        <input type={"text"} name={"inputName"} id={"inputName"}
                               className={"form-control"} placeholder={"Full name"} required autoFocus/>
                        <input type={"text"} name={"inputNick"} id={"inputName"}
                               className={"form-control"} placeholder={"Username"} required/>
                        <input type={"email"} name={"inputEmail"} id={"inputEmail"}
                               className={"form-control"} placeholder={"Email address"} required/>
                        <input type={"password"} name={"pswrd"} id={"inputPassword"}
                               className={"form-control"} placeholder={"Password"} required/>
                        <input type={"password"} name={"pswrd2"} id={"inputConPassword"}
                               className={"form-control"} placeholder={"Confirm Password"} required/>
                        <Form.Control as="select" className="form-select" name={"typeValue"} custom>
                            <option value={"Professor"}>Professor</option>
                            <option value={"Assistant"}>Assistant</option>
                        </Form.Control>
                        <button className={"w-100 btn btn-lg btn-primary"} type={"submit"}>Register</button>
                    </form>
                </main>
                <p className={"mt-5 mb-3 text-muted"}>&copy; Ibrahim Mešan, 2021</p>
            </div>
        </div>
    );
}

export default Register;