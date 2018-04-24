import React from "react";
import {connect} from "react-redux";
import {getTasks} from "../../../../Redux/Reducers/Tasks";
import ToCheckOut from "./ToCheckOut";
import InProgress from "./InProgress";
import JobsDone from "./JobsDone";
// import "../../styles.css"

class DisplayColumns extends React.Component {
  componentDidMount(){
    this.props.getTasks();
  }
  render() {
    return(
        <div className="row">
            <div className="column jobs-to-checkout">
                <h3>Task to checkout</h3>
                <ToCheckOut
                handleEdit={this.props.handleEdit}
                handleDelete={this.props.handleDelete}
            />
            </div>

            <div className="column in-progess">
            <h3>Task In Progress</h3>
            <InProgress
              handleEdit={this.props.handleEdit}
              handleCheckout={this.props.handleCheckout}
          />

            </div>

            <div className="column jobs-done">
                <h3>Jobs Done</h3>
                <JobsDone/>
            </div>
        </div>
    )
  }
}

export default connect(null, {getTasks})(DisplayColumns);
