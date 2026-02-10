// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgOU9s9nGR8vv9YpyRuBMJkgZpIlqP2_o",
  authDomain: "supreme-glass.firebaseapp.com",
  projectId: "supreme-glass",
  storageBucket: "supreme-glass.firebasestorage.app",
  messagingSenderId: "702644947335",
  appId: "1:702644947335:web:f5f318bf502ddc533c6b22",
  measurementId: "G-JQWLLWGHBD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);