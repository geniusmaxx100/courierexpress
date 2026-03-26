// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW0uYIwI_z2ihj2LtdmgXNV4B5dOf3TDk",
  authDomain: "globalcourier-3ba34.firebaseapp.com",
  projectId: "globalcourier-3ba34",
  storageBucket: "globalcourier-3ba34.firebasestorage.app",
  messagingSenderId: "827988291885",
  appId: "827988291885:web:daa65d034e3773a57c63a4",
  measurementId: "G-HHDQL74MD2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
