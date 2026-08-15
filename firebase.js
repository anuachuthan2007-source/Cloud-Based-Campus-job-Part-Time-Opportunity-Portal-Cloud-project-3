import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCpvcBQ2-0JZqJUe4RJBTVRMnT7a8EPj28",
    authDomain: "campusjobportal.firebaseapp.com",
    projectId: "campusjobportal",
    storageBucket: "campusjobportal.firebasestorage.app",
    messagingSenderId: "613722243548",
    appId: "1:613722243548:web:11584aea7960772cf6cf19"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db,
    signInWithEmailAndPassword,
    signOut,
    collection,
    addDoc,
    getDocs,
    serverTimestamp
};