import axios from "axios";
import configureInterceptor from "../../../utils/configureInterceptor";

export function appSetup() {
  configureInterceptor();
  return getTasks();
}

export function getTasks() {
  return dispatch => {
    axios.get("/api/task")
    .then(response => {
        dispatch({
          type: "GET_TASKS",
          data: response.data
        })
    })
  }
}

export function addTask(task, history) {
  return dispatch => {

    axios.post("/api/task", task)
    .then(response => {
        dispatch({
          type: "ADD_TASK",
          data: response.data
        })
    })
    history.push("/task-list");
  }
}

export function deleteTask(id) {
    return dispatch => {
        axios.delete(`/api/task/${id}`)
        .then(response => {
            dispatch ({
                type: "DELETE_TASK",
                data: response.data
            })
        })
    }
}

export function editTask(id, data){
  return dispatch => {
    axios.put(`/api/task/${id}`, data)
    .then(response => {
        dispatch (getTasks())
    })
  }
}


export function checkOut(id) {
   return dispatch => {
       axios.put(`/api/task/${id}`)
       .then(response => {
           dispatch ({
               type: "CHECK_OUT",
               data: response.data
           })
       })
   }
}
export function changeStatus(id, data){
  return dispatch => {
    data.checkedOut = true;
    axios.put(`/api/task/${id}`, data)
    .then(response => {
      dispatch (getTasks())


    })
  }
}
export function changeStatusBack(id, data){
  return dispatch => {
    data.checkedOut = false;
    axios.put(`/api/task/${id}`, data)
    .then(response => {
      dispatch (getTasks())


    })
  }
}
export function changeJobsDone(id, data){
  return dispatch => {
    data.jobsDone = true;
    axios.put(`/api/task/${id}`, data)
    .then(response => {
      dispatch (getTasks())


    })
  }
}
export default function reducer(prevState = [], action) {
  switch(action.type) {
    case "GET_TASKS":
      console.log("look third");
      return action.data
    case "ADD_TASK":
      return [...prevState,action.data]
    case "DELETE_TASK":
    console.log("deleting tasks case")
      return prevState.filter(task => task._id !== action.data._id )
    case "EDIT_TASK":
      return [...prevState, action.data]
    case "CHANGE_STATUS":
      console.log("changing status case")
      console.log(prevState[1].checkedOut)
      prevState[1].checkedOut = true
      console.log(prevState[1].checkedOut)
      return prevState
    case "CHECK_OUT":
      return [...prevState, action.data]
    case "LOG_OUT":
      return []
    default:
      return prevState
  }
}
