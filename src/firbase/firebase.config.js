// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxlEdvreG-nv1I37y35F8Cxs2SEDSj_fI",
  authDomain: "auth-moha-milon-f182f.firebaseapp.com",
  projectId: "auth-moha-milon-f182f",
  storageBucket: "auth-moha-milon-f182f.appspot.com",
  messagingSenderId: "445468379170",
  appId: "1:445468379170:web:3af88a7766d18a8a3e627b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;