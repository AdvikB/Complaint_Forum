import firebase from 'firebase'
require("@firebase/firestore")


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCgVlvOiisuWNSKFFnK0DXw4HLwC7r3hRE",
  authDomain: "complaint-forum-f58fd.firebaseapp.com",
  databaseURL : "https://complaint-forum-f58fd.firebaseio.com",
  projectId: "complaint-forum-f58fd",
  storageBucket: "complaint-forum-f58fd.appspot.com",
  messagingSenderId: "366740556477",
  appId: "1:366740556477:web:e9d24b66a3323044b605d4"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

