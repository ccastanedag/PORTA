import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBu2TQZlMwH38vKRulGGqJGMEU9U5Yszos",
  authDomain: "porta-7fe44.firebaseapp.com",
  databaseURL: "https://porta-7fe44.firebaseio.com",
  projectId: "porta-7fe44",
  storageBucket: "porta-7fe44.appspot.com",
  messagingSenderId: "866887706105"
};
firebase.initializeApp(config);
let db = firebase.firestore()

export default db