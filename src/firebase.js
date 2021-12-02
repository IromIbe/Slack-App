import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyT5cbfGxsS5Wb9NWy7Cj3Nhn0m7hAg5A",
  authDomain: "slack-app-6e48d.firebaseapp.com",
  projectId: "slack-app-6e48d",
  storageBucket: "slack-app-6e48d.appspot.com",
  messagingSenderId: "850144127524",
  appId: "1:850144127524:web:0e480b01870c0a365c86b1",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
