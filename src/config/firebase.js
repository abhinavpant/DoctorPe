import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAdNf_ZUllf9LVQWAO_J15QRSukGUcDyQg",
    authDomain: "doctorpe22.firebaseapp.com",
    projectId: "doctorpe22",
    storageBucket: "doctorpe22.appspot.com",
    messagingSenderId: "317808009495",
    appId: "1:317808009495:web:0653dcb15eaa2ec63e9752",
    measurementId: "G-Y8BLY7L2B3"
  };

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;