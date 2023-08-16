import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCoILFjg1FS7IrP85Fly9lbKu9QTkvG3GI",
    authDomain: "drive-project-d5b85.firebaseapp.com",
    projectId: "drive-project-d5b85",
    storageBucket: "drive-project-d5b85.appspot.com",
    messagingSenderId: "312642396494",
    appId: "1:312642396494:web:610eacadd7cdbe55ff7e1f",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();
const db = getFirestore();

export { auth, provider, db, storage };
