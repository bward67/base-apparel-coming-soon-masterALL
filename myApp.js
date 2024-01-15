/*
Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly*/

const arrowBtn = document.querySelector(".arrow-btn");
const form = document.querySelector("form");
const email = document.querySelector(".email");
const small = document.querySelector("small");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = email.value.trim();
  if (emailValue === "") {
    small.innerHTML = "The input field is empty";
    form.classList.add("error");
  } else if (!isValidEmail(emailValue)) {
    small.innerHTML = "The email address is not formatted correctly";
    form.classList.add("error");
  } else {
    form.innerHTML = `<h1>Thank you.</h1><p>You have been successfully added to our mailing list.</p>`;
  }
});

function isValidEmail(email) {
  return /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(
    email
  );
}
