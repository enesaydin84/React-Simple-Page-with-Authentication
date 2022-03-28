import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk8ZWLQPvuoO5JjC4B6Jy2pzHFdZiKCCE",
  authDomain: "carfollow-bed32.firebaseapp.com",
  projectId: "carfollow-bed32",
  storageBucket: "carfollow-bed32.appspot.com",
  messagingSenderId: "145988544310",
  appId: "1:145988544310:web:b75648c5bfde6a9cf27597",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service(database and authentication)
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp=firebase.firestore.Timestamp;
export { projectFirestore,projectAuth,timestamp };
