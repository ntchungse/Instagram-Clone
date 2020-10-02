import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyApENkmKF4NfFRHaYTJ1uSA-ili_KYAMBU",
    authDomain: "instagram-clone-4eac3.firebaseapp.com",
    databaseURL: "https://instagram-clone-4eac3.firebaseio.com",
    projectId: "instagram-clone-4eac3",
    storageBucket: "instagram-clone-4eac3.appspot.com",
    messagingSenderId: "1085997663633",
    appId: "1:1085997663633:web:f08081345c5cacc8434630",
    measurementId: "G-E33JP9DF1N"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };