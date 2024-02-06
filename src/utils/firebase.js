import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsuwyo-w8MjCVmzJWvuUnBltzk_hKhK88",
  authDomain: "netflixgpt-81f9b.firebaseapp.com",
  projectId: "netflixgpt-81f9b",
  storageBucket: "netflixgpt-81f9b.appspot.com",
  messagingSenderId: "266987180764",
  appId: "1:266987180764:web:8223d00ab50b5031c1da19",
  measurementId: "G-9JQW22CF1B",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
