const navBtn = document.querySelector("nav button");
const overlay = document.querySelector('.desk');
const navList = document.querySelectorAll('.content a');
const menubutton = document.querySelector('#menu')

// console.log(navList)
navBtn.addEventListener('click',()=>{
    overlay.classList.toggle('desk1')
    for(let a of navList) {
        a.addEventListener('click', () =>{
            if(overlay.classList.value=='desk desk1') {
                overlay.classList.value='desk';
                if(menubutton.classList.value=="fa-solid fa-bars") {
                    menubutton.classList.value="fa-solid fa-xmark"
                }else if (menubutton.classList.value=="fa-solid fa-xmark") {
                    menubutton.classList.value="fa-solid fa-bars"
                }
            }
        })
    }
    if(menubutton.classList.value=="fa-solid fa-bars") {
        menubutton.classList.value="fa-solid fa-xmark"
    }else if (menubutton.classList.value=="fa-solid fa-xmark") {
        menubutton.classList.value="fa-solid fa-bars"
    }
});
