import React, {useState} from 'react';
import logo from "../../static/images/logo.svg";
import {Form, FormGroup} from "react-bootstrap";

function Register(){
    const [exs, setExs] = useState(true);

    return (
        <div className={"App-header"}>
            <div className={"text-center"}>
                <img src={logo} className="App-logo" alt="logo" height={"15vmin"}/>
                <main className={"form-signin"}>
                    <h3 className={"mb-3 fw-normal"}>Please sign in</h3>
                    <div hidden={exs} className={"alert alert-primary myinfo"} role={"alert"}>
                        <p>User already exsists!</p>
                    </div>
                    <form>
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
                            <option>Professor</option>
                            <option>Assistant</option>
                        </Form.Control>
                        <button className={"w-100 btn btn-lg btn-primary"} type={"submit"} onClick={() => {setExs(false)}}>Log in</button>
                    </form>
                </main>
                <p className={"mt-5 mb-3 text-muted"}>&copy; Ibrahim Mešan, 2021</p>
            </div>
        </div>
    );
}

export default Register;