// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiYIhKKCEl8dBK9AVGRbpTyZS3U20BbXs",
  authDomain: "ladieshaat-4fffd.firebaseapp.com",
  projectId: "ladieshaat-4fffd",
  storageBucket: "ladieshaat-4fffd.appspot.com",
  messagingSenderId: "1025501390091",
  appId: "1:1025501390091:web:ca75812aa136f232732e0e",
  measurementId: "G-XQPG543Y0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);