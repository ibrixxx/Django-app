import React from 'react';
import logo from "../../static/images/logo.svg";
import axios from 'axios';

function Login(){

    function tryToLog(e) {
        const formData = new FormData(e.target);
        e.preventDefault();
        let username, psw;
        for (let [key, value] of formData.entries()) {
            switch(key.toString()){
                case "inputUser":
                    username = value;
                    break;
                case "pswrd":
                    psw = value;
                    break;
            }
        }
        axios.post('http://127.0.0.1:8000/api/check_login/', {
                username: username,
                password: psw,
          })
          .then(function (response) {
            console.log('response: ', response);
            if(response.data  == true)
                window.location = "/a/home/" + username;
            else
                window.location = "/home/" + username;
          })
          .catch(function (error) {
            console.log('error: ',error);
        
          });
        console.log(username, psw);
    }

    return (
        <div className={"text-center App-header"}>
            <img src={logo} className="App-logo" alt="logo" />
            <main className={"form-signin"}>
                <h1 className={"mb-3 fw-normal"}>Please sign in</h1>
                <form onSubmit={tryToLog}>
                    <input type={"text"} name={"inputUser"} id={"inputUser"}
                           className={"form-control"} placeholder={"Username"} required/>
                    <input type={"password"} name={"pswrd"} id={"inputPassword"}
                           className={"form-control"} placeholder={"Password"} required/>
                    <button className={"w-100 btn btn-lg btn-primary"} type={"submit"}>Log in</button>
                </form>
                <p className={"mt-5 mb-3 text-muted"}>Don't have an account? <a href={"/register"}>Register</a></p>
                <p><a href={"/lost_password"}>Forgotten password</a></p>
            </main>
            <p className={"mt-5 mb-3 text-muted"}>&copy; Ibrahim Mešan, 2021</p>
        </div>
    );
}

export default Login;

