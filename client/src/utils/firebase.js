// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API,
  authDomain: "task-manager-9e55a.firebaseapp.com",
  projectId: "task-manager-9e55a",
  storageBucket: "task-manager-9e55a.appspot.com",
  messagingSenderId: "520608766431",
  appId: "1:520608766431:web:22c889dc9a41b165d24c6a",
  measurementId: "G-D07HNC30QL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);