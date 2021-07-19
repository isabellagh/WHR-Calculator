import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux'
// import ClientReducer from './reducers/ClientReducer'
// import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'



ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>,
  </Router>,
  document.getElementById("root"));
