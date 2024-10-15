import { Firebase } from "./class/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
const firebase = new Firebase();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function handleAuthStateChanged(user) {
  if (user) {
    window.location.href = "../index.html";
  } else {
    async function signUp(e) {
      e.preventDefault();

      const displayName = document.getElementById("signup-name").value;
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      const passwordConfirm = document.getElementById(
        "signup-password-confirm"
      ).value;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        Swal.fire({
          title: "Đăng kí thất bại",
          text: "Please enter a valid email address.",
          icon: "error",
        });
        return;
      }

      if (password !== passwordConfirm) {
        Swal.fire({
          title: "Đăng kí thất bại",
          text: "Passwords do not match.",
          icon: "error",
        });
        return;
      }

      const signUpButton = document.querySelector(".btn-login[type='submit']");
      signUpButton.disabled = true;

      try {
        const result = await firebase.register(email, password);
        await firebase.update(displayName);
        await sleep(2000);

        Swal.fire({
          title: "Đăng kí thành công",
          text: "Welcome to my website",
          icon: "success",
        });
        console.log(result);
        // window.location.href = "../index.html";
      } catch (error) {
        await sleep(2000);
        Swal.fire({
          title: "Đăng kí thất bại",
          text: error.message || "Something went wrong.",
          icon: "error",
        });
        console.error(error);
      } finally {
        signUpButton.disabled = false;
      }
    }

    document.getElementById("signup-form").addEventListener("submit", signUp);
  }
}
onAuthStateChanged(firebase.auth, handleAuthStateChanged);
