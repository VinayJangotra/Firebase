// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqF6UzPzK5pUEv2vwCVI3H1aK-Slbhqww",
  authDomain: "app-f538f.firebaseapp.com",
  projectId: "app-f538f",
  storageBucket: "app-f538f.appspot.com",
  messagingSenderId: "704352661398",
  appId: "1:704352661398:web:2934cb35778c4ee338b7b7",
  databaseURL:"https://app-f538f-default-rtdb.firebaseio.com"
};
// Initialize Firebase
 export const app = initializeApp(firebaseConfig);