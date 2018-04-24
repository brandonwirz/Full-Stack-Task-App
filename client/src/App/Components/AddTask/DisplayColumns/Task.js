import React, {Component} from "react";
import {connect} from "react-redux";
import {changeStatus} from "../../../../Redux/Reducers/Tasks";


class Task extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag: false,
      ...this.props.task,
      id:this.props.id
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  toggleEdit(){
    this.setState((prevState)=>({
      flag: !prevState.flag
    }))
  }
  toggleStatus(){
    console.log(this.prevState)
    this.setState((prevState)=>({
      status: true
    }))
    console.log(this.prevState)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return(
      <center>
        <div className="ui cards">
          <div className="ui card">
            <div className="content">

              <div style={{display:this.state.flag?"none":"inherit"}}>
                <div style={{display:this.state.status}}>

                {console.log(this.state.checkedOut)}
                <div className="meta"><p>ID: {this.props.id}</p></div>

                <div className="header"><h5> {this.props.task.title}</h5></div>
                <div className="description"><p>Notes: {this.props.task.notes}</p></div><br /></div>
              </div>

              <div style={{display:this.state.flag?"inherit":"none"}}>


                <input
                  name="title"
                  placeholder="TITLE"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <input
                  name="notes"
                  placeholder="NOTES"
                  value={this.state.notes}
                  onChange={this.handleChange}
                />
                <button
                  className="ui basic green button"
                  onClick={()=>{this.props.handleEdit(this.props.task._id, this.state); this.toggleEdit()}}>
                  SAVE
                </button>
              </div>

              <div className="extra content">
                <div className="ui five buttons">
                  <button
                    style={{display: this.props.handleStatus === undefined ? "none" : "inherit"}}
                    className="ui basic black button"
                    onClick={()=>{this.props.handleStatus(this.props.task._id, this.props.task); this.toggleStatus()}}>
                    +
                  </button>
                  <button
                    style={{display: this.props.handleStatusBack === undefined ? "none" : "inherit"}}
                    className="ui basic black button"
                    onClick={()=>{this.props.handleStatusBack(this.props.task._id, this.props.task); this.toggleStatus()}}>
                    -
                  </button>
                  <button
                    style={{display: this.props.handleJobsDone === undefined ? "none" : "inherit"}}
                    className="ui basic black button"
                    onClick={()=>{this.props.handleJobsDone(this.props.task._id, this.props.task); this.toggleStatus()}}>
                    ✔
                  </button>
                  <button
                    className="ui basic black button"
                    onClick={()=>this.props.handleDelete(this.props.task._id)}>
                    X
                  </button>
                  <button
                    style={{display: this.props.handleEdit === undefined ? "none" : "inherit"}}
                    className="ui basic black button"
                    onClick={this.toggleEdit}>
                    Edit
                  </button>
                </div>
                </div>
              </div>
            </div>
        </div>
      </center>
    )
  }
}

export default connect(state => state, {changeStatus})(Task);
