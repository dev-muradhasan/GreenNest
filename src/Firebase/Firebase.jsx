// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkcBAN28zNgPDySRAS_N1mowByLPKru6w",
  authDomain: "green-nest-8b6a8.firebaseapp.com",
  projectId: "green-nest-8b6a8",
  storageBucket: "green-nest-8b6a8.firebasestorage.app",
  messagingSenderId: "102242384360",
  appId: "1:102242384360:web:06d3cf947a6c9c564e0c5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
