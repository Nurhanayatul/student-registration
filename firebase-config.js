import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrGWIZylub6WznlIov5pDwJrKO5VISR-E",
  authDomain: "registration-system-fc333.firebaseapp.com",
  projectId: "registration-system-fc333",
  storageBucket: "registration-system-fc333.firebasestorage.app",
  messagingSenderId: "532072866738",
  appId: "1:532072866738:web:ab0d31d66de95cf3c6baab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);