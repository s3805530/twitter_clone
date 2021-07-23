// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCK79SHrmrmuLJhQJ5vw-WTo_B7c4WApAE",
    authDomain: "twitter-clone-f09a2.firebaseapp.com",
    projectId: "twitter-clone-f09a2",
    storageBucket: "twitter-clone-f09a2.appspot.com",
    messagingSenderId: "55098987021",
    appId: "1:55098987021:web:bed1f0da0af9f56488fb44",
    measurementId: "G-JCPG0JE2TM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()
export default db;

