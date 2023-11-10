// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "blog-app-af4d1.firebaseapp.com",
  projectId: "blog-app-af4d1",
  storageBucket: "blog-app-af4d1.appspot.com",
  messagingSenderId: "166063151713",
  appId: "1:166063151713:web:d425c781155c8978dae820"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);