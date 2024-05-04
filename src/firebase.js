// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5lGBMNbw66bi9TKbUoJb0SeNLELZYO3M",
  authDomain: "tubitakfarm.firebaseapp.com",
  projectId: "tubitakfarm",
  storageBucket: "tubitakfarm.appspot.com",
  messagingSenderId: "39700985835",
  appId: "1:39700985835:web:cf704565044d57399fcbae",
  measurementId: "G-EWYM9G3MHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);