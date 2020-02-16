import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";

//  NAVIGATION
import Header from "./Navigation/Header";
import { BrowserRouter } from "react-router-dom";

// REDUX
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// CREATE REDUX STORE -> REDUCERS -> ACTIONS-Action Type | applyMiddleware()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// PROVIDE THE STORE TO REACT

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
