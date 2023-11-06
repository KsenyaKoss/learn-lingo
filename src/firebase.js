import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD5fwzH88Rdr8aJpWHjevCG4wHs9XYXciY",
  authDomain: "learnlingvo-491b1.firebaseapp.com",
  databaseURL: "https://learnlingvo-491b1-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "learnlingvo-491b1",
  storageBucket: "learnlingvo-491b1.appspot.com",
  messagingSenderId: "801121241363",
  appId: "1:801121241363:web:652af757d537699fa7b2e6",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
