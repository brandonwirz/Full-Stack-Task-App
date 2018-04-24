import axios from "axios";
import configureInterceptor from "../../../utils/configureInterceptor"
import {getTasks} from "../Tasks"

export function signUp(credentials, history) {
    return dispatch => {
        axios.post("/auth/signup", credentials)
        .then(response => {
            dispatch ({
                type: "SIGN_UP",
                data: response.data
            })
        })
        history.push("/");
    }
}

export function logIn(credentials, history) {
  return dispatch => {
    axios.post("/auth/login", credentials)
    .then(response => {
      let {token, user, success} = response.data;
      localStorage.setItem("token", token);
      configureInterceptor();
      dispatch({
        type: "LOG_IN",
        data: response.data
      })
      history.push("/task-list");
    });
  }
}

export function logOut() {
    delete localStorage.token;
    configureInterceptor();
    return{
      type: "LOG_OUT"
    }
}


//reducer
export default function reducer(prevState = [], action) {
    switch (action.type) {
        case "SIGN_UP":
            return action.data
        case "LOG_IN":
            return action.data
        case "LOG_OUT":
            return []
        default:
            return prevState
    }
}
