import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {logIn} from "../../../../Redux/Reducers/Auth";
import {connect} from "react-redux";
// import {Switch} from "react-redux";
// import {Link} from "react-redux-router";

// import Styles from "../../../../styles.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }




  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logIn(this.state, this.props.history);
  }

  render() {
    return(
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h3>Login</h3>

        <div className="field">
            <label>username</label>
            <div>
                <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Username"/>
            </div>
        </div>
        <div className="field">
            <label>password</label>
            <div>
                <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"/>
            </div>
        </div>
        <div>
          <button className="ui button">Submit</button>
        </div>
      </form>
    )
  }
}

export default withRouter(connect(null,{logIn})(Login))




// return(
//     <form>
//     <h1>Signup</h1>
//     <h2>Please create a User ID and Password</h2>
//     User ID<input type="text"/>
//     Password<input type="text"/>
//     <button>submit</button>
//     <h2>Click submit to signup</h2>
//     </form>
// )
