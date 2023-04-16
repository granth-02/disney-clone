import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMRtQGKf67r_kwYxch-4EmbspgBLHyIHs",
  authDomain: "disney-561b1.firebaseapp.com",
  projectId: "disney-561b1",
  storageBucket: "disney-561b1.appspot.com",
  messagingSenderId: "304434680819",
  appId: "1:304434680819:web:4990c79b6f6b381b727886",
  measurementId: "G-PJ883WTGYG"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider}

export default db;