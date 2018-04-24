import React, {Component} from "react";
import {connect} from "react-redux";
import Task from "./Task";

import {getTasks, deleteTask, editTask, changeStatus,changeStatusBack,changeJobsDone} from "../../../../Redux/Reducers/Tasks";

class JobsDone extends Component{
  constructor(){
    super();
    this.state = {
      checkedOut: false

    }
  }

  render() {


    const task = this.props.tasks.map(task => {
      if(task.checkedOut&&task.jobsDone){
        const id = task._id.substring(10,6)
        return(
          <Task
            task={task}
            id={id}
            key={task._id}
            handleDelete={this.props.deleteTask}
            handleStatusBack={this.props.changeStatusBack}

          />
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

export default connect(state => state, {getTasks,deleteTask,editTask,changeStatus,changeStatusBack,changeJobsDone})(JobsDone)
