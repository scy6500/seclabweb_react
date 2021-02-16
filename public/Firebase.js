import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig  = {
    apiKey: "AIzaSyA5QTKRbLj1AMzo4vw_sFbAdJVT41_p4II",
    authDomain: "kookmin-infoseclab.firebaseapp.com",
    projectId: "kookmin-infoseclab",
    storageBucket: "kookmin-infoseclab.appspot.com",
    messagingSenderId: "11011778350",
    appId: "1:11011778350:web:d6918438575bd200033cbf",
    measurementId: "G-H3E2BEK56F"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }
 const dataBase = firebase.firestore();

export default dataBase;