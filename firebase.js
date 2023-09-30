// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2KrKpE83F40Ek1Ytu5D6xoHv1mdMA2hQ",
  authDomain: "snikrz-a9eb8.firebaseapp.com",
  projectId: "snikrz-a9eb8",
  storageBucket: "snikrz-a9eb8.appspot.com",
  messagingSenderId: "476729658745",
  appId: "1:476729658745:web:69e46dff3be73daad073a8",
  measurementId: "G-0NPML5E6X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);