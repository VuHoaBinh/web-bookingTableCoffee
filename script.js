import { Firebase } from "./class/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebase = new Firebase();

function handleAuthStateChanged(user) {
  if (user) {
    console.log("User ĐÃ ĐĂNG NHẬP", user);

    document.getElementById("user-actions").innerHTML = `
      <div class="dropdown text-end">
        <a
          href="#"
          class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdR2ZctnTbCT351ihJkXLTuTxmO2iQaxqvg&s"
            alt="mdo"
            width="32"
            height="32"
            class="rounded-circle"
          />
        </a>
        <ul class="dropdown-menu text-small" style="">
          <li>
            <a class="dropdown-item" href="#">Hello, ${user.displayName}!</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">My Profile</a>
          </li>

          <li><a class="dropdown-item" href="#" id="sign-out-btn">Log out</a></li>
        </ul>
      </div>
    `;

    function handleLogout() {
      firebase.logout();
    }

    document
      .getElementById("sign-out-btn")
      .addEventListener("click", handleLogout);
  } else {
    console.log("CHƯA ĐĂNG NHẬP");
    document.getElementById("user-actions").innerHTML = `
      <ul class="navbar-nav end-links">
        <li class="nav-item">
          <a class="nav-link" href="./Html-files/login.html" style="color: black">
            Login
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="./Html-files/signup.html"
            style="color: black"
          >
            Sign-Up
          </a>
        </li>
      </ul>
    `;
  }
}

onAuthStateChanged(firebase.auth, handleAuthStateChanged);

document.getElementById("copyright-year").textContent =
  new Date().getFullYear();

window.addEventListener("beforeunload", function (event) {
  localStorage.clear();
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector("body").classList.add("loaded");
  }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.querySelector("h2").addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherContent = otherItem.querySelector("p");
          otherContent.style.maxHeight = 0;
          otherContent.style.opacity = 0;
        }
      });

      // Toggle the clicked item
      item.classList.toggle("active");
      const content = item.querySelector("p");
      if (item.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = 1;
      } else {
        content.style.maxHeight = 0;
        content.style.opacity = 0;
      }
    });
  });
});

/*Refresher*/
document.addEventListener("DOMContentLoaded", function () {
  const caduceus = document.getElementById("caduceus");

  caduceus.addEventListener("mouseover", function () {
    location.reload();
  });
});

function getVisitorCount() {
  return localStorage.getItem("visitorCount") || 0;
}

function incrementVisitorCount() {
  let count = parseInt(getVisitorCount()) + 1;
  localStorage.setItem("visitorCount", count);
  return count;
}

function displayVisitorCount() {
  const counterElement = document.querySelector(".website-counter");
  const count = incrementVisitorCount();
  counterElement.textContent = count;
}
document.addEventListener("DOMContentLoaded", displayVisitorCount);
