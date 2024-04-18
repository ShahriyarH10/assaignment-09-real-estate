// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMV9_8GR2Ozsk2lXzmjB_S5ZUr9U95jvE",
  authDomain: "fir-auth-a9986.firebaseapp.com",
  projectId: "fir-auth-a9986",
  storageBucket: "fir-auth-a9986.appspot.com",
  messagingSenderId: "287275873360",
  appId: "1:287275873360:web:61acfdc88ab90115a04d55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)