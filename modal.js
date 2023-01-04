const card1 = {
  title: 'Introduction Form',
  projectMaker: [
    'Adarsh',
    'Future Fullstack',
    '2022'
  ],
  description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
    typesetting, remaining essent'`,
  techList: [
    'HTML',
    'CSS'
  ],
  link: [
    'https://PowerLevel9000.github.io/Introduction-Form/',
    'https://github.com/PowerLevel9000/Introduction-Form/',
  ],
  image: 'projects-img/introduction-form.png',
};

const card2 = {
  title: 'Tutorial',
  projectMaker: [
    'Adarsh',
    'Future Fullstack',
    '2022'
  ],
  description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
    typesetting, remaining essent'`,
  techList: [
    'HTML',
    'CSS'
  ],
  link: [
    'https://Powerlevel9000.github.io/DocumentationProject/DocumentationProject.html',
    'https://github.com/PowerLevel9000/DocumentationProject',
  ],
  image: 'projects-img/cyber-security.png',
};

const card3 = {
  title: `Bhardvaj's tribute`,
  projectMaker: [
    'Adarsh',
    'Future Fullstack',
    '2022'
  ],
  description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
    typesetting, remaining essent'`,
  techList: [
    'HTML',
    'CSS'
  ],
  link: [
    'https://codepen.io/PowerLevel9000/pen/ExReWZm',
    'https://codepen.io/PowerLevel9000/pen/ExReWZm',
  ],
  image: 'projects-img/tribute-project.png',
};

const card4 = {
  title: 'Penguin',
  projectMaker: [
    'Adarsh',
    'Future Fullstack',
    '2022'
  ],
  description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
    typesetting, remaining essent'`,
  techList: [
    'HTML',
    'CSS',
    'javascript'
  ],
  link: [
    'https://PowerLevel9000.github.io/Panguin-animation/',
    'https://github.com/PowerLevel9000/Panguin-animation/',
  ],
  image: 'projects-img/css-animation-1.png',
  iframe: 'https://PowerLevel9000.github.io/Panguin-animation/'
};

const projects = [card1, card2, card3, card4];
function modal(number) {
  const card = document.querySelector('#card');
  card.classList.toggle('invisible');
  const title = document.querySelector('#card-title');
  const list = document.querySelector('#card-list');
  list.innerHTML = '';
  const img = document.querySelector('.card-image');
  const iframe = document.querySelector('.card-iframe')
  const desc = document.querySelector('#card-description');
  const techList = document.querySelector('#tech-list');
  techList.innerHTML = ''
  const buttonsrc = document.querySelector('#card-button-source');
  const buttonlive = document.querySelector('#card-button-live');

  title.innerHTML = projects[number].title;

  for (let i = 0; i < projects[number].projectMaker.length; i ++) {
    const li = document.createElement('li');
    li.textContent = projects[number].projectMaker[i];
    list.appendChild(li);
  }
  if(number===3){
    img.classList.toggle('invisible');
    iframe.classList.toggle('invisible');
    iframe.setAttribute('src',projects[number].iframe);
  }else{
    iframe.classList.value='card-iframe invisible';
    img.classList.value='card-image'
    img.setAttribute('src', projects[number].image);
  }

  for(let i = 0; i < projects[number].techList.length; i++){
    const li = document.createElement('li');
    li.textContent = projects[number].techList[i];
    techList.appendChild(li)
  }  
  desc.innerHTML = projects[number].description;
  buttonsrc.setAttribute('onclick', `window.open("${projects[number].link[1]}", "_blank");`);
  buttonlive.setAttribute('onclick', `window.open("${projects[number].link[0]}", "_blank");`);
}
function toggle() {
  const card = document.querySelector('#card');
  card.classList.toggle('invisible');
}
toggle();
modal();
