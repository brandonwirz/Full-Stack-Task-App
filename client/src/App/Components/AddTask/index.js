import React, {Component} from "react";
import DisplayColumns from "./DisplayColumns"
import {getTasks, addTask, deleteTask, editTask} from "../../../Redux/Reducers/Tasks";
import {connect} from "react-redux";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "",
        dueDate: "",
        notes: "",
        checkedOut:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
}

handleChange(e){
    this.setState({[e.target.name]: e.target.value})
}
handleSubmit(e){
    e.preventDefault();
    this.props.addTask(this.state);

}
handleDelete(id){
    console.log("id", id)
    this.props.deleteTask(id);
      // console.log(task._id)
}
handleEdit(id){
    this.props.editTask(id)
    console.log("edit")

      // console.log(task._id)
}
handleCheckout(id){
  console.log("look check")
}
  render() {
    return (
        <div>

            <DisplayColumns
            handleCheckout={this.handleCheckout}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            />
        </div>
    )
  }
}

export default connect(state => state, {getTasks,addTask, deleteTask, editTask})(AddTask)
