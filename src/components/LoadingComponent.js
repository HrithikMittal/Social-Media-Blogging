import React, { Component } from "react";
import { connect } from "react-redux";

// WITH withRouter YOU CAN GET ACCESS TO THE HISTORY OBJECT'S PROPERTY
import { withRouter } from "react-router-dom";
import { getUser } from "../actions/userActions";
import { getNotes } from "../actions/notesAction";

class LoadingComponent extends Component {
  componentWillMount() {}
  componentWillReceiveProps() {}
  render() {}
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userLoading: state.loading.user,
    notesLoading: state.loading.notes
  };
}

export default withRouter(
  connect(mapStateToProps, { getUser, getNotes })(LoadingComponent)
);
