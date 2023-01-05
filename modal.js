const card1 = {
  title: 'Introduction Form',
  projectMaker: [
    'Adarsh',
    'Future Fullstack',
    '2022',
  ],
  description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
    typesetting, remaining essential'`,
  techList: [
    'HTML',
    'CSS',
  ],
  link: [
    'https://PowerLevel9000.github.io/Introduction-Form/',
    'https://github.com/PowerLevel9000/Introduction-Form/',
  ],
  image: 'projects-img/introduction-form.png',
  alt: 'introduction-form',
  lilDescription: `This project good to visit to start conversations
  with me; no accounts or sign-ups required don't worry about password .`,
  animation: [
    'right',
    'left'
  ],
};

const card2 = {
  title: 'Tutorial',
  projectMaker: [
    'Adarsh',
    'Future Fullstack',
    '2022',
  ],
  description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
    typesetting, remaining essential'`,
  techList: [
    'HTML',
    'CSS',
  ],
  link: [
    'https://Powerlevel9000.github.io/DocumentationProject/DocumentationProject.html',
    'https://github.com/PowerLevel9000/DocumentationProject',
  ],
  image: 'projects-img/cyber-security.png',
  alt: 'cyber-security',
  lilDescription: `This is my cyber-security Document, I have made this with the template
  of freeCodeCamp documentation project.`,
  animation: [
    'left',
    'right',
  ],
};

const card3 = {
  title: 'Bhardvaj&apos;s tribute',
  projectMaker: [
    'Adarsh',
    'Future Fullstack',
    '2022',
  ],
  description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
    typesetting, remaining essential'`,
  techList: [
    'HTML',
    'CSS',
  ],
  link: [
    'https://codepen.io/PowerLevel9000/pen/ExReWZm',
    'https://codepen.io/PowerLevel9000/pen/ExReWZm',
  ],
  image: 'projects-img/tribute-project.png',
  alt: 'tribute-project',
  lilDescription: `This is a tribute page for indian Bhardvaj rishi who is the father of guru of
  of guru of Pandavas and made many researches.`,
  animation: [
    'right',
    'left',
  ],
};

const card4 = {
  title: 'Penguin',
  projectMaker: [
    'Adarsh',
    'Future Fullstack',
    '2022',
  ],
  description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
    typesetting, remaining essential'`,
  techList: [
    'HTML',
    'CSS',
    'javascript',
  ],
  link: [
    'https://PowerLevel9000.github.io/Panguin-animation/',
    'https://github.com/PowerLevel9000/Panguin-animation/',
  ],
  image: 'projects-img/css-animation-1.png',
  alt: 'Penguin Animation',
  iframe: 'https://PowerLevel9000.github.io/Panguin-animation/',
  lilDescription: `I made this penguin css-animation when i was learning css month ago with free code camp
  and i love this project do checkout`,
  animation: [
    'left', 'right',
  ],
};

const projects = [card1, card2, card3, card4];

for (let i = 0; i < projects.length; i += 1) {
  const project = document.getElementById('project');
  const projectCard = document.createElement('div');
  projectCard.className = 'project one';

  if (i === 3) {
    projectCard.innerHTML = `
         <iframe title="Project" src="${projects[3].iframe}" frameborder="0"
          data-aos="fade-${projects[i].animation[0]}" data-aos-duration="1500"></iframe>
        <div data-aos="fade-${projects[i].animation[1]}" data-aos-duration="1500">
          <h2 title="Project Name" class="project-title">${projects[i].title}</h2>
          <ul title="Project Maker" class="project-maker">
            <li title="My Name" class="project-owner">${projects[i].projectMaker[0]}</li>
            <li>${projects[i].projectMaker[1]}</li>
            <li>${projects[i].projectMaker[2]}</li>
          </ul>
          <p title="Project Info" class="description info">
          ${projects[i].lilDescription}
          </p>
          <ul title="Tech Used" class="tech">
            <li>Html</li>
            <li>Css</li>
            <li>JavaScript</li>
          </ul>
          <div class=buttonLink onclick="modal(${i})">
            <button>See Project</button>
          </div>
        </div>
`
  } else {
    projectCard.innerHTML = `
        <img title="Project" src="${projects[i].image}" alt="${projects[i].alt}" data-aos="fade-${projects[i].animation[0]}"
          data-aos-duration="1500">
        <div data-aos="fade-${projects[i].animation[1]}" data-aos-duration="1500">
          <h2 title="Project Name" class="project-title">${projects[i].title}</h2>
          <ul title="Project Maker" class="project-maker">
            <li title="My Name" class="project-owner">${projects[i].projectMaker[0]}</li>
            <li>${projects[i].projectMaker[1]}</li>
            <li>${projects[i].projectMaker[2]}</li>
          </ul>
          <p title="Project Info" class="description info">
          ${projects[i].lilDescription}
          </p>
          <ul title="Tech Used" class="tech">
            <li>Html</li>
            <li>Css</li>
          </ul>
          <div class=buttonLink onclick="modal(${i})">
            <button>See Project</button>
          </div>
        </div>
`
  };

  project.appendChild(projectCard);
};



function modal(number) {
  const card = document.querySelector('#card');
  card.classList.toggle('invisible');
  const title = document.querySelector('#card-title');
  const list = document.querySelector('#card-list');
  list.innerHTML = '';

  const img = document.querySelector('.card-image');
  const desc = document.querySelector('#card-description');
  const techList = document.querySelector('#tech-list');
  techList.innerHTML = '';

  const buttonSrc = document.querySelector('#card-button-source');
  const buttonLive = document.querySelector('#card-button-live');

  title.innerHTML = projects[number].title;
  for (let i = 0; i < projects[number].projectMaker.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = projects[number].projectMaker[i];
    list.appendChild(li);
  }

  img.setAttribute('src', projects[number].image);

  for (let i = 0; i < projects[number].techList.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = projects[number].techList[i];
    techList.appendChild(li);
  }

  desc.innerHTML = projects[number].description;
  buttonSrc.setAttribute('onclick', `window.open("${projects[number].link[1]}", "_blank");`);
  buttonLive.setAttribute('onclick', `window.open("${projects[number].link[0]}", "_blank");`);
}

function toggle() {
  const card = document.querySelector('#card');
  card.classList.toggle('invisible');
}

toggle();
modal();
