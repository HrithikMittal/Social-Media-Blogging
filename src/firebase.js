import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD39U37UxmUATQ0wAV2ulFZbyIys1JU5vY",
  authDomain: "diary-c602f.firebaseapp.com",
  databaseURL: "https://diary-c602f.firebaseio.com",
  projectId: "diary-c602f",
  storageBucket: "diary-c602f.appspot.com",
  messagingSenderId: "314029576798",
  appId: "1:314029576798:web:613287d52b60fdb6ad9acf",
  measurementId: "G-QB4H08Y33R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const database = firebase.database().ref("/notes");
