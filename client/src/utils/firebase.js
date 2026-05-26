
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-e3706.firebaseapp.com",
  projectId: "interview-e3706",
  storageBucket: "interview-e3706.firebasestorage.app",
  messagingSenderId: "1021595533837",
  appId: "1:1021595533837:web:efd18bb56c0104540c4b44"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}