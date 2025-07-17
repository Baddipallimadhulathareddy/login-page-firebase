// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgaVXIwE3Tq-DtTWEFVgMnFvnBue1P8y4",
  authDomain: "college-febf1.firebaseapp.com",
  projectId: "college-febf1",
  storageBucket: "college-febf1.firebasestorage.app",
  messagingSenderId: "1040838077336",
  appId: "1:1040838077336:web:95388c9cc7a58d9ddd99ed",
  measurementId: "G-7LSCFRWNZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const auth = getAuth();

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Account created successfully!");
      window.location.href = "./index.html";

    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
      console.error(errorCode, errorMessage);
    });
});


