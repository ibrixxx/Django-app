import React from 'react';
import logo from "../../static/images/logo.svg";

function Login(){
    return (
        <div className={"text-center"}>
            <img src={logo} className="App-logo" alt="logo" />
            <main className={"form-signin"}>
                <h1 className={"mb-3 fw-normal"}>Please sign in</h1>
                <form>
                    <input type={"text"} name={"inputUser"} id={"inputUser"}
                           className={"form-control"} placeholder={"Username"} required/>
                    <input type={"password"} name={"pswrd"} id={"inputPassword"}
                           className={"form-control"} placeholder={"Password"} required/>
                    <button className={"w-100 btn btn-lg btn-primary"} type={"submit"}>Log in</button>
                </form>
                <p className={"mt-5 mb-3 text-muted"}>Don't have an account? <a href={"#"}>Register</a></p>
                <p><a href={"#"}>Forgotten password</a></p>
            </main>
            <p className={"mt-5 mb-3 text-muted"}>&copy; Ibrahim Mešan, 2021</p>
        </div>
    );
}

export default Login;

