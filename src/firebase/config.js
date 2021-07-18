import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAN1hIov_9XY7hDNb5u0VClIc4D27IwbnY",
    authDomain: "olx-clone-70b51.firebaseapp.com",
    projectId: "olx-clone-70b51",
    storageBucket: "olx-clone-70b51.appspot.com",
    messagingSenderId: "691578101072",
    appId: "1:691578101072:web:a99448f9ae54e8d3786055",
    measurementId: "G-87LS7VW9D1"
  };

  export default firebase.initializeApp(firebaseConfig)