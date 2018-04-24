import React, {Component} from "react";
import {signUp} from "../../../../Redux/Reducers/Auth";
import {connect} from "react-redux";
// import Styles from "../../../../styles.css";

class Signup extends Component {
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
    this.props.signUp(this.state, this.props.history);

  }



  render() {
    return(
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h3>Signup</h3>
        <p>Create a username and password</p>
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

export default connect(null, {signUp})(Signup);
