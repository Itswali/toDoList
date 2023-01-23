import './style.css';
import initializeTodos from './Todo.js';
import loadTodos from './todoCrud.js';

window.addEventListener('DOMContentLoaded', () => {
  initializeTodos();
  loadTodos();
});