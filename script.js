const navBtn = document.querySelector('nav button');
const overlay = document.querySelector('.desk');
const navList = document.querySelectorAll('.content a');
const menuButton = document.querySelector('#menu')

// console.log(navList)
navBtn.addEventListener('click', () => {
  overlay.classList.toggle('desk1')
  for (let a of navList) {
    a.addEventListener('click', () => {
      if (overlay.classList.value == 'desk desk1') {
        overlay.classList.value = 'desk';
        if (menuButton.classList.value == 'fa-solid fa-bars') {
          menuButton.classList.value = 'fa-solid fa-xmark'
        } else if (menuButton.classList.value == 'fa-solid fa-xmark') {
          menuButton.classList.value = 'fa-solid fa-bars'
        }
      }
    })
  }
  if (menuButton.classList.value == 'fa-solid fa-bars') {
    menuButton.classList.value = 'fa-solid fa-xmark'
  } else if (menuButton.classList.value == 'fa-solid fa-xmark') {
    menuButton.classList.value = 'fa-solid fa-bars'
  }
});
