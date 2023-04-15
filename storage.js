const formFields = ['name', 'email', 'message'];
const contactForm = document.getElementById('form');

function storeForm() {
  const myStorage = {};
  formFields.forEach((field) => {
    myStorage[field] = contactForm[field].value;
  });
  localStorage.setItem('storage', JSON.stringify(myStorage));
}

formFields.forEach((field) => {
  contactForm[field].addEventListener('change', storeForm);
});

function refresh() {
  if (localStorage.getItem('storage')) {
    const oldStorage = localStorage.getItem('storage');
    const newStorage = JSON.parse(oldStorage);
    formFields.forEach((field) => {
      contactForm[field].value = newStorage[field];
    });
  }
}

window.onload = refresh;
