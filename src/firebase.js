import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBvp5mnAGuaawa997t44mBzhVZ-CZJzP8g",
    authDomain: "fir-chat-app-d20cb.firebaseapp.com",
    projectId: "fir-chat-app-d20cb",
    storageBucket: "fir-chat-app-d20cb.appspot.com",
    messagingSenderId: "695221638716",
    appId: "1:695221638716:web:49b5a1a5629a269f4d9539",
    measurementId: "G-9TWHSD5LBH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};