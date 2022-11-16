// import _ from 'lodash';
import './style.css';
// Images for projects
import './modules/task.js';
import './modules/Store.js'


import Bin from './images/bin.png';
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

