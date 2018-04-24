import React, {Component} from "react";
import {connect} from "react-redux";
import Task from "./Task";

import {getTasks, deleteTask, editTask, changeStatus} from "../../../../Redux/Reducers/Tasks";

class ToCheckOut extends Component{
  constructor(){
    super();
    this.state = {
      checkedOut: false

    }
  }

  render() {
    const task = this.props.tasks.map(task => {
      if(!task.checkedOut){
        const id = task._id.substring(10,6)
        return(
          <div className="jobs-to-checkout" key={task._id}>
          <Task
            task={task}
            id={id}
            key={task._id}
            handleDelete={this.props.deleteTask}
            handleEdit={this.props.editTask}
            handleStatus={this.props.changeStatus}
          />
          </div>
        )
      }
    }
  );
    return(
      <div>
        {task}
      </div>
    )
  }
}

export default connect(state => state, {getTasks,deleteTask,editTask,changeStatus})(ToCheckOut)
