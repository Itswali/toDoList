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
  const id = parseInt(idstring, 36);
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

class UI {
  static displayList() {
    const list = store.getList();
    list.forEach((task) => UI.addTodoList(task));
  }

  static addTodoList(task) {
    const tasksList = document.getElementById('list-container');

    const taskContent = document.createElement('li');
    taskContent.addEventListener('click', toggleLi);
    taskContent.innerHTML = `
        <input type="checkbox" id="checkbox" class="checkbox" />
        <div><input value="${task.description}" class="task-input" id="task-input-${task.id}"/></div>
        <div class="dots-container"><img type="task-btn" class="dots" src="${Dots}" id="btn-bin-${task.id}" /></div> `;

    tasksList.appendChild(taskContent);
    const taskInput = taskContent.querySelector('.task-input');
    taskInput.addEventListener('keyup', updateTask);
    inputTasks.push(taskInput);
    taskContent.classList.add('element');
    taskContent.setAttribute('id', `task-${task.id}`);
    const dotsContainer = taskContent.querySelector('.dots-container');
    dotsContainer.addEventListener('click', (e) => {
      if (e.target.className === 'bin') {
        const fullid = e.target.id;
        const idString = fullid.split('-')[2];
        const id = parseInt(idString, 10);
        UI.removeTask(id);
      }
    });
    buttonsDots.push(dotsContainer);
  }

  static deleteCompleted() {
    const liList = document.querySelectorAll('.element');
    liList.forEach((li) => {
      const checkbox = li.querySelector('.checkbox');
      if (checkbox.checked) {
        li.remove();
        const list = localStorage.getItem('list');
        const parsedlist = JSON.parse(list);
        const filteredList = parsedlist.filter((task) => {
          const fullid = li.id;
          const idString = fullid.split('-')[1];
          const id = parseInt(idString, 10);
          return task.id !== id;
        });
        localStorage.setItem('list', JSON.stringify(filteredList));
        store.resetIds();
      }
    });
  }

  static clearFields() {
    document.querySelector('#list-item').value = '';
  }

  static removeTask(id) {
    const currentList = store.getList();
    const filteredList = currentList.filter((task) => task.id !== id);
    localStorage.setItem('list', JSON.stringify(filteredList));
    store.resetIds();
    const tasks = getUItasks();
    tasks.forEach((task) => task.remove());

    UI.displayList();
  }
}

document.addEventListener('DOMContentLoaded', UI.displayList);
const btnClear = document.querySelector('#btn-clear');
btnClear.addEventListener('click', UI.deleteCompleted);
document.querySelector('#new-todo-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const id = store.count;
  const description = document.querySelector('#list-item').value;
  const completed = false;
  const task = new Task(id, description, completed);
  UI.addTodoList(task);
  store.addTask(task);
  UI.clearFields();
});
