// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogify-b4d60.firebaseapp.com",
  projectId: "blogify-b4d60",
  storageBucket: "blogify-b4d60.appspot.com",
  messagingSenderId: "237223549395",
  appId: "1:237223549395:web:d8662f77b114a229b2b726",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
