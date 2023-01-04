const navBtn = document.querySelector('nav button');
const overlay = document.querySelector('.desk');
const navList = document.querySelectorAll('.content a');
const menuButton = document.querySelector('#menu');

navBtn.addEventListener('click', () => {
  overlay.classList.toggle('desk1');
  menuButton.classList.toggle('fa-bars');
  menuButton.classList.toggle('fa-xmark');
});

navList.forEach((a) => {
  a.addEventListener('click', () => {
    if (overlay.classList.contains('desk1')) {
      overlay.classList.value = 'desk';
      menuButton.classList.value = 'fa-solid fa-bars';
    }
  });
});
