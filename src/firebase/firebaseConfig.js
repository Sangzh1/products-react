import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCUMM2TbNVXnVglLzlhyKvoPpMJn37MBMI",
  authDomain: "products-4f4eb.firebaseapp.com",
  projectId: "products-4f4eb",
  storageBucket: "products-4f4eb.appspot.com",
  messagingSenderId: "951877033459",
  appId: "1:951877033459:web:27b13fe437427feaa64686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)

export { auth, googleProvider }