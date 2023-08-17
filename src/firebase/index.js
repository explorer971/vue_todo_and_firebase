import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBv1YS9lxMiY2OiawkKBQW_c4doClSmyMA",
  authDomain: "todolist-5c7f2.firebaseapp.com",
  projectId: "todolist-5c7f2",
  storageBucket: "todolist-5c7f2.appspot.com",
  messagingSenderId: "1045620287724",
  appId: "1:1045620287724:web:f1ec49519368ea8eb15dc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}