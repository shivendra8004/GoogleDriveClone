import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCoILFjg1FS7IrP85Fly9lbKu9QTkvG3GI",
    authDomain: "drive-project-d5b85.firebaseapp.com",
    projectId: "drive-project-d5b85",
    storageBucket: "drive-project-d5b85.appspot.com",
    messagingSenderId: "312642396494",
    appId: "1:312642396494:web:610eacadd7cdbe55ff7e1f",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, db, storage };
