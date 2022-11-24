import 'jest-localstorage-mock';
// import Store from '../modules/Store.js';
var Store = require('../modules/Store');
// var reverse = require('./reverse')
import Task from '../modules/task.js';


test('add task to the list', () => {
    const task = new Task(1, 'tasking', false);
    Store.addTask(task);
    const tasks = Store.getList();
    expect(tasks.length).toBe(1);
});
