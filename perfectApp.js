/*
Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly*/

const submitBtn = document.querySelector("button");
console.log(submitBtn);
const form = document.querySelector("form");
console.log(form);
/*Here instead of getting just the "form" he did: 
(".container form input[type=email]"*/
const email = document.querySelector("input");
console.log(email);
const errorMessage = document.querySelector(".error-text");
console.log(errorMessage);
const errorIcon = document.querySelector("error-icon");
console.log(errorIcon);

form.addEventListener("submit", (e) => {
  e.preventDefault(); /*to prevent an automatic reload of the page each time we enter something and hit the submit button */
  const emailValue = email.value.trim(); /*to remove any white spaces*/
  if (isValidEmail(emailValue)) {
    form.classList.remove("error");
  } else {
    form.classList.add("error");
  }
});

function isValidEmail(email) {
  return /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(
    email
  );
}
