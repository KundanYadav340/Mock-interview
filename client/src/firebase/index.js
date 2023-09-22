import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "interview-812a9.firebaseapp.com",
  projectId: "interview-812a9",
  storageBucket: "interview-812a9.appspot.com",
  messagingSenderId: "966161465115",
  appId: "1:966161465115:web:51f77d75ffd7d15373ddbe",
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
