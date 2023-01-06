const form = document.getElementById('form');
const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const submit = document.getElementById('submit');
const error = document.getElementById('alert');
error.innerHTml = '';


function validate() {
  form.addEventListener('submit', (e) => {
    if (name.value.length <= 3) {
      error.innerHTML = 'enter the full name';
      e.preventDefault();
    } else if (email.value !== email.value.toLowerCase() || email.value.length < 1) {
      e.preventDefault();
      error.innerHTML = 'email field has to be in lower case';
    } else if (message.value.length < 5 || message.value === undefined) {
      e.preventDefault();
      error.innerHTML = 'your message is valuable more words please';
    } else {
      error.innerHTML = '';
      form.submit();
    }
  });
  if (name.value.length <= 3) {
    name.value.length === 0 ? error.innerHTML = '' : error.innerHTML = 'enter the full name';
  } else if (email.value !== email.value.toLowerCase() || email.value.length < 1) {
    email.value.length === 0 ? error.innerHTML = '' : error.innerHTML = 'email field has to be in lower case';
  } else if (message.value.length < 5 || message.value === undefined) {
    message.value.length === 0 ? error.innerHTML = '' : error.innerHTML = 'your message is valuable more words please';
  } else {
    error.innerHTML = '';
  }
}

name.addEventListener('input', validate);
email.addEventListener('input', validate);
message.addEventListener('input', validate);
submit.addEventListener('click', validate);
