const projects = [
  {
    title: 'Leader Board',
    projectMaker: [
      'Adarsh',
      'Full-Stack Dev',
      '2022',
    ],
    lilDescription: `
    This project is buid with an API for any game organization to add their Scores
    on the server by the player I know there is an issue anyone could add scores lol.
    <small>it's mobile version is not ready yet!</small>
    `,
    description: `
    This project is buid with an API for any game organization to add their Scores
    on the server by the player I know there is an issue anyone could add scores lol,
    but as this project is build for learning Apin not building the actual prof. leaderboard.<small>
    it's mobile version is not ready yet!</small>
    `,
    techList: [
      'SASS',
      'JavaScript',
      'API',
      'HTML',
    ],
    link: [
      'https://powerlevel9000.github.io/LeaderboardWithApi/dist/',
      'https://github.com/PowerLevel9000/LeaderboardWithApi/',
    ],
    image: 'projects-img/leaderboard/desktop.png',
    imagePop: 'projects-img/leaderboard/all-devices-black.png',
    animation: ['left', 'right'],
  },
  {
    title: 'Event Template',
    projectMaker: [
      'Adarsh',
      'Full-Stack Dev',
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
      'GitHub',
    ],
    link: [
      'https://powerlevel9000.github.io/Dynamic-Event-Template/',
      'https://github.com/PowerLevel9000/Dynamic-Event-Template/',
    ],
    image: 'projects-img/event/desktop.png',
    imagePop: 'projects-img/event/all-devices-black.png',
    animation: ['right', 'left'],
  },
  {
    title: 'Wikipedia search',
    projectMaker: [
      'Adarsh',
      'Full-Stack Dev',
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
    animation: ['left', 'right'],
  },
  {
    title: 'Awesome Book',
    projectMaker: [
      'Adarsh',
      'Full-Stack Dev',
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
      'CSS',
      'JavaScript',
      'localStorage',
      'HTML',
    ],
    link: [
      'https://powerlevel9000.github.io/Awesome-Books/dist/',
      'https://github.com/PowerLevel9000/Awesome-Books/',
    ],
    image: 'projects-img/awesome-books/desktop.png',
    imagePop: 'projects-img/awesome-books/all-devices-black.png',
    animation: ['right', 'left'],
  },
  {
    title: 'Weather App',
    projectMaker: [
      'Adarsh',
      'Full-Stack Dev',
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
    animation: ['left', 'right'],
  },
  {
    title: 'Task App',
    projectMaker: [
      'Adarsh',
      'Full-Stack Dev',
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
      'SASS',
      'javaScript',
      'webpack',
      'HTML',
    ],
    link: [
      'https://powerlevel9000.github.io/Task-to-do-app/dist/',
      'https://github.com/PowerLevel9000/Task-to-do-app/',
    ],
    image: 'projects-img/to-do-app/desktop.png',
    imagePop: 'projects-img/to-do-app/all-devices-black.png',
    animation: ['right', 'left'],
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
        <img src="" class="card-image" alt="project screenshot">
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
  let animation1 = 'left';
  let animation2 = 'right';
  if (i % 2 === 0) {
    animation1 = 'right';
    animation2 = 'left';
  }
  projectCard.innerHTML = `
        <img title="Project" src="${projects[i].image}" alt="${projects[i].alt}" data-aos="fade-${animation1}"
          data-aos-duration="1500">
        <div data-aos="fade-${animation2}" data-aos-duration="1500">
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
            <li>${projects[i].techList[0]}</li>
            <li>${projects[i].techList[1]}</li>
            <li>${projects[i].techList[2]}</li>
          </ul>
          <div class=buttonLink onclick="modal(${i})">
            <button>See Project</button>
          </div>
        </div>
`;
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
  document.querySelector('.card-image').setAttribute('src', '');
}

toggle();
modal();
