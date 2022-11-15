// import _ from 'lodash';
import './style.css';

import Dots from './images/dots.png';
import Enter from './images/enter.png';
import Refresh from './images/refresh.png';

const refreshContainer = document.querySelector('.refresh-list');
const refresh = new Image();
refresh.src = Refresh;
refreshContainer.innerHTML = `<img src=${Refresh} class="refresh-icon" />`;

const enterContainer = document.querySelector('.enter-list');
const enter = new Image();
enter.src = Enter;
enterContainer.innerHTML = `<img src=${Enter} class="enter-icon" />`;

const listContainer = document.querySelector('.list-list');
const dots = new Image();
dots.src = Dots;

const tasks = [
  { index: 0, description: 'Read for 30 Minutes', completed: false },
  { index: 1, description: 'Exersisce for 30 Minutes', completed: false },
  { index: 2, description: 'Complete Today Projects', completed: false },
];

const createTask = (tasks) => {
  const taskContent = `
  <li class="element">
      <input type="checkbox" id="checkbox" class="checkbox" />
      <div>${tasks.description}</div>
      <div class="dots-container"><img class="dots"src=${Dots} /></div>
  </li>`;

  listContainer.innerHTML += taskContent;
};

const createList = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    createTask(arr[i]);
  }
};

createList(tasks);