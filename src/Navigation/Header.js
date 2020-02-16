import React from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";

import App from "../components/App";
import Login from "../components/Login";

import { connect } from "react-redux";
import { getUser, logout } from "../actions/userActions";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        DIARY 2020
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            {props.user == null ? (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            ) : (
              <Link
                className="nav-link"
                onClick={() => props.logout()}
                to="/logout"
              >
                Logout
              </Link>
            )}
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Redirect from="/logout" to="/"></Redirect>
      </Switch>
    </nav>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUser, logout })(Header);
