// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb76fwwjyFcvL_Yycf8z4XPDnSn_iUQWY",
  authDomain: "ecommerce-7a2c5.firebaseapp.com",
  projectId: "ecommerce-7a2c5",
  storageBucket: "ecommerce-7a2c5.appspot.com",
  messagingSenderId: "675015125841",
  appId: "1:675015125841:web:1d4977833caa1390bf8170"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


