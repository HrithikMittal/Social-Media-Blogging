import React from "react";

const NoteCard = props => {
  return (
    <div className="jumbotron">
      <div style={{ border: "10px" }}>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <button className="btn btn-danger btn-xs" onClick={props.click}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
