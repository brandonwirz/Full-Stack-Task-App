import React from "react";
import {Link} from "react-router-dom";
import "../../styles.css";
import {connect} from "react-redux";
import {logOut} from "../../../Redux/Reducers/Auth";


function Navbar(props) {
 return(

   // <h1>Navbar</h1>

<div className="ui stackable container menu">

  <a className="active item">
    <Link to="/">Home</Link>
  </a>
  <a className="item">
    <Link to="/task-list">Task List</Link>
  </a>
  <a className="item">
    <Link to="/new-task">New Task</Link>
  </a>

  <div className="right menu">
  <div className="item">
      <Link className="ui primary button" to="/" onClick={props.logOut}>Log Out</Link>
  </div>

    <div className="item">
        <Link className="ui primary button" to="/signup">Signup</Link>
    </div>
  </div>

</div>
 )
}

export default connect(null, {logOut})(Navbar);
