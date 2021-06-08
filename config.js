import * as firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBmE19WftpNHfIWPRcvNAcNGKkmhCubzGM",
  authDomain: "storyhub-e8aae.firebaseapp.com",
  projectId: "storyhub-e8aae",
  storageBucket: "storyhub-e8aae.appspot.com",
  messagingSenderId: "1058984902613",
  appId: "1:1058984902613:web:d73f0b153684275b23075c",
  measurementId: "G-JJ81ZJR7WQ"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();