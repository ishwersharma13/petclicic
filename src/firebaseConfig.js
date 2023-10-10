// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn8akxtAiRyr-WZ-Am_N-6wjlLBLYN0Hg",
  authDomain: "petworld-5b2ea.firebaseapp.com",
  projectId: "petworld-5b2ea",
  storageBucket: "petworld-5b2ea.appspot.com",
  messagingSenderId: "636442725307",
  appId: "1:636442725307:web:fa2d88a2ab64de6e31529e",
  measurementId: "G-LR77JHKC22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);