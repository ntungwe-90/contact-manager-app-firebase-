import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD2dLKWDfXgfTdQhjrgbCSUzUIso_auDhQ",
    authDomain: "contact-manager-app-4cfb7.firebaseapp.com",
    databaseURL: "https://contact-manager-app-4cfb7.firebaseio.com",
    projectId: "contact-manager-app-4cfb7",
    storageBucket: "contact-manager-app-4cfb7.appspot.com",
    messagingSenderId: "534840627428",
    appId: "1:534840627428:web:50ad6fac651856e9749cf1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;