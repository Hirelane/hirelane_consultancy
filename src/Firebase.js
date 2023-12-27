import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAyYfKwb6cBwB5z3a-T_eeuRp_tPUlDnps",
    authDomain: "hirelane-consultancy.firebaseapp.com",
    projectId: "hirelane-consultancy",
    storageBucket: "hirelane-consultancy.appspot.com",
    messagingSenderId: "825513744683",
    appId: "1:825513744683:web:602a12b739809cd4c10d6e",
    measurementId: "G-0RB6QFB0V6",
    storageBucket: 'gs://hirelane-consultancy.appspot.com'
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage};