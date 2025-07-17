// Import Firebase core + auth
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Your Firebase config
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
const auth = getAuth();

// Listen for form submit
document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector("button[type='submit']");
  submit.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        alert("Logged in successfully!");
        window.location.href = "./home.html"; // ✅ Correct for GitHub Page
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Login failed: " + errorMessage);
        console.error(error.code, errorMessage);
      });
  });
});
