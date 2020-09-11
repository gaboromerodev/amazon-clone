import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEqOAGAQ3wLCx8NK0fG53-d-GHI4ysVzk",
  authDomain: "clone-d9ea4.firebaseapp.com",
  databaseURL: "https://clone-d9ea4.firebaseio.com",
  projectId: "clone-d9ea4",
  storageBucket: "clone-d9ea4.appspot.com",
  messagingSenderId: "521718812190",
  appId: "1:521718812190:web:434317593158fadc38280f",
  measurementId: "G-2FHCDWC558"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };