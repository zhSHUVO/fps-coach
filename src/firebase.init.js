// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrS56r9UD_RnQToMWdHjz0D0TqHUj_3Nc",
    authDomain: "fps-coach.firebaseapp.com",
    projectId: "fps-coach",
    storageBucket: "fps-coach.appspot.com",
    messagingSenderId: "323875872692",
    appId: "1:323875872692:web:46ef992886998e78ad9ce1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
