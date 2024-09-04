// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ8cCxQMelMl2FwvSEQ6D9z85YEl6Kl6Q",
  authDomain: "mysync-file-sharing-web.firebaseapp.com",
  projectId: "mysync-file-sharing-web",
  storageBucket: "mysync-file-sharing-web.appspot.com",
  messagingSenderId: "1046356993972",
  appId: "1:1046356993972:web:604e83b2846767421f74e1",
  measurementId: "G-BWBFJSSHT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};