// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2ORduZ26GuJGLfzoL0mpY9PXpsGc2QWA",
  authDomain: "bn-design-81771.firebaseapp.com",
  projectId: "bn-design-81771",
  storageBucket: "bn-design-81771.firebasestorage.app",
  messagingSenderId: "722919128131",
  appId: "1:722919128131:web:f49843b7d8791b3ee628f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)