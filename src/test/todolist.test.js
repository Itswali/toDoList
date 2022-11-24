import Store from '../modules/Store.js';
import Task from '../modules/task.js';

test('check adding of a task' , () => {
    const task = new Task();
      Store.addTask(task);
      Store.getList();
     expect(beta.length).toBe(0)

    });



