export default class Store {
  // Counter to keep track of task index
  constructor() {
    this.count = this.getList().length;
  }

  // Call to books from storage with get item
  getList() {
    if (localStorage.getItem('list') === null) {
      this.list = [];
    } else {
      this.list = JSON.parse(localStorage.getItem('list'));
    }
    return this.list;
  }

  addTask(task) {
    const newTask = {
      id: this.count,
      description: task.description,
      completed: false,
    };

    const list = this.getList();
    list.push(newTask);
    localStorage.setItem('list', JSON.stringify(list));
    this.count += 1;
  }

  resetIds() {
    const currentList = this.getList();
    const newList = [];
    for (let i = 0; i < currentList.length; i += 1) {
      const task = currentList[i];
      task.id = i;
      newList.push(task);
    }
    localStorage.setItem('list', JSON.stringify(newList));
  }
}