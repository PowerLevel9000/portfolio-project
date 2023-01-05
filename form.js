const form = document.getElementById('form');
const name = form.elements['name']
const email = form.elements['email'];
const message = form.elements['message'];
const submit = document.getElementById('submit');
const error = document.getElementById('alert');
error.innerHTml = '';
console.log(form, submit, name, email, message, submit);
submit.addEventListener('click', () => {
  form.addEventListener('submit', (e) => {
    if(name.value.length <= 3){
      error.innerHTML = 'enter the full name';
      e.preventDefault();
    }else if(email.value !== email.value.toLowerCase() || email.value.length < 1 || email.value === undefined) {
      e.preventDefault();
      error.innerHTML = 'email field has to be in lower case';
    }else if(message.value.length < 5 || message.value === undefined ) {
      e.preventDefault()
      error.innerHTML = 'your message is valuable more words please';
    }else {
      error.innerHTML = '';
      form.submit()
    }
  });
})



