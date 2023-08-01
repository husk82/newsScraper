import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "news-scraper-262d0.firebaseapp.com",
  projectId: "news-scraper-262d0",
  storageBucket: "news-scraper-262d0.appspot.com",
  messagingSenderId: "719241518131",
  appId: "1:719241518131:web:f13e7e2e48653bcc831746",
  measurementId: "G-GDL72XSJEF",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
