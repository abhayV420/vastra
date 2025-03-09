import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHK8R-5-7mPTjJutCM37Mfx91Cg8kWoU4",
  authDomain: "vastra-796e6.firebaseapp.com",
  projectId: "vastra-796e6",
  storageBucket: "vastra-796e6.firebasestorage.app",
  messagingSenderId: "866448245249",
  appId: "1:866448245249:web:ffe9f0d4ed95418f7b3600",
  databaseURL: "https://vastra-796e6-default-rtdb.firebaseio.com/",
};


export const app = initializeApp(firebaseConfig);