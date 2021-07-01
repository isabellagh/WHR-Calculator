import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ClientReducer from './reducers/ClientReducer'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(ClientReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>,
  </BrowserRouter>,
  document.getElementById("root"));
