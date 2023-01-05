const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userComment = document.getElementById('message');
const contactForm = document.getElementById('form');

function storeForm() {
  const myStorage = {
    userName: userName.value,
    userEmail: userEmail.value,
    userComment: userComment.value,
  };
  localStorage.setItem('storage', JSON.stringify(myStorage));
}

userName.addEventListener('change', storeForm);
userEmail.addEventListener('change', storeForm);
userComment.addEventListener('change', storeForm);

function refresh() {
  if (localStorage.getItem('storage')) {
    const oldStorage = localStorage.getItem('storage');
    const newStorage = JSON.parse(oldStorage);
    contactForm.name.value = newStorage.userName;
    contactForm.email.value = newStorage.userEmail;
    contactForm.message.value = newStorage.userComment;
  }
}

window.onload = refresh;
