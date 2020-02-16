import { GET_NOTES, NOTES_STATUS } from "../actionTypes";
import { database } from "../firebase";

export function getNotes() {
  return dispatch => {
    // AS SOON AS THIS FUNCTION FIRES SHOW LOADING TO TRUE
    dispatch({
      type: NOTES_STATUS,
      payload: true
    });

    database.on(
      "value",
      snapshot => {
        dispatch({
          type: GET_NOTES,
          payload: snapshot.val()
        });
        // AS SOON AS THIS FUNCTION ENDS SHOW LOADING TO FALSE
        dispatch({
          type: NOTES_STATUS,
          payload: false
        });
      },
      () => {
        dispatch({
          type: NOTES_STATUS,
          payload: -1
        });
      }
    );
  };
}

export function saveNotes(note) {
  return dispatch => database.push(note);
}

export function deleteNote(id) {
  return dispatch => {
    database.child(id).remove();
  };
}
