import React, {useState} from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Sidenav from "./components/Sidenav";
import HomeView from "./views/HomeView";
import RecordView from "./views/RecordView";
import AdminHomework from "./views/AdminHomework";
import ClassesView from "./views/ClassesView";
import UsersView from "./views/UsersView"
import SettingsView from "./views/SettingsView";
import Login from "./views/Login";
import Register from "./views/Register";
import Forgotten from "./views/Forgotten";
import HomeworkView from "./views/HomeworkView"
import Prop from "./components/Prop";


function App() {

    return (
        <Router>
            <Switch>
                <Route path='/login'><div className="App"><Login /></div></Route>
                <Route path='/register'><div className="App"><Register /></div></Route>
                <Route path='/lost_password'><div className="App"><Forgotten /></div></Route>

                <Route path='/home/:username'><div className="App"><Sidenav admin={false}/> <div id={'root'}><HomeView admin={false}/></div></div></Route>
                <Route path='/lectures/:username'><div className="App"><Sidenav admin={false}/> <div id={'root2'}><RecordView /></div></div></Route>
                <Route path='/homework/:username'><div className="App"><Sidenav admin={false}/> <div id={'root3'}><HomeworkView /></div></div></Route>
                <Route path='/classes/:username'><div className="App"><Sidenav admin={false}/> <div id={'root4'}><ClassesView admin={false}/></div></div></Route>
                <Route path='/settings/:username'><div className="App"><Sidenav admin={false}/> <div id={'root5'}><SettingsView /></div></div></Route>
            
                <Route path='/a/users/:username'><div className="App"><Sidenav admin={true}/> <div id={'root6'}><UsersView /></div></div></Route>
                <Route path='/a/home/:username'><div className="App"><Sidenav admin={true}/> <div id={'root1'}><HomeView admin={true}/></div></div></Route>
                <Route path='/a/lectures/:username'><div className="App"><Sidenav admin={true}/> <div id={'root22'}><RecordView /></div></div></Route>
                <Route path='/a/homework/:username'><div className="App"><Sidenav admin={true}/> <div id={'root7'}><AdminHomework /></div></div></Route>
                <Route path='/a/classes/:username'><div className="App"><Sidenav admin={true}/> <div id={'root44'}><ClassesView /></div></div></Route>
                <Route path='/a/settings/:username'><div className="App"><Sidenav admin={true}/> <div id={'root55'}><SettingsView admin={true}/></div></div></Route>
            </Switch>
        </Router>
    );
}   

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv) 