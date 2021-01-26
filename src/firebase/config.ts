import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDyGffN7WbadK4cmypW98J9re0IIbkioQ",
    authDomain: "sql-curso.firebaseapp.com",
    projectId: "sql-curso",
    storageBucket: "sql-curso.appspot.com",
    messagingSenderId: "262436901189",
    appId: "1:262436901189:web:5966166d75653129d2ee2c",
    measurementId: "G-NQHHVNFWKT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log('Firebase configurado');

  export default firebase.firestore();