import React from "react";
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
                <Route path='/home/:username'><div className="App"><Sidenav admin={false}/> <div id={'root'}><HomeView /></div></div></Route>
                <Route path='/lectures/:username'><div className="App"><Sidenav admin={false}/> <div id={'root2'}><RecordView /></div></div></Route>
                <Route path='/homework/:username'><div className="App"><Sidenav admin={false}/> <HomeworkView /></div></Route>
                <Route path='/classes/:username'><div className="App"><Sidenav admin={false}/> <ClassesView /></div></Route>
                <Route path='/settings/:username'><div className="App"><Sidenav admin={false}/> <SettingsView /></div></Route>
            
                <Route path='/a/users'><div className="App"><Sidenav admin={true}/> <UsersView /></div></Route>
                <Route path='/a/home'><div className="App"><Sidenav admin={true}/> <HomeView /></div></Route>
                <Route path='/a/lectures'><div className="App"><Sidenav admin={true}/><RecordView /></div></Route>
                <Route path='/a/homework'><div className="App"><Sidenav admin={true}/> <AdminHomework /></div></Route>
                <Route path='/a/classes'><div className="App"><Sidenav admin={true}/> <ClassesView /></div></Route>
                <Route path='/a/settings'><div className="App"><Sidenav admin={true}/> <SettingsView /></div></Route>
            </Switch>
        </Router>
    );
}   

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv) 