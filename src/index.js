import './style.css';
import HeadLine from './components/HeadLine';
import Form from './components/Form';
import ListItem from './components/ListItem';
import { addTask, removeTask } from './components/addRemove';
import {
  completeTask,
  incompleteTask,
  clearCompletedTasks,
  editTask,
} from './components/completeTask';

const container = document.querySelector('.container');
container.insertBefore(HeadLine(), container.firstChild);
container.insertBefore(Form(), container.firstChild.nextSibling);

let tasks = [];
const tasksConatiner = container.querySelector('.list-container');
const clearBtn = document.querySelector('.clear-btn');

const renderItems = () => {
  tasksConatiner.replaceChildren('');
  clearBtn.setAttribute('disabled', '');
  tasks.forEach((task) => {
    tasksConatiner.appendChild(ListItem(task));
    if (task.completed) {
      clearBtn.removeAttribute('disabled');
    }
  });
};

const setStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const getStorage = () => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  if (data) tasks = data;
};

getStorage();
renderItems();

tasksConatiner.addEventListener('addtask', (event) => {
  tasks = addTask(tasks, event.detail.description);
  renderItems();
  setStorage();
});

tasksConatiner.addEventListener('removetask', (e) => {
  tasks = removeTask(tasks, e.detail.index);
  renderItems();
  setStorage();
});

tasksConatiner.addEventListener('edittask', (e) => {
  const { index, newTask } = e.detail.info;
  tasks = editTask(tasks, index, newTask);
  setStorage();
});

tasksConatiner.addEventListener('itemcompleted', (e) => {
  const { index } = e.detail;
  tasks = completeTask(tasks, index);
  renderItems();
  setStorage();
});

tasksConatiner.addEventListener('itemincomplete', (e) => {
  const { index } = e.detail;
  tasks = incompleteTask(tasks, index);
  renderItems();
  setStorage();
});

clearBtn.addEventListener('click', () => {
  tasks = clearCompletedTasks(tasks);
  renderItems();
  setStorage();
});
