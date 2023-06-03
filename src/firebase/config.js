import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCoL4zjw6C5CBrVhFNvLPxnWGTbwmPtqVk",
    authDomain: "mymoney-12785.firebaseapp.com",
    projectId: "mymoney-12785",
    storageBucket: "mymoney-12785.appspot.com",
    messagingSenderId: "741422332057",
    appId: "1:741422332057:web:be72c1c3401dc03b976008"
  };


  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp }