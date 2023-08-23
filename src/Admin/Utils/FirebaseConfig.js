
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDW_YWEdSSK4dvQ-tqS3B2tgmbcb6dfUco",
  authDomain: "finalapi-storage.firebaseapp.com",
  projectId: "finalapi-storage",
  storageBucket: "finalapi-storage.appspot.com",
  messagingSenderId: "298220460465",
  appId: "1:298220460465:web:aa36751284fb53f4c58590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)