import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfhdqebqLX9QYZhpmLwInIpqiMVw-TiuY",
  authDomain: "billing-app-assignment.firebaseapp.com",
  projectId: "billing-app-assignment",
  storageBucket: "billing-app-assignment.firebasestorage.app",
  messagingSenderId: "29695661150",
  appId: "1:29695661150:web:b83229bc6b5e48787010cf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
