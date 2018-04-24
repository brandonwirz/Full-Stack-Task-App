import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import auth from "./Reducers/Auth";
import tasks from "./Reducers/Tasks";

const rootReducer = combineReducers({
    auth,
    tasks
});

export default createStore (
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
