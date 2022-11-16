// import _ from 'lodash';
// Modules files od js functions
import './style.css';
import Store from './modules/Store.js';
import Task from './modules/task.js';


// Images for projects
import Bin from './images/bin.png';
import Dots from './images/dots.png';
import Enter from './images/enter.png';
import Refresh from './images/refresh.png';
// Add images in html.

const refreshContainer = document.querySelector('.refresh-container');
const refresh = new Image();
refresh.src = Refresh;
refreshContainer.innerHTML = `<img src=${Refresh} class="refresh-icon" />`;

const enterContainer = document.querySelector('.enter-container');
const enter = new Image();
enter.src = Enter;
enterContainer.innerHTML = `<img src=${Enter} class="enter-icon" />`;

const dots = new Image();
dots.src = Dots;


const store = new Store();

function getUItasks() {
  const UiTasks = document.querySelectorAll('.element');
  return UiTasks;
}

function updateTask(e) {
  const text = e.target.value;
  const value = e.target.id;
  const splitid = value.split('-');
  const idstring = splitid[2];
  const id = parseInt(idstring, 10);
  const list = store.getList();
  for (let i = 0; i < list.length; i += 1) {
    const task = list[i];
    if (task.id === id) {
      list[i].description = text;
    }
  }
  localStorage.setItem('list', JSON.stringify(list));
}

const inputTasks = [];
const buttonsDots = [];

function toggleLi(e) {
  let li;
  const { target } = e;
  const className = e.target.classList[0];
  if (e.target.type === 'checkbox' || e.target.type === 'task-btn') {
    return;
  }
  target.style.backgroundColor = 'red';
  if (className === 'task-input') {
    li = target.parentElement.parentElement;
    li.style.backgroundColor = 'red';
  }

  if (!li) {
    li = target;
  }
  const image = li.getElementsByTagName('img')[0];
  image.setAttribute('src', Bin);
  image.setAttribute('type', 'bin');
  image.setAttribute('class', 'bin');
}

// User Interface  Section Coming Up
