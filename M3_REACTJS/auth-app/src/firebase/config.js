// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
/* TODO: Add SDKs for Firebase products that you want to use*/
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //Datos de CONFIG de FIREBASE
  apiKey: "AIzaSyCksThSLBt3oVpClBbEHKSa93PdBdWeWUk",
  authDomain: "auth-app-2f8dd.firebaseapp.com",
  projectId: "auth-app-2f8dd",
  storageBucket: "auth-app-2f8dd.appspot.com",
  messagingSenderId: "385121926047",
  appId: "1:385121926047:web:21b9aa63e62c220a2c5baa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
