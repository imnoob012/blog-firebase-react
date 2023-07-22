import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAJ9hf6gDTEyceQxWBFDrwvnQcwooJFYlo",
  authDomain: "blog-ac73d.firebaseapp.com",
  projectId: "blog-ac73d",
  storageBucket: "blog-ac73d.appspot.com",
  messagingSenderId: "308079517567",
  appId: "1:308079517567:web:7ea7c0e707feb99945444a",
  measurementId: "G-HYWCHQ1QCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};