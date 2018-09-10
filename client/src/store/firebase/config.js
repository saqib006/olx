import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDLruaJqVX29Bo5uB-tlcXz-QKheM4O0PQ",
    authDomain: "react-cloud-chat-app.firebaseapp.com",
    databaseURL: "https://react-cloud-chat-app.firebaseio.com",
    projectId: "react-cloud-chat-app",
    storageBucket: "react-cloud-chat-app.appspot.com",
    messagingSenderId: "311567804894"
  };
  var fireObj = firebase.initializeApp(config);

  export default fireObj;


 