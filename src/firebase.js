import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getStorage} from "firebase/storage"
import { getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCwYonUbO9i0Ea_G_TJ920ZemUmim5jHK4",
  authDomain: "what-s-chat-a98db.firebaseapp.com",
  projectId: "what-s-chat-a98db",
  storageBucket: "what-s-chat-a98db.firebasestorage.app",
  messagingSenderId: "1042290039342",
  appId: "1:1042290039342:web:bd3125c9f45a2bcc575dbf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);