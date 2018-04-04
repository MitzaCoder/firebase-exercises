const firebase = require('firebase');
require('firebase/firestore');

const config = {
  apiKey: "AIzaSyDrQEEnsqWG2jHmc_QU2X961gh3ABiB1ZI",
  authDomain: "qshop-41936.firebaseapp.com",
  databaseURL: "https://qshop-41936.firebaseio.com",
  projectId: "qshop-41936",
  storageBucket: "qshop-41936.appspot.com",
  messagingSenderId: "1038298312778"
};

module.exports = firebase.initializeApp(config);
