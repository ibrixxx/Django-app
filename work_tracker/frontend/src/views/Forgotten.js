import React, {useState} from 'react';
import logo from "../../static/images/logo.svg";

function Forgotten(){
    const [exs, setExs] = useState(true);

    return (
        <div className={"text-center"}>
            <img src={logo} className="App-logo" alt="logo" />
            <main className={"form-signin"}>
                <h3 className={"mb-3 fw-normal"}>New password will be sent to this email</h3>
                <div hidden={exs} className={"alert alert-danger myinfo"} role={"alert"}>
                    <p>Email dosn't exsist!</p>
                </div>
                <form>
                    <input type={"text"} name={"inputEmail"} id={"inputEmail"}
                           className={"form-control"} placeholder={"Enter email"} required/>
                    <button className={"w-100 btn btn-lg btn-primary"} type={"submit"} onClick={() => {setExs(false)}}>Send</button>
                </form>
            </main>
            <p className={"mt-5 mb-3 text-muted"}>&copy; Ibrahim Mešan, 2021</p>
        </div>
    );
}

export default Forgotten;

