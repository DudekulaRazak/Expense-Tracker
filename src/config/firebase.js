// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkIdEpUNyotYuh-oJWqOHOXKYtHA4Jhko",
  authDomain: "expense-tracker-c7ce1.firebaseapp.com",
  projectId: "expense-tracker-c7ce1",
  storageBucket: "expense-tracker-c7ce1.appspot.com",
  messagingSenderId: "191279910521",
  appId: "1:191279910521:web:b3cc0acd33e345a16f0ea8",
  measurementId: "G-TGF8F0C2BF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { auth, googleAuth,db };
