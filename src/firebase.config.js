import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn1LiVxh2FHmv65h206etLJcUhKN0r1HE",
  authDomain: "resturantapp-ws01.firebaseapp.com",
  databaseURL:
    "https://resturantapp-ws01-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "resturantapp-ws01",
  storageBucket: "resturantapp-ws01.appspot.com",
  messagingSenderId: "614789865465",
  appId: "1:614789865465:web:257a1ba1352bf1802e6728",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
