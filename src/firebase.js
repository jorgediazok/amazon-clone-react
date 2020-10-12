import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD769IYF5SNT0JYBp3d26Rm5zeYFp9n040",
  authDomain: "clone-2f49d.firebaseapp.com",
  databaseURL: "https://clone-2f49d.firebaseio.com",
  projectId: "clone-2f49d",
  storageBucket: "clone-2f49d.appspot.com",
  messagingSenderId: "411525348365",
  appId: "1:411525348365:web:7ada477181862898eee944"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};