"use strict";
alert("Please enter your details for verification!.");

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.username.value < 5) {
    alert("Username must be at least 5 characters long");
    event.preventDefault();
    if (form.password.value < 8) {
      alert(
        "Password must be at least 8 characters long with at least one uppercase,one lowercase letter, one number and one special character"
      );
      event.preventDefault();
    }
    let emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  }
  if (form.email.value.match(emailregex)) {
    alert("Please enter a valid email address");
    event.preventDefault();
  }
});
