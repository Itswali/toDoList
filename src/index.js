// import _ from 'lodash';
import './style.css';
// Images for projects
import './modules/work.js';

import Dots from './images/dots.png';
import Enter from './images/enter.png';
import Refresh from './images/refresh.png';
// Add images in html.

const refreshContainer = document.querySelector('.refresh-list');
const refresh = new Image();
refresh.src = Refresh;
refreshContainer.innerHTML = `<img src=${Refresh} class="refresh-icon" />`;

const enterContainer = document.querySelector('.enter-list');
const enter = new Image();
enter.src = Enter;
enterContainer.innerHTML = `<img src=${Enter} class="enter-icon" />`;

const listContainer = document.querySelector('.list-container');
const dots = new Image();
dots.src = Dots;
// Array with String Bool number.


const tasks = [
  { index: 0, description: 'Read for 30 Minutes', completed: true },
  { index: 1, description: 'Exersisce for 30 Minutes', completed: false },
  { index: 2, description: 'Complete Today Projects', completed: false },
];
// create New Task Array for new list

const createTask = (tasks) => {
  const taskContent = `
  <li class="element">
      <input type="checkbox" id="checkbox" class="checkbox" />
      <div>${tasks.description}</div>
      <div class="dots-container"><img class="dots"src=${Dots} /></div>
  </li>`;
  // added task in html list
  listContainer.innerHTML += taskContent;
};


// create new index for each new task list
const createList = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    createTask(arr[i]);
  }
};
createList(tasks);





















window.alert('WALI_CHECK');


class LisTask {
  constructor(text, id) {
    this.id = id;
    this.text = text;
  }
}

const tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];


export default class theList {


  // static showList = () => {
  //   let listHtml = '';
  //   for (let i = 0; i < tasksArray.length; i += 1) {
  //     listHtml += `
  //       <div class="book-row" id="book-${i}">
  //         <p>${tasksArray[i].text}</p>
  //         <button id="btn-book-${i}" data-index=${i} class="btn-remove">Remove</button> 
  //         <hr>
  //       </div>`;
  //   }
  //   listSec.innerHTML = listHtml;
  // }


  static createTask = () => {
    const taskContent = `
  <li class="element">
      <input type="checkbox" id="checkbox" class="checkbox" />
      <div>${tasksArray[i].text}</div>
      <div class="dots-container"><img class="dots"src=${Dots} /></div>
  </li>`;
    // added task in html list
    listContainer.innerHTML += taskContent;
  };

  static addTask = (e) => {
    if (text.value.length > 0 ) {
      e.preventDefault();
      tasksArray.push(new LisTask(text.value));
      text.value = '';
      theList.createTask();
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }
  }

  static removeTask = (e) => {
    if (!e.target.matches('.dots')) return;
    const { index } = e.target.dataset;
    tasksArray.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
    theList.createTask();
  }



}