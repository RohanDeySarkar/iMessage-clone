import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAftJzwQ2qj3zdKWGvfcbTRHdMCeNgtBno",
    authDomain: "imessage-clone-542e3.firebaseapp.com",
    projectId: "imessage-clone-542e3",
    storageBucket: "imessage-clone-542e3.appspot.com",
    messagingSenderId: "327733936981",
    appId: "1:327733936981:web:79bab237a83a3efee925dc",
    measurementId: "G-BFJ30CWTQB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;