const projects = [
  {
    title: 'Event Template',
    projectMaker: [
      'Adarsh',
      'Future Fullstack',
      '2022',
    ],
    lilDescription: `This template is for organizing any event in future. It is build dynamically It means you just need to
    upload data in it and done `,
    description: `
      This project build with pure HTML CSS and JavaScript. IT is mostly focus on frontend designing also 
      it is build dynamically so if you want to organize any event you just need to edit data and you are 
      good to go. i learn many things while doing this project like core flexbox grid and complex navigation bars
    `,
    techList: [
      'HTML',
      'CSS',
      'javaScript',
    ],
    link: [
      'https://powerlevel9000.github.io/Dynamic-Event-Template/',
      'https://github.com/PowerLevel9000/Dynamic-Event-Template/',
    ],
    image: 'projects-img/event/desktop.png',
    imagePop: 'projects-img/event/all-devices-black.png',
    animation: ['right', 'left',],
  },
  {
    title: 'Wikipedia search',
    projectMaker: [
      'Adarsh',
      'Future Fullstack',
      '2022',
    ],
    lilDescription: `This project is build with simple implementation of javascript and api. I build this in my learning
    period with the help of <a href="https://www.javascripttutorial.net/">Javascript Tutorial</a>.`,
    description: `
      This project is build with simple implementation of javascript and api. I build this in my learning
      period with the help of <a href="https://www.javascripttutorial.net/">Javascript Tutorial</a>.
      to search anything you just need to type there and you will find relevant Wikipedia links to read stuffs
      and if you like my project give it a star on github. click on source button
    `,
    techList: [
      'HTML',
      'CSS',
      'javaScript',
    ],
    link: [
      'https://powerlevel9000.github.io/JavaScript-smallProjects/Wikipedia-Search-App/',
      'https://github.com/PowerLevel9000/JavaScript-smallProjects/tree/master/Wikipedia-App/',
    ],
    image: 'projects-img/wikipedia-search/desktop.png',
    imagePop: 'projects-img/wikipedia-search/all-devices-black.png',
    animation: ['left', 'right',],
  },
  {
    title: 'Awesome Book',
    projectMaker: [
      'Adarsh',
      'Future Fullstack',
      '2022',
    ],
    lilDescription: `This project is build for organizing your favorite books and their authors. It is build with implementation of 
    localstorage`,
    description: `
      This project is build for organizing your favorite books and their authors. It is build with implementation of 
      localstorage, and dynamic pages i.e in single page all there pages is nested. some of projects is had been reviewed and
      approved by microverse professional coders 
    `,
    techList: [
      'HTML',
      'CSS',
      'JavaScript',
      'localStorage',
    ],
    link: [
      'https://powerlevel9000.github.io/Awesome-Books/dist/',
      'https://github.com/PowerLevel9000/Awesome-Books/',
    ],
    image: 'projects-img/awesome-books/desktop.png',
    imagePop: 'projects-img/awesome-books/all-devices-black.png',
    animation: ['right', 'left',],
  },
  {
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
    imagePop: 'projects-img/css-animation-2.png',
    alt: 'Penguin Animation',
    iframe: 'https://PowerLevel9000.github.io/Panguin-animation/',
    lilDescription: `I made this penguin css-animation when i was learning css month ago with free code camp
    and i love this project do checkout`,
    animation: [
      'left', 'right',
    ],
  },
  {
    title: 'Weather App',
    projectMaker: [
      'Adarsh',
      'Future Fullstack',
      '2022',
    ],
    lilDescription: `This project is build with simple implementation of javascript and api. I build this in my learning
    period with the help of <a href="https://www.javascripttutorial.net/">Javascript Tutorial</a>.`,
    description: `
      This project is build with simple implementation of javascript and api. I build this in my learning
      period with the help of my friend Coding Freak.
      Here you can see weather status of each and every city around the world and background changes according to city weather
      and if you like my project give it a star on github. click on source button
    `,
    techList: [
      'HTML',
      'CSS',
      'javaScript',
    ],
    link: [
      'https://powerlevel9000.github.io/JavaScript-smallProjects/Weather-app/',
      'https://github.com/PowerLevel9000/JavaScript-smallProjects/Weather-app/',
    ],
    image: 'projects-img/weather-app/desktop.png',
    imagePop: 'projects-img/weather-app/all-devices-black.png',
    animation: ['right', 'left',],
  },
  {
    title: 'Task App',
    projectMaker: [
      'Adarsh',
      'Future Fullstack',
      '2022',
    ],
    lilDescription: `This project is for organizing you daily task to do you can edit mark complete and delete too
    check it out `,
    description: `
      This project is build with simple implementation of javascript and local Storage . I build this in my learning
      period of microverse in which I used unit testing webpack implementation to build this project 
      and it is useful, personally I love this app in future this website will have notification feature too 
      according to the time you assign 
    `,
    techList: [
      'HTML',
      'GitHub',
      'javaScript',
      'webpack',
    ],
    link: [
      'https://powerlevel9000.github.io/Task-to-do-app/dist/',
      'https://github.com/PowerLevel9000/Task-to-do-app/',
    ],
    image: 'projects-img/to-do-app/desktop.png',
    imagePop: 'projects-img/to-do-app/all-devices-black.png',
    animation: ['left', 'right',],
  },
];

const main = document.getElementsByTagName('main')[0];
const contact = document.getElementById('contact');
contact.innerHTML = `
        <div>
          <h2 title="Asking to Contact" class="contact-me">Contact me</h2>
          <p title="Asking opportunity">
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding. I&apos;d
            love to help with it
          </p>
        </div>
        <form id='form' action="https://formspree.io/f/mzbwnrgy" method="post">
          <fieldset>
            <input name="name" type="text" id="name" placeholder="Yeremias" maxlength="30" required>
            <input name="email" type="email" id="email" placeholder="natajayanj14@gmail.com" required>
            <textarea name="message" id="message" cols="30" rows="8" placeholder="Write your message here"
              maxlength="500" required></textarea>
            <small id="alert"></small>
            <button class="submit" type="submit" id="submit">Get In Touch</button>   
          </fieldset>
        </form>
`;
const article = document.createElement('article');
article.setAttribute('id', 'card');
article.className = 'card-container invisible';
article.innerHTML = `
  <div class="card">
        <i id="card-cross" class="fas fa-times card-cross" onclick="toggle()"></i>
        <h3 id="card-title">See Project header</h3>
        <ul id="card-list" class="card-list">
        </ul>
        <img src="./projects-img/css-animation-1.png" class="card-image" alt="project screenshot">
        <iframe src="" frameborder="0" class="card-iframe invisible"></iframe>
        <div class="popupFooter">
          <p id="card-description">
          </p>
          <div class="functionality">
            <ul id="tech-list" class="tech">
            </ul>
            <hr class="horizontal">
            <div class="button-container">
              <button type="button" id="card-button-live" class="card-button">
                See live
                <i class="fas fa-external-link-alt"></i>
              </button>
              <button type="button" id="card-button-source" class="card-button">
                See source
                <i class="fab fa-github"></i>
              </button>
            </div>
          </div>

        </div>

      </div>
`;
main.appendChild(article);

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
`;
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
`;
  }

  project.appendChild(projectCard);
}

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

  img.setAttribute('src', projects[number].imagePop);

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
