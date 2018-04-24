import React from "react";
import {Switch, Route} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AddTask from "./Components/AddTask";
import NewTask from "./Components/AddTask/NewTask";
import Footer from "./Components/Footer";
import Login from "./Components/Home/Login";
import Signup from "./Components/Home/Signup";

export default function App(props) {
  return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/task-list" component={AddTask} />
        <Route exact path="/new-task" component={NewTask} />
        <Route exact path="/log-in" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </div>
  )
}
