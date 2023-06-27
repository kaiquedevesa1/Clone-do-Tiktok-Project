
import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCt5oejYmYxN9lOzK1qk7VsmwZwA569cUQ",
  authDomain: "tiktoke-clone-ebac.firebaseapp.com",
  projectId: "tiktoke-clone-ebac",
  storageBucket: "tiktoke-clone-ebac.appspot.com",
  messagingSenderId: "139545691839",
  appId: "1:139545691839:web:658f03f74ff9ea965b680a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;