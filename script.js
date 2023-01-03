const navBtn = document.querySelector('nav button');
const overlay = document.querySelector('.desk');
const navList = document.querySelectorAll('.content a');
const menuButton = document.querySelector('#menu');

navBtn.addEventListener('click', () => {
  overlay.classList.toggle('desk1');
  menuButton.classList.toggle('fa-bars');
  menuButton.classList.toggle('fa-xmark');
});
for (const a of navList) {
  a.addEventListener('click', () => {
    if (overlay.classList.value === 'desk desk1') {
      overlay.classList.value = 'desk';
      menuButton.classList.value = 'fa-solid fa-bars';
    }
  });
}