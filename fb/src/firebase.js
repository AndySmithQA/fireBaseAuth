
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfrymW3fLgtHUwGjNaWHMD8GEHyozxU9g",
  authDomain: "test-2a785.firebaseapp.com",
  projectId: "test-2a785",
  storageBucket: "test-2a785.appspot.com",
  messagingSenderId: "830690086130",
  appId: "1:830690086130:web:17225efa38ac4d0176d46b",
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app; 