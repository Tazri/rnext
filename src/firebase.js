// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/**
 
const firebaseConfig = {
  apiKey: "AIzaSyDTcX6xxi7ggVN7lCoI0ijbObwxbFb8R0c",
  authDomain: "guest-book-f8e13.firebaseapp.com",
  projectId: "guest-book-f8e13",
  storageBucket: "guest-book-f8e13.appspot.com",
  messagingSenderId: "754051361118",
  appId: "1:754051361118:web:4a428b64925c3ca56b87cf",
};

 */

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

const resigerWithEmailAndPassword = async (email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);

  const user = res.user;
  return user;
};

async function loginWithEmailAndPassword(email, password) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res;
}

async function sendPasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
}

async function signInWithGoogle() {
  const res = await signInWithPopup(auth, googleAuthProvider);
  const user = res.user;

  return user;
}

async function signInWithFacebook() {
  const res = await signInWithPopup(auth, facebookAuthProvider);

  const user = res.user;

  return user;
}

export {
  auth,
  loginWithEmailAndPassword,
  resigerWithEmailAndPassword,
  sendPasswordReset,
  signInWithFacebook,
  signInWithGoogle,
};
