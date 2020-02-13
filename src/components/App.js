import React, { Component } from "react";
import "../styles/App.css";

import { database } from "../firebase";

class App extends Component {
  state = {
    title: "",
    body: ""
  };

  // handle submit
  handleSubmit = event => {
    event.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body
    };
    database.push(note);
    this.setState({
      title: "",
      body: ""
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    className="form-control no-border"
                    placeholder="Title..."
                    onChange={event => {
                      this.setState({ title: event.target.value });
                    }}
                    value={this.state.title}
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <textarea
                    type="text"
                    name="body"
                    className="form-control no-border"
                    placeholder="Body..."
                    onChange={event => {
                      this.setState({ body: event.target.value });
                    }}
                    required
                    value={this.state.body}
                  ></textarea>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary col-sm-12">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
