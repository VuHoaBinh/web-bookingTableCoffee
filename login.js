import { Firebase } from "./class/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
const firebase = new Firebase();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function handleAuthStateChanged(user) {
  if (user) {
    console.log("User is signed in.", user.displayName);
    window.location.href = "../index.html";
  } else {
    async function signIn(e) {
      e.preventDefault();

      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        Swal.fire({
          title: "Đăng kí thất bại",
          text: "Please enter a valid email address.",
          icon: "error",
        });
        return;
      }

      try {
        const result = await firebase.login(email, password);
        await sleep(2000);
        Swal.fire({
          title: "Đăng kí thành công",
          text: "Welcome to my website",
          icon: "success",
        });
        const user = result.user;
        console.log(user);
      } catch (error) {
        await sleep(2000);
        Swal.fire({
          title: "Đăng kí thất bại",
          text: error.message,
          icon: "error",
        });
        console.log(error);
      }
    }

    document.getElementById("login-form").addEventListener("submit", signIn);
  }
}

onAuthStateChanged(firebase.auth, handleAuthStateChanged);
