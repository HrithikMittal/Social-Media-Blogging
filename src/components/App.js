import React, { Component } from "react";
import "../styles/App.css";
import NoteCard from "./NoteCard";

import _ from "lodash";

import { connect } from "react-redux";
import { getNotes, saveNotes, deleteNote } from "../actions/notesAction";

class App extends Component {
  state = {
    title: "",
    body: "",
    notes: {}
  };

  // handle submit
  handleSubmit = event => {
    event.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.saveNotes(note);
    this.setState({
      title: "",
      body: ""
    });
  };

  componentDidMount() {
    this.props.getNotes();
  }

  // render notes
  renderNotes = () => {
    return _.map(this.props.notes, (note, key) => {
      return (
        <NoteCard
          key={key}
          click={() => this.props.deleteNote(key)}
          title={note.title}
          body={note.body}
        />
      );
    });
  };

  render() {
    return (
      <div>
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

              {this.renderNotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps, { getNotes, saveNotes, deleteNote })(
  App
);
