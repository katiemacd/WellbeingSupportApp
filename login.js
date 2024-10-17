import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRRSbMQ8kN8bUF8uRXU8817titrkus4XI",
  authDomain: "cs317-c4e72.firebaseapp.com",
  projectId: "cs317-c4e72",
  storageBucket: "cs317-c4e72.appspot.com",
  messagingSenderId: "44301186287",
  appId: "1:44301186287:web:8dc06505572dfcff55971a"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('Login successful');
    window.location.href = "index.html";
  } catch (error) {
    console.error('Error:', error.message);
    document.getElementById('loginError').textContent = "Error logging in";
    document.getElementById('loginError').style.display = 'block';
  }
});

document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log('Sign-up successful');
    window.location.href = "index.html";
  } catch (error) {
    console.error('Error:', error.message);
    document.getElementById('signupError').textContent = "Error signing up";
    document.getElementById('signupError').style.display = 'block';
  }
});

document.getElementById('showSignupForm').addEventListener('click', () => {
  document.getElementById('showLoginForm').style.display = 'block';
  document.getElementById('showSignupForm').style.display = 'none';
  document.getElementById('signupFormContainer').style.display = 'block';
  document.getElementById('loginFormContainer').style.display = 'none';
});
document.getElementById('showLoginForm').addEventListener('click', () => {
  document.getElementById('showLoginForm').style.display = 'none';
  document.getElementById('showSignupForm').style.display = 'block';
  document.getElementById('signupFormContainer').style.display = 'none';
  document.getElementById('loginFormContainer').style.display = 'block';
});

