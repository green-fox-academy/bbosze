import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCLMgzrY5n7ttfgi58LlV_uC-gAOQNc62A",
    authDomain: "catch-of-the-day-bbosze.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-bbosze.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

 export default base;
