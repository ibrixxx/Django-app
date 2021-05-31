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


function App() {
    return (
        <Router>
            <Switch>
                <Route path='/home'><div className="App"><Sidenav admin={true}/> <HomeView /></div></Route>
                <Route path='/lectures'><div className="App"><Sidenav admin={true}/><RecordView /></div></Route>
                <Route path='/homework'><div className="App"><Sidenav admin={true}/> <AdminHomework /></div></Route>
                <Route path='/classes'><div className="App"><Sidenav admin={true}/> <ClassesView /></div></Route>
                <Route path='/settings'><div className="App"><Sidenav admin={true}/> <SettingsView /></div></Route>
                <Route path='/users'><div className="App"><Sidenav admin={true}/> <UsersView /></div></Route>
            </Switch>
        </Router>
    );
}   

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv) 