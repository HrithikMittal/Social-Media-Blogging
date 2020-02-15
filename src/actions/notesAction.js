import { GET_NOTES } from "../actionTypes";
import { database } from "../firebase";

export function getNotes() {
  return dispatch => {
    database.on("value", snapshot => {
      dispatchEvent({
        type: GET_NOTES,
        payload: snapshot.val()
      });
    });
  };
}

export function saveNotes(note) {
  return dispatch => database.push(note);
}
