
function addTask(task) {
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


  function removeTask(id) {
    const currentList = store.getList();
    const filteredList = currentList.filter((task) => task.id !== id);
    localStorage.setItem('list', JSON.stringify(filteredList));
    store.resetIds();
    const tasks = getUItasks();
    tasks.forEach((task) => task.remove());

    UI.displayList();
  }