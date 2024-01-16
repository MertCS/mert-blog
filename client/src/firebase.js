// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-250e9.firebaseapp.com",
  projectId: "mern-blog-250e9",
  storageBucket: "mern-blog-250e9.appspot.com",
  messagingSenderId: "225789163447",
  appId: "1:225789163447:web:7c5dc14f259c8e95fc9a32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);