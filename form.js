const form = document.getElementById('form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const submitButton = document.getElementById('submit');
const error = document.getElementById('alert');
error.style.display = 'none';

function validateName() {
  if (nameField.value.length <= 3) {
    error.innerHTML = 'Enter the full name';
    error.style.display = 'block';
    return false;
  }
  return true;
}

function validateEmail() {
  if (emailField.value !== emailField.value.toLowerCase() || emailField.value.length < 1) {
    error.innerHTML = 'Email field has to be in lower case';
    error.style.display = 'block';
    return false;
  }
  return true;
}

function validateMessage() {
  if (messageField.value.length < 5 || messageField.value === '') {
    error.innerHTML = 'Your message is valuable more words please';
    error.style.display = 'block';
    return false;
  }
  return true;
}

function validateForm() {
  if (validateName() && validateEmail() && validateMessage()) {
    error.style.display = 'none';
    return true;
  }
  return false;
}

nameField.addEventListener('input', validateName);
emailField.addEventListener('input', validateEmail);
messageField.addEventListener('input', validateMessage);
form.addEventListener('input', validateForm);
submitButton.addEventListener('click', validateForm);
