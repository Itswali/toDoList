window.alert('WALI_CHECK');
window.alert("helllo");

class LisTask {
    constructor(text, id) {
        this.id = id;
        this.text = text;
    }
}

const tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];