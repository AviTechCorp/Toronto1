import { initializeApp } from 'firebase/app';
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBve_MuJ8338Bwhpr6GvDVDbD8A8gCEfqk",
  authDomain: "learning-20470.firebaseapp.com",
  projectId: "learning-20470",
  storageBucket: "learning-20470.firebasestorage.app",
  messagingSenderId: "366983331310",
  appId: "1:366983331310:web:a617ef808c1bd823ab22ff"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("User created successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Logged in successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

const loginLink = document.getElementById('show-login');
const registerLink = document.getElementById('show-register');

loginLink.addEventListener('click', () => {
  registerForm.classList.remove('active-form');
  loginForm.classList.add('active-form');
});

registerLink.addEventListener('click', () => {
  loginForm.classList.remove('active-form');
  registerForm.classList.add('active-form');
});
