export default class Store {
    constructor() {
        this.count = this.getlist().length;
    }
    getlist() {
        if(localStorage.getItem('list') === null) {
            this.list = [];
        } else {
            this.list = JSON.parse(localStorage.getItem('list'));
        }
        return this.list;
    }

    addTask(task) {
        const newTask = {
            id:this.count,
            description: task.description,
            completed: false,
        };

        const list = this.getlist();
        list.push(newTask);
        localStorage.setItem('list' , JSON.stringify(list));
        this.count+=1;
    }

}