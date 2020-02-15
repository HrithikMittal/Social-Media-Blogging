import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

// REDUX
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { composewithDevTools } from "redux-devtools-extension";

// CREATE REDUX STORE -> REDUCERS -> ACTIONS | applyMiddleware()
const store = createStore(composewithDevTools());

// PROVIDE THE STORE TO REACT

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
