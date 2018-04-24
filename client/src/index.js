import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/app';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import {appSetup} from "./Redux/Reducers/Tasks";

import {Provider} from "react-redux";
import store from "./Redux";

ReactDOM.render(
        <Provider store={store}>
          <Router>
              <App/>
          </Router>
        </Provider>,
        document.getElementById('root')
    );
registerServiceWorker();
store.dispatch(appSetup());
