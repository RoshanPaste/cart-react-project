import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6d0CUm2gXlfCyWFgxZVBSRg429t4GnWI",
  authDomain: "cn-cart.firebaseapp.com",
  databaseURL: "https://cn-cart.firebaseio.com",
  projectId: "cn-cart",
  storageBucket: "cn-cart.appspot.com",
  messagingSenderId: "95054153619",
  appId: "1:95054153619:web:95f71a613377982fb8ca66"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
